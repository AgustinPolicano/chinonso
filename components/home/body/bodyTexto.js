import { Image } from "@chakra-ui/image"
import { Box, Center, SimpleGrid } from "@chakra-ui/layout"




export const BodyTexto = () => {
    return(
        <Box>
            <Box
            h="auto"
            w="100%"
            bg="blanco"
            backgroundImage="./bg2.png"
            backgroundRepeat="no-repeat"
         
            >
                <SimpleGrid columns={2}
                display={["none", "block", "flex", "flex" ]}

>
<Center>
    <Box
     pos="relative"
     left="60%"
     mt="8rem"
     mb="5rem"
    >
            <Image
                            src="./gente1.png"
                            boxSize="300px"
                            borderRadius="full"

                        />
    </Box>
    <Box
     pos="relative"
     left="65%"
    mt="5rem"
     color="negro"
     fontFamily="Adam"
     fontSize="25px"
    >
        Ofrecemos lenguajes <br></br> para todo el mundo
                        <Box
                        fontSize="15px"
                        fontFamily="Montserrat"
                   
                        mt="2rem"
                        color="gray.500"
                        id="info"
                        >
                            SPK-Solutions durante este año ha satisfecho las  <br></br>
                            necesidades de más de 4000 clientes alrededor de <br></br>
                           todo el mundo. Nuestros expertos usan una poderosa  <br></br>
                            combinación de creatividad e inteligencia artificial <br></br>
                            para generar traducciones precisas y eficaces según <br></br>
                            las necesidades del cliente.

                        </Box>
    </Box>
    </Center>
</SimpleGrid>
<Box
            display={["flex", "flex", "none", "none"]}
        
         
            >
                
                <Box
                margin="auto"
          
                
                >
                 <Image
                            src="./gente1.png"
                            boxSize={{base:"200"}}
                            borderRadius="full"
                     
                            margin="auto"
                        />
                        <Box
                        fontFamily="Adam"
                        color="negro"
                        fontSize="20px"
                        textAlign="center"
                        mt="1rem"
                        >
                        Unas palabras <br></br>
                        sobre nosotros
                            <Box
                             fontSize="12px"
                             fontFamily="Montserrat"
                            mb={{base:"2rem", xl:"0"}}
                             mt="1rem"
                             color="negro"
                            >
  SPK-Solutions durante este año ha satisfecho las  <br></br>
                            necesidades de más de 4000 clientes alrededor de <br></br>
                           todo el mundo. Nuestros expertos usan una poderosa  <br></br>
                            combinación de creatividad e inteligencia artificial <br></br>
                            para generar traducciones precisas y eficaces según <br></br>
                            las necesidades del cliente.

                            </Box>
                        </Box>

                </Box> 
                
            </Box>
             
            </Box>
        </Box>
    )











}