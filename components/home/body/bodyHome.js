import { Box } from "@chakra-ui/layout"
import { BodyBar } from "./bodyBar"
import { BodyHomeContent } from "./bodyHomeContent"
import { BodyOffer } from "./bodyOffer"
import { BodyTexto } from "./bodyTexto"



export const BodyHome = () => {
    return(
        <Box>
          <BodyHomeContent/>
            <BodyOffer/>
            <BodyBar/>
             <BodyTexto/>  
        </Box>
    )
}