import { Button } from "@chakra-ui/button"
import { Box, Center } from "@chakra-ui/layout"
import { HeaderHomeBar } from "./headerHomeBar"
import { Link, animateScroll as scroll } from "react-scroll";

export const HeaderHomeContent = () => {
    return(
        <Box
        backgroundImage="./slider2.png"
        h={{base:"auto", xl:"900px"}}
        w="100%"
        backgroundAttachment="fixed"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        >
          <HeaderHomeBar/>
          <Box
          mt={{base:"15rem", xl:"20rem"}}
          color="blanco"
          pos="relative"
          right={{ md: "15%", xl: "15%" }}
          fontFamily="Adam"
          textAlign="center"
          fontSize={{base:"40px", xl:"60px"}}
          >
          <Center
          >
           Traducciones <br></br>
           Profesionales
          </Center>
          <Box
          >
              <Link  activeClass="active"
                          to="info"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
              <Button
               bg="naranja"
               fontFamily="Montserrat"
               color="negro"
               mt={{base:"3rem", xl:"0"}}
               mb={{base:"2rem", xl:"0"}}
               w={{base:"30%", xl:"15%"}}
               h="50px"

               _hover={{bg:"naranjaOscuro"}}
              >
                  ¿Más info?
              </Button>
              </Link>
          </Box>
          </Box>
        </Box>
    )
}