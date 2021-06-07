import { Image, Flex, Button, IconButton, Box } from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Link, animateScroll as scroll } from "react-scroll";


export const HeaderHomeBar = () => {
    const [display, changeDisplay] = useState("none")
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 500){
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    };
    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeBackground);
      }


    return (
        <Flex
        
        >
            <Flex
             
                className={navbar ? "navbar active" : "navbar"}
                position="fixed"
                mt="3rem"
                align="center"
                ml={{xl:"25%"}}
        
            
            >



                <Flex
                    display={["none", "none", "flex", "flex"]}

                >
                    <Link href="./">
                        <Image
                            src="./logo.png"
                            w={{xl:"300px"}}
                            pos="relative"
                            
                           

                        />
                    </Link>
                    <Link 
                          activeClass="active"
                          to="info"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                    
                    >
                        <Button as="button"
                            bg="none"
                            my={7}
                            color="blanco"
                            w="100%"

                            fontSize="17px"
                            _hover={{ bg: "naranja" }}
                        >
                            Nosotros
                        </Button>
                    </Link>
                    <Link activeClass="active"
                          to="offer"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        <Button as="button"
                            bg="none"
                            fontSize="17px"
                            my={7}
                            color="blanco"
                            w="100%"
                            _hover={{ bg: "naranja" }}
                        >
                            ¿Que ofrecemos?
                        </Button>
                    </Link>
                    <Link  activeClass="active"
                          to="idiomas"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        <Button as="button"
                            bg="none"
                            my={7}
                            color="blanco"
                            w="100%"
                            fontSize="17px"
                            _hover={{ bg: "naranja" }}
                        >
                            Idiomas
                        </Button>
                    </Link>
                    <Link activeClass="active"
                          to="contacto"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        <Button as="button"
                            bg="none"
                            my={7}
                            fontSize="17px"
                            color="blanco"
                            w="100%"
                            _hover={{ bg: "naranja" }}
                        >
                            Contacto
                        </Button>
                    </Link>
                </Flex>

            </Flex>

            <IconButton justifyItems="flex-start"
                aria-label="Open Menu"
                size="md"
                mt={5}
                ml={"85%"}
                icon={<HamburgerIcon />}

                display={["flex", "flex", "none", "none"]}
                onClick={() => changeDisplay("flex")}
            />

            <Flex
                w="100vw"
                zIndex={20}
                bg="naranja"
                h="400"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
                display={display}
            >
                <Flex justify="flex-start">
                    <IconButton
                        mt={5}
                        ml={"85%"}
                        aria-label="Close Menu"
                        size="md"
                        icon={<CloseIcon />}
                        onClick={() => changeDisplay("none")}
                    />
                </Flex>
                <Flex
                    flexDir="column"
                    align="center"
                >

<Link 
                          activeClass="active"
                          to="info"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                    
                    >
                        <Button as="button"
                            bg="none"
                            my={3}
                            color="blanco"
                            variant="outline"
                            w="100%"
                            _hover={{bg:"negro"}}
                            fontSize="17px"
                           
                        >
                            Nosotros
                        </Button>
                    </Link>
                    <Link activeClass="active"
                          to="offer"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        <Button as="button"
                            bg="none"
                            variant="outline"
                            fontSize="17px"
                            my={3}
                            color="blanco"
                            w="100%"
                            _hover={{bg:"negro"}}
                        >
                            ¿Que ofrecemos?
                        </Button>
                    </Link>
                    <Link  activeClass="active"
                          to="idiomas"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        <Button as="button"
                            bg="none"
                            my={3}
                            color="blanco"
                            w="100%"
                            fontSize="17px"
                            variant="outline"
                            _hover={{bg:"negro"}}
                        >
                            Idiomas
                        </Button>
                    </Link>
                    <Link activeClass="active"
                          to="contacto"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        <Button as="button"
                            bg="none"
                            my={3}
                            fontSize="17px"
                            color="blanco"
                            w="100%"
                            variant="outline"
                            _hover={{bg:"negro"}}
                        >
                            Contacto
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}
