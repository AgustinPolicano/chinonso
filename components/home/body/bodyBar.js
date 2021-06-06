import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Box, Center, SimpleGrid } from "@chakra-ui/layout"
import { Flex, Progress } from "@chakra-ui/react"
import { Link, animateScroll as scroll } from "react-scroll";

export const BodyBar = () => {
    return(
        <Box>
            <Flex>
            <Image 
            src="./pc1.jpg"
            w={{xl:"50%"}}
            display={["none", "block", "block", "block"]}
            />
         
            <Box
            bg="blanco"
            h="auto"
            w={{base:"100%", xl:"50%"}}
       
            >
         
            <Box
            
            fontFamily="Adam"
            fontSize={{base:"20px", xl:"25px"}}
            mt={{base:"2rem", xl:"10rem"}}
            ml={{base:"0", xl:"7rem"}}
            textAlign={{base:"center", xl:"unset"}}
            >
                Contamos con grandes <br></br>
                lingüistas experimentados
                <Box
              fontFamily="Montserrat"
              mt="2rem"
              color="gray.500"
              fontSize={{base:"12px", xl:"15px"}}
                >
                    Contamos con grandes profesionales con más de 20 años de <br></br>
                    experiencia en esta industria. La selección de personal para <br></br>
                    nuestra empresa se basa en tres etapas muy rigurosas <br></br>
                    con el objetivo de asegurar la calidad de nuestro empleados.
                </Box>
                <Box>
                <Link
    activeClass="active"
    to="contacto"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
                    <Button
                      textAlign="center" 
                      color="negro"
                      fontSize="15px"
                      bg="naranjaOscuro"   
                      fontFamily="Montserrat" 
                      w={{base:"40%", xl:"25%"}}
                      mt={{base:"2rem", xl:"3rem"}}
                      mb={{base:"2rem", xl:"0"}}
                      _hover={{bg:"negro", color:"naranja"}}
                           
                    >
                        Contactanos!
                    </Button>
                    </Link>
                </Box>
            </Box>
      
            </Box>
            </Flex>
            <Flex>
            <Box
             h="auto"
             w={{base:"100%", xl:"50%"}}
             className={"bgBar"}
             id="idiomas"
             
            >
              
              <Box
              color="blanco"
              fontFamily="Adam"
              fontSize={{base:"20px", xl:"25px"}}
              textAlign={{base:"center", xl:"unset"}}
              pos="relative"
              pl={{base:"0", xl:"250"}}
              pt={{base:"0", xl:"100"}}
              >
                  Expertos en más <br></br>
                  de 20 lenguajes
                  <Box
                    fontFamily="Montserrat"
                    mt="2rem"
                    color="blanco"
                    mb="2rem"
                    fontSize={{base:"12px", xl:"15px"}}
                  >
                      En SPK-Solutions trabajamos con más de 20 lenguajes <br></br>
                      diferentes, desde Inglés hasta el Portugués. Somos una <br></br>
                      empresa de confianza dispuesta a solucionar tus problemas.
                  </Box>
                  <Flex flexDir="column"
                  w="75%"
                  margin={{base:"auto", xl:"unset"}}
                  fontSize="15px"
                  mt="2rem"
                  fontFamily="Montserrat"
  
                  >
                     <Box>
                         Inglés
                         <Progress h="10px" mt="1rem" value={100} colorScheme="yellow"/>
                     </Box>
                     <Box
                     mt="2rem"
                     >
                     Alemán
                    <Progress  h="10px"  mt="1rem" value={70} colorScheme="yellow"/>
                    </Box>
                    <Box
                     mt="2rem"
                     >
                     Español
                    <Progress  h="10px"  mt="1rem" value={100} colorScheme="yellow"/>
                    </Box>
                    <Box
                     mt="2rem"
                     >
                     Ruso
                    <Progress  h="10px"  mt="1rem" value={60} colorScheme="yellow"/>
                    </Box>
                    <Link
    activeClass="active"
    to="contacto"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
                    <Button
                    textAlign="center" 
                    color="negro"
                    fontSize="15px"
                    bg="naranjaOscuro"   
                    fontFamily="Montserrat" 
                    w="50%"
                    mt="3rem"   
                    mb="6rem"     
                    _hover={{bg:"negro", color:"naranja"}}     
                  >
                  Más lenguajes
              </Button>
              </Link>
                  </Flex>
            
              </Box>
            
              </Box>
              <Image src="./gente1.jpg"
              w="50%"
              display={["none", "block", "block", "block"]}
              />
            </Flex>
            {/* <Box
            bg="blanco"
            >
            <Image 
            src="./pc1.jpg"
            w="50%"
            />
            <Center>
            <Box
            ml="38rem"
            mt="-35rem"
            fontFamily="Adam"
            fontSize="25px"
        
            >
                Contamos con grandes <br></br>
                lingüistas experimentados
                <Box
              fontFamily="Montserrat"
              mt="2rem"
              color="gray.500"
              fontSize="15px"
                >
                    Contamos con grandes profesionales con más de 20 años de <br></br>
                    experiencia en esta industria. La selección de personal para <br></br>
                    nuestra empresa se basa en tres etapas muy rigurosas <br></br>
                    con el objetivo de asegurar la calidad de nuestro empleados.
                </Box>
                <Box>
                    <Button
                     fontSize="15px"
                     fontFamily="Montserrat"
                     bg="naranja"
                     color="negro"
                     mt="2rem"
                    >
                        Prueba de boton
                    </Button>
                </Box>
            </Box>
            </Center>

            </Box>
          
            <Box
             h="auto"
             w="50%"
             bg="rgb(97,71,88);"
             bg="linear-gradient(90deg, rgba(97,71,88,1) 0%, rgba(142,92,82,1) 20%, rgba(179,110,78,1) 30%, rgba(193,117,76,1) 61%, rgba(202,121,76,1) 77%, rgba(97,71,88,1) 96%);"
            >
              <Box
              color="blanco"
              fontFamily="Adam"
              fontSize="25px"
              pos="relative"
              pl="350"
              pt="100"
              >
                  Expertos en más <br></br>
                  de 20 lenguajes
                  <Box
                    fontFamily="Montserrat"
                    mt="2rem"
                    color="blanco"
                    fontSize="15px"
                  >
                      En SPK-Solutions contamos con mas
                  </Box>
              </Box>
           
            </Box> */}
        </Box>
    )








}