import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import appdev from "../assests/app developement.png";
import webdev from "../assests/web developemet.png";
import PLC from "../assests/PLC programming.png";
import automation from "../assests/automation.jpg";
import Embedded from "../assests/embedded system.png";
import Image from "next/image";
import { Box, Stack } from "@mui/material";

export default function Coursecard() {
  return (
    <>
      <Stack
        direction="column"
        sx={{ width: "100%",gap:3, alignItems:"center"  }}
      >
       
        <Stack
          sx={{
            flexDirection:{
                xl:'row',
                lg:'row',
                md:'row',
                sm:'column',
                xs:'column',
            },
            gap:{
                xl:2,
                lg:2,
                md:3,
                sm:3,
                xs:3,
            },
            width: "90%",
            justifyContent: "space-around",
            alignItems:'center',
          }}
        >
           {/* ---------------- App developement Start -------------------- */}
          <Card
            sx={{
              width:{
                xl:'30%',
                lg:'30%',
                md:'100%',
                sm:'100%',
                xs:'100%',
            },
              padding: "10px 0",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <Image
              src={appdev}
              component="img"
              alt="App Developement"
              height="50"
            />
            <CardContent>
            <Typography  sx={{fontSize:'18px',fontWeight:'bold'}}>                
            App Developement
              </Typography>
              <Typography sx={{fontSize:'14px',color:"text.secondary",textAlign: "center"}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Box>
              <Button
                sx={{
                  fontWeight:'bold',
                  borderRadius: "2px",  
                  transition:'0.5s',
                  backgroundColor: "#dfd9d9",
                  color: "#000",
                  padding: "5px 10px",
                  "&:hover": {
                  borderRadius: "10px",
                  color: "#fff",
                    backgroundColor: "#4dc3ff",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Card>

           {/* ---------------- App developement end -------------------- */}


           {/* ---------------- web developement Start -------------------- */}
          <Card
            sx={{
                width:{
                    xl:'30%',
                    lg:'30%',
                    md:'100%',
                    sm:'100%',
                    xs:'100%',
                },
              padding: "10px 0",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <Image
              src={webdev}
              component="img"
              alt="Web Developement"
              height="50"
            />
            <CardContent>
            <Typography  sx={{fontSize:'18px',fontWeight:'bold'}}>                
            Web Developement
              </Typography>
              <Typography sx={{fontSize:'14px',color:"text.secondary",textAlign: "center"}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Box>
              <Button
               sx={{
                fontWeight:'bold',
                borderRadius: "2px",  
                transition:'0.5s',
                backgroundColor: "#dfd9d9",
                color: "#000",
                padding: "5px 10px",
                "&:hover": {
                borderRadius: "10px",
                color: "#fff",
                  backgroundColor: "#4dc3ff",
                },
              }}
              >
                Learn More
              </Button>
            </Box>
          </Card>
          {/* ---------------- App developement end -------------------- */}

{/* ---------------- Arduino developement Start -------------------- */}
          <Card
            sx={{
                width:{
                    xl:'30%',
                    lg:'30%',
                    md:'100%',
                    sm:'100%',
                    xs:'100%',
                },
              padding: "10px 0",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <Image
              src={automation}
              component="img"
              alt="Auduino Code"
              height="50"            />
            <CardContent>
              <Typography  sx={{fontSize:'18px',fontWeight:'bold'}}>
                Automation
              </Typography>
              <Typography  sx={{fontSize:'14px',color:"text.secondary",textAlign: "center"}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Box>
              <Button
               sx={{
                fontWeight:'bold',
                borderRadius: "2px",  
                transition:'0.5s',
                backgroundColor: "#dfd9d9",
                color: "#000",
                padding: "5px 10px",
                "&:hover": {
                borderRadius: "10px",
                color: "#fff",
                  backgroundColor: "#4dc3ff",
                },
              }}
              >
                Learn More
              </Button>
            </Box>
          </Card>

{/* ---------------- Arduino developement end -------------------- */}

        </Stack>

        <Stack
          sx={{
            flexDirection:{
                xl:'row',
                lg:'row',
                md:'row',
                sm:'column',
                xs:'column',
            }, 
            gap:{
                xl:2,
                lg:2,
                md:2,
                sm:2,
                xs:2,
            },
            width: "90%",
            justifyContent: "space-around",
            alignItems:'center',
            marginBottom:'20px'
          }}
        >

{/* ---------------- Embedded developement Start -------------------- */}

          <Card
            sx={{
                width:{
                    xl:'30%',
                    lg:'30%',
                    md:'100%',
                    sm:'100%',
                    xs:'100%',
                },
              borderRadius: "20px",
              padding: "10px 0",
              textAlign: "center",
            }}
          >
            <Image
              src={Embedded}
              component="img"
              alt="Embedded System"
              height="50"
            />
            <CardContent>
            <Typography  sx={{fontSize:'18px',fontWeight:'bold'}}>                
            Embedded System
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign= "center" >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Box>
              <Button
                sx={{
                  fontWeight:'bold',
                  borderRadius: "2px",  
                  transition:'0.5s',
                  backgroundColor: "#dfd9d9",
                  color: "#000",
                  padding: "5px 10px",
                  "&:hover": {
                  borderRadius: "10px",
                  color: "#fff",
                    backgroundColor: "#4dc3ff",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Card>

{/* ---------------- Embedded developement end -------------------- */}

{/* ---------------- PLC developement start -------------------- */}

          <Card
            sx={{
                width:{
                    xl:'30%',
                    lg:'30%',
                    md:'100%',
                    sm:'100%',
                    xs:'100%',
                },
              borderRadius: "20px",
              padding: "10px 0",
              textAlign: "center",
            }}
          >
            <Image
              src={PLC}
              component="img"
              alt="PLC Programming"
              height="50"
            />
            <CardContent>
            <Typography  sx={{fontSize:'18px',fontWeight:'bold'}}>
             PLC Programming
              </Typography>
              <Typography sx={{fontSize:'14px',color:"text.secondary",textAlign: "center",}}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Box>
              <Button
               sx={{
                fontWeight:'bold',
                borderRadius: "2px",  
                transition:'0.5s',
                backgroundColor: "#dfd9d9",
                color: "#000",
                padding: "5px 10px",
                "&:hover": {
                borderRadius: "10px",
                color: "#fff",
                  backgroundColor: "#4dc3ff",
                },
              }}
              >
                Learn More
              </Button>
            </Box>
          </Card>
{/* ---------------- PLC developement end -------------------- */}

        </Stack>
      </Stack>
    </>
  );
}
