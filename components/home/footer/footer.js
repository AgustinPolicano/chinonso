import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/layout"
import { Icon, transition } from "@chakra-ui/react"
import {IoLocationSharp, IoCall, IoMailOutline} from "react-icons/io5"

export const Footer = () => {
    return(
        <Box
        h="auto"
        w="100%"
        bg="rgb(97,71,88);"
        bg="linear-gradient(90deg, rgba(97,71,88,1) 0%, rgba(142,92,82,1) 20%, rgba(179,110,78,1) 30%, rgba(193,117,76,1) 61%, rgba(202,121,76,1) 77%, rgba(97,71,88,1) 96%);"
        >
            <Center>
                
            <Flex>
                <Box
                color="blanco"
                fontFamily="Montserrat"
                mt={{base:"2rem", xl:"5rem"}}
                fontSize="20px"
                id="contacto"
                >
                   Información de contacto
                   
                   <hr
                    width="300px"
                   ></hr>
              
                   <Box
                     fontSize="15px"
                     mt="1rem"
                     _hover={{color:"negro", transition: "0.5s"}}
                   >
                       
                    <Icon as={IoCall}  boxSize="25px"/> +5493413355042

                   </Box>
                   <Box
                     fontSize="15px"
                     mt="1rem"
                     _hover={{color:"negro", transition: "0.5s"}}
                   >
                       
                    <Icon as={IoMailOutline} boxSize="25px"/> chinonso@tutamail.com
                   </Box>
                </Box>
            
                <Box>
                    
                </Box>
            </Flex>
   
              
            </Center>
            <Center>
            <Box
            color="blanco"
            mt={{base:"2rem", xl:"6rem"}}
            fontSize={{base:"12px", xl:"15px"}}
            textAlign={{base:"center", xl:"unset"}}
            >
            © 2021 SPK-Solutions. Todos los derechos reservados. 
            </Box>
            </Center>
        </Box>
    )







}