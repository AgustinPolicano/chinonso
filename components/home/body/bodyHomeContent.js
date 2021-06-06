import { Image } from "@chakra-ui/image"
import { Box, Center } from "@chakra-ui/layout"
import { SimpleGrid } from "@chakra-ui/react"


export const BodyHomeContent = () => {
    return (
        <Box>
            <Box
                bg="blanco"
                h={{base:"600px", xl:"auto"}}
                w="100%"
                backgroundImage="./bg2.png"
                backgroundRepeat="no-repeat"
                id="info"


            >


<SimpleGrid columns={2}
 display={["none", "none", "flex", "flex"]}
>
<Center>
    <Box
     pos="relative"
     left={{base:"50%", xl:"60%"}}
     mt={{base:"16rem" , xl:"10rem"}}
     mb="5rem"
    >
            <Image
                            src="./gente.png"
                            boxSize={{base:"200", xl:"300px"}}
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
        Unas palabras sobre nosotros
                        <Box
                        fontSize="15px"
                        fontFamily="Montserrat"
                        
                        mt="2rem"
                        color="gray.500"
                     
                        >
                            SPK-Solutions es una pequeña Startup creada el <br></br>
                            año pasado debido al contexto actual respecto al <br></br>
                            COVID-19, en la localidad de Palermo, en Buenos Aires. <br></br>

                            <br></br>
                            Somos un grupo de más de 30 lingüistas profesionales y <br></br>
                            tutores operando en más de dos continentes y servimos a <br></br>
                            clientes de todo el mundo, cualquier lenguaje que<br></br>
                            necesites, nosotros estamos para ayudarte.

                        </Box> 
    </Box> 
    </Center>
</SimpleGrid>
            <Box
            display={["flex", "flex", "none", "none"]}
        
         
            >
                
                <Box
                margin="auto"
                pos="relative"
                top="10rem"
                >
                 <Image
                            src="./gente.png"
                            boxSize={{base:"200"}}
                            borderRadius="full"
                            mt="17rem"
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
                        
                             mt="1rem"
                             color="negro"
                            >
 SPK-Solutions es una pequeña Startup creada el <br></br>
                            año pasado debido al contexto actual respecto al <br></br>
                            COVID-19, en la localidad de Palermo, en Buenos Aires. <br></br>
                            <br></br>
                            Somos un grupo de más de 30 lingüistas profesionales y <br></br>
                            tutores operando en más de dos continentes y servimos a <br></br>
                            clientes de todo el mundo, cualquier lenguaje que<br></br>
                            necesites, nosotros estamos para ayudarte.

                            </Box>
                        </Box>

                </Box> 
                
            </Box>
             
            </Box>


        </Box>
    )
}