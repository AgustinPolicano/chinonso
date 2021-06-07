import { Box } from '@chakra-ui/layout'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {HeaderHome} from "../components/home/header/headerHome";
import {BodyHome} from '../components/home/body/bodyHome';
import { Footer } from '../components/home/footer/footer';



export default function Home() {
  return (

 
    
       <Box>
            <Head>
      <title>Chinonso - Traducciones Empresariales</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
         <HeaderHome/>
         <BodyHome/>
          <Footer/> 
       </Box>
     
  )
}
