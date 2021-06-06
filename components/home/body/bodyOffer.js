import { Image } from "@chakra-ui/image"
import { Box, Center } from "@chakra-ui/layout"
import { Button, SimpleGrid, Flex } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import {IoDocumentText, IoBriefcase, IoMapSharp, IoGlobeOutline} from "react-icons/io5"
import { Link, animateScroll as scroll } from "react-scroll";

export const BodyOffer = () => {
    return(
        <Box>
            <Box 
            h="auto"
            w="100%"
            bg="rgb(97,71,88);"
            bg="linear-gradient(90deg, rgba(97,71,88,1) 0%, rgba(142,92,82,1) 20%, rgba(179,110,78,1) 30%, rgba(193,117,76,1) 61%, rgba(202,121,76,1) 77%, rgba(97,71,88,1) 96%);"
            id="offer"
            >
               <Box
               color="blanco"
               fontFamily="Adam"
               pos="relative"
               top={{base:"0", xl:"10rem"}}
             
               fontSize={{base:"25px", xl:"40px"}}
               >
                   <Center>
                       <Box
                       textAlign="center">
                       ¿Qué Ofrecemos?
                            <Box
                            fontSize={{base:"15px", xl:"15px"}}
                            fontFamily="Montserrat"
                            textAlign="center"
                            mt="2rem"
                            >
                                En esta sección vas a aprender más sobre lo que SPK-Solutions ofrece a sus clientes.<br></br>
                                 Siempre ofrecemos una traducción de
                                una gran calidad, interpretación y servicios educativos
                            </Box>
                       </Box>
                       
                   </Center>
              
               </Box>
               <Center>
               <SimpleGrid columns={4} spacing={{base: 1, xl:5}}
               mt="15rem"
               mb="5rem"
               display={["none", "flex", "flex", "flex"]}
               >
                   <Box
                    bg="blanco"
                    w={{base:"100px", xl:"300px"}}
                    h="auto"
                    textAlign="center"
                    borderRadius="xl"
                   >
                      <Icon as={IoDocumentText}
                      boxSize={{base:"25px" , xl:"50px"}}
                      color="naranjaOscuro"
                      mt="3rem"
                      />
                      <Box
                      fontFamily="Adam"
                      p="10px"
                      fontSize={{base:"12px", xl:"20px"}}
                      _hover={{color:"naranja" ,transition:"0.7s"}}
                      >
                          Servicio de <br></br>
                          Traducción
                      </Box>
                      <Box
                      fontFamily="arial"
                      p="20px"
                      color="gray.500"
                      fontSize={{base:"10px", xl:"15px"}}
                      >
                          Traducción de Marketing
                          <br></br>
                          <Box
                          pt="10px"
                          >
                          Traduccion para finanzas <br></br>
                          y bancos
                          </Box>
                          <Box
                            pt="10px"
                          >
                          GDPR y traducciones <br></br>
                          legales
                          </Box>
                          <Box
                             pt="10px"
                          >
                              Software y traducción <br></br>
                              tecnológica
                          </Box>
                          <Link activeClass="active"
                          to="contacto"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <Button
                          mt="3rem"
                          bg="naranja"
                          fontFamily="Montserrat"
                          color="negro"
                          w={{base:"70%", xl:"50%"}}
                          _hover={{bg:"negro", color:"naranja" ,transition:"0.5s"}}
                          >
                              Mas info
                          </Button>
                          </Link>
                      </Box>
     
                   </Box>
                   <Box
                      bg="blanco"
                      borderRadius="xl"
                      textAlign="center"
                      w={{base:"100px", xl:"300px"}}
                   >
                       <Icon as={IoBriefcase}
                        boxSize={{base:"25px" , xl:"50px"}}
                      color="naranjaOscuro"
                      mt="3rem"
                      />
                      <Box
                      fontFamily="Adam"
                      p="10px"
                      fontSize={{base:"12px", xl:"20px"}}
                      _hover={{color:"naranja" ,transition:"0.7s"}}
                      >
                          Servicio de <br></br>
                          Interpretación
                      </Box>
                      <Box
                      fontFamily="arial"
                      p="20px"
                      color="gray.500"
                      fontSize={{base:"10px", xl:"15px"}}
                      >
                          Interpretación remota
                          <br></br>
                          <Box
                          pt="10px"
                          >
                          Interpretación en conferencia <br></br>
                            de negocios
                        </Box>
                          <Box
                            pt="10px"
                          >
                          Interpretación presencial <br></br>
                          con sus cuidados
                          </Box>
                          <Box
                             pt="10px"
                          >
                              Traducción de <br></br>
                              vídeo o audio
                          </Box>
                          <Link activeClass="active"
                          to="contacto"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <Button
                          mt="3rem"
                          bg="naranja"
                          fontFamily="Montserrat"
                          color="negro"
                          w="50%"
                          _hover={{bg:"negro", color:"naranja" ,transition:"0.5s"}}
                          >
                              Mas info
                          </Button>
                          </Link>
                      </Box>
                
                   </Box>
                   <Box
                      bg="blanco"
                      borderRadius="xl"
                      textAlign="center"
                      w={{base:"100px", xl:"300px"}}
                   >
                     <Icon as={IoMapSharp}
                          boxSize={{base:"25px" , xl:"50px"}}
                      color="naranjaOscuro"
                      mt="3rem"
                      />
                      <Box
                      fontFamily="Adam"
                      p="10px"
                      fontSize={{base:"12px", xl:"20px"}}
                      _hover={{color:"naranja" ,transition:"0.7s"}}
                      display={["none", "block" , "block", "block"]}
                      >
                          Contenido de  <br></br>
                          los servicios
                
                      </Box>
                      <Box
                      fontFamily="arial"
                      p="20px"
                      color="gray.500"
                      fontSize={{base:"10px", xl:"15px"}}
                      >
                          Transcripción
                          <br></br>
                          <Box
                          pt="10px"
                          >
                          Corección y asesoramiento <br></br>
                          de calidad
                        </Box>
                          <Box
                            pt="10px"
                          >
                          Categorización del <br></br>
                          contenido
                          </Box>
                          <Box
                             pt="10px"
                          >
                              Revisión de <br></br>
                              anuncios
                          </Box>
                          <Link activeClass="active"
                          to="contacto"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <Button
                          mt="3rem"
                          bg="naranja"
                          fontFamily="Montserrat"
                          color="negro"
                          w="50%"
                          _hover={{bg:"negro", color:"naranja" ,transition:"0.5s"}}
                          >
                              Mas info
                          </Button>
                          </Link>
                      </Box>
                   </Box>
                   <Box
                      bg="blanco"
                      borderRadius="xl"
                      textAlign="center"
                      w={{base:"100px", xl:"300px"}}
                   >
                        <Icon as={IoGlobeOutline}
                           boxSize={{base:"25px" , xl:"50px"}}
                      color="naranjaOscuro"
                      mt="3rem"
                 
                      />
                      <Box
                      fontFamily="Adam"
                      p="10px"
                      fontSize={{base:"12px", xl:"20px"}}
                      _hover={{color:"naranja" ,transition:"0.7s"}}
                      >
                          SERVICIOS  <br></br>
                          EDUCACIONALES
                      </Box>
                      <Box
                      fontFamily="arial"
                      p="20px"
                      color="gray.500"
                      fontSize={{base:"10px", xl:"15px"}}
                      >
                          Ingles
                          para negocios
                          <br></br>
                          <Box
                          pt="10px"
                          >
                          Lenguajes extranjeros<br></br>
                          para novatos
                        </Box>
                          <Box
                            pt="10px"
                          >
                          Alemán para niños <br></br>
                          y adolescentes
                          </Box>
                          <Box
                             pt="10px"
                          >
                              Curso de revisión <br></br>
                              de grámatica y puntación
                          </Box>
                          <Link activeClass="active"
                          to="contacto"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <Button
                          mt="3rem"
                          bg="naranja"
                          fontFamily="Montserrat"
                          color="negro"
                          w="50%"
                          _hover={{bg:"negro", color:"naranja" ,transition:"0.5s"}}
                          >
                              Mas info
                          </Button>
                          </Link>
                      </Box>
                   </Box>
               </SimpleGrid>
               </Center>
               <Center>
                <Flex
                flexDir="column"
                display={["flex", "none", "none", "none"]}
                textAlign="center"
                mt="5rem"
             
                >
                 
                    <Box
                    bg="blanco"
                    w="250px"
                    borderRadius="xl"
                    >
                         <Icon as={IoDocumentText}
                      boxSize="50px"
                      color="naranjaOscuro"
                      mt="3rem"
                      />
                      <Box
                      fontFamily="Adam"
                      p="10px"
                      fontSize="20px"
                      _hover={{color:"naranja" ,transition:"0.7s"}}
                      >
                          Servicio de <br></br>
                          Traducción
                      </Box>
                      <Box
                      fontFamily="arial"
                      p="20px"
                      color="gray.500"
                      fontSize="15px"
                      >
                          Traducción de Marketing
                          <br></br>
                          <Box
                          pt="10px"
                          >
                          Traduccion para finanzas <br></br>
                          y bancos
                          </Box>
                          <Box
                            pt="10px"
                          >
                          GDPR y traducciones <br></br>
                          legales
                          </Box>
                          <Box
                             pt="10px"
                          >
                              Software y traducción <br></br>
                              tecnológica
                          </Box>
                          <Link activeClass="active"
                          to="contacto"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <Button
                          mt="3rem"
                          bg="naranja"
                          fontFamily="Montserrat"
                          color="negro"
                          w={{base:"70%", xl:"50%"}}
                          _hover={{bg:"negro", color:"naranja" ,transition:"0.5s"}}
                          >
                              Mas info
                          </Button>
                          </Link>
                      </Box>
                    </Box>
                    <Box
                    bg="blanco"
                    w="250px"
                    mt="1rem"
                    borderRadius="xl"
                    >
                         <Icon as={IoBriefcase}
                      boxSize="50px"
                      color="naranjaOscuro"
                      mt="3rem"
                      />
                      <Box
                      fontFamily="Adam"
                    
                      p="10px"
                      fontSize="20px"
                      _hover={{color:"naranja" ,transition:"0.7s"}}
                      >
                          Servicio de <br></br>
                            Interpretación
                      </Box>
                      <Box
                      fontFamily="arial"
                      p="20px"
                      color="gray.500"
                      fontSize="15px"
                      >
                          Interpretación remota
                          <br></br>
                          <Box
                          pt="10px"
                          >
                          Interpretación en conferencia <br></br>
                            de negocios
                        </Box>
                          <Box
                            pt="10px"
                          >
                          Interpretación presencial <br></br>
                          con sus cuidados
                          </Box>
                          <Box
                             pt="10px"
                          >
                              Traducción de <br></br>
                              vídeo o audio
                          </Box>
                          <Link activeClass="active"
                          to="contacto"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <Button
                          mt="3rem"
                          bg="naranja"
                          fontFamily="Montserrat"
                          color="negro"
                          w={{base:"70%", xl:"50%"}}
                          _hover={{bg:"negro", color:"naranja" ,transition:"0.5s"}}
                          >
                              Mas info
                          </Button>
                          </Link>
                      </Box>
                      </Box>
                     
                     
                      <Box
                    bg="blanco"
                    w="250px"
                    mt="1rem"
                    borderRadius="xl"
              
                    >
                         <Icon as={IoMapSharp}
                      boxSize="50px"
                      color="naranjaOscuro"
                      mt="3rem"
                      />
                      <Box
                      fontFamily="Adam"
                      p="10px"
                      fontSize="20px"
                      _hover={{color:"naranja" ,transition:"0.7s"}}
                      >
                        Contenido de <br></br>
                        los servicios
                      </Box>
                      <Box
                      fontFamily="arial"
                      p="20px"
                      color="gray.500"
                      fontSize="15px"
                      >
                           Transcripción
                          <br></br>
                          <Box
                          pt="10px"
                          >
                          Corección y asesoramiento <br></br>
                          de calidad
                        </Box>
                          <Box
                            pt="10px"
                          >
                          Categorización del <br></br>
                          contenido
                          </Box>
                          <Box
                             pt="10px"
                          >
                              Revisión de <br></br>
                              anuncios
                          </Box>
                          <Link activeClass="active"
                          to="contacto"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <Button
                          mt="3rem"
                          bg="naranja"
                          fontFamily="Montserrat"
                          color="negro"
                          w={{base:"70%", xl:"50%"}}
                          _hover={{bg:"negro", color:"naranja" ,transition:"0.5s"}}
                          >
                              Mas info
                          </Button>
                          </Link>
                      </Box>
                     
                  
                    </Box>
                    
  
                    <Box
                    bg="blanco"
                    w="250px"
                    mt="1rem"
                    mb={{base:"2rem", xl:"0"}}
                    borderRadius="xl"
              
                    >
                         <Icon as={IoGlobeOutline}
                      boxSize="50px"
                      color="naranjaOscuro"
                      mt="3rem"
                      />
                      <Box
                      fontFamily="Adam"
                      p="10px"
                      fontSize="20px"
                      _hover={{color:"naranja" ,transition:"0.7s"}}
                      >
                        Servicios <br></br>
                        educacionales
                      </Box>
                      <Box
                      fontFamily="arial"
                      p="20px"
                      color="gray.500"
                      fontSize="15px"
                      >
                           Ingles
                          para negocios
                          <br></br>
                          <Box
                          pt="10px"
                          >
                          Lenguajes extranjeros<br></br>
                          para novatos
                        </Box>
                          <Box
                            pt="10px"
                          >
                          Alemán para niños <br></br>
                          y adolescentes
                          </Box>
                          <Box
                             pt="10px"
                          >
                              Curso de revisión <br></br>
                              de grámatica y puntación
                          </Box>
                          <Link activeClass="active"
                          to="contacto"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                          <Button
                          mt="3rem"
                          bg="naranja"
                          fontFamily="Montserrat"
                          color="negro"
                          w={{base:"70%", xl:"50%"}}
                          _hover={{bg:"negro", color:"naranja" ,transition:"0.5s"}}
                          >
                              Mas info
                          </Button>
                          </Link>
                      </Box>
                     
                  
                    </Box>

                </Flex>
                </Center>
            </Box>
        </Box>
    )











}