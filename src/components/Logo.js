import React from "react";
import { Box, Image} from "@chakra-ui/react"
import logoTrip from "./images/logo.jpg";


function Logo(props) {
  return (
      
    <Box {...props}>
      
     <Image boxSize='100px'objectFit='contain'src={logoTrip} className='logo'alt='logo' />
     
</Box>
   
  );
}

export default Logo