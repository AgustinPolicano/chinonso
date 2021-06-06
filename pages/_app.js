import { ChakraProvider } from "@chakra-ui/react";
import {myNewTheme} from "../styles/theme";
import '../styles/globals.css'


function MyApp({ Component}) {
  return   <ChakraProvider resetCSS theme={myNewTheme}>
        <Component />
</ChakraProvider>


}

export default MyApp
