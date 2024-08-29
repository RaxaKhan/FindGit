import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Stack, TextField, IconButton, Container, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddLocationIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ApartmentIcon from '@mui/icons-material/Apartment';

export default function Create() {
    const [user, setUser] = useState("");
    const [userData, setUserData] = useState("");

    const handleClick = async () => {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const myData = await response.json();
        setUserData(myData);
        console.log("User data: ", userData);
    };

    return (
   
        <Box
            bgcolor={"#141d30"}
            color={"white"}
         height= "110vh"
           
        >
                <Typography
                    textAlign="center"
                    direction="row"
                    alignItems="center"                
                    mb={2}
                >
                    GitSearch
                </Typography>
                
          

            <Stack
                direction={["column", "row"]}
                alignItems="center"
                spacing={2}
                mr={3}
                backgroundColor="#1d2b47"
                borderRadius={9}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        bgcolor: '#1d2b47', 
                        '&:hover': {
                            bgcolor: '#1d2b47', 
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: 'none', 
                        },
                    },
                    '& .MuiInputAdornment-root .MuiButtonBase-root': {
                        bgcolor: '##0379ff', 
                        borderRadius: '4px', 
                    },
                }}
            >
                <TextField
                    variant="outlined"
                    placeholder="Search name..."
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{ color: '#0379ff', marginRight: 1 }}>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClick}
                                    sx={{
                                        zIndex: 1,
                                        borderRadius: 2,
                                        mr: 2,
                                        bgcolor: '#0379ff', 
                                        color: 'white', 
                                        boxShadow: 'none', 
                                        '&:hover': {
                                            bgcolor: '##0379ff', 
                                            boxShadow: 'none', 
                                        },
                                    }}
                                >
                                    Search
                                </Button>
                            </InputAdornment>
                        ),
                        sx: {
                            '& .MuiInputBase-input': {
                                color: 'white',
                                bgcolor: 'transparent', 
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', 
                            },
                        },
                    }}
                    inputProps={{
                        style: { color: 'white' }, 
                    }}
                />
            </Stack>

                
{userData && (
                <Box
                
                bgcolor="#1d2b47"
                borderRadius={5}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                m={3}
                maxWidth="90%" 
                overflow="hidden"
            >
                <Box
                    py={3}
                    borderRadius={3}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    textAlign="left"
                    gap={5}
                    flexWrap="wrap"
                    justifyContent="center" 
                >
                    <img
                        alt="User Image"
                        src={userData.avatar_url}
                        style={{ width: 120, height: 120, borderRadius: '50%' }}
                    />
                    <Box
                    ml={2}
                    >
                        <Typography variant="h4" fontFamily={'bold'}>{userData.name}</Typography>
                        <Typography>
                            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#0379ff', textDecoration: 'none' }}>
                                {userData.login}
                            </a>
                        </Typography>
            
                        <Typography variant="caption">Joined on {new Date(userData.created_at).toDateString()}</Typography>
                    </Box>
                </Box>
            
                <Stack flexWrap={"wrap"} direction="row" justifyContent="space-evenly" my={1}>
                          <Stack alignItems="center">
                            <Typography>Repos</Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                              {userData.public_repos}
                            </Typography>
                          </Stack>
                          <Stack mx={5} alignItems="center">
                            <Typography>Followers</Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                              {userData.followers}
                            </Typography>
                          </Stack>
                          <Stack alignItems="center">
                            <Typography>Following</Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                              {userData.following}
                            </Typography>
                          </Stack>
                        </Stack>
            
                <Stack
                          alignItems={["left", "center"]}
                          m={1}
                          direction={["column", "row"]}
                        >
                          <Stack>
                            <Stack alignItems={"center"} m={1} direction={"row"}>
                              <IconButton sx={{ backgroundColor: "white" }}>
                                <AddLocationIcon fontSize="small" />
                              </IconButton>
                              <Typography mx={2}>
                                {userData.location || "Location not provided"}
                              </Typography>
                            </Stack>
                            <Stack alignItems={"center"} m={1} direction={"row"}>
                              <IconButton sx={{ backgroundColor: "white" }}>
                                <ApartmentIcon fontSize="small" />
                              </IconButton>
                              <Typography marginLeft={2}>
                              {userData.company || "None"}
                              </Typography>
                            </Stack>
                          </Stack>
                          <Stack ml={[0, 3]}>
                            <Stack alignItems={"center"} m={1} direction={"row"}>
                              <IconButton sx={{ backgroundColor: "white" }}>
                                <TwitterIcon fontSize="small" />
                              </IconButton>
                              <Typography marginLeft={2}>
                                {userData.twitter_username || "Twitter not linked"}
                              </Typography>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"} m={1}>
                              <IconButton sx={{ backgroundColor: "white" }}>
                                <GitHubIcon fontSize="small" />
                              </IconButton>
                              <Typography marginLeft={2}>
                                <a href={userData.html_url} style={{ color: "#ffffff" }}>
                                  GitHub Profile
                                </a>
                              </Typography>
                            </Stack>
                          </Stack>
                        </Stack>
            
            
            </Box>
)}
            </Box>
    
            
    );
}