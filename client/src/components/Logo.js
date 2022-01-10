import React from "react";
import { Box, Image } from "@chakra-ui/react"
import logoTrip from "./images/logo.jpg";

// Navbar Logo image
function Logo(props) {
    return (
        <Box {...props}>
            <Image boxSize='6rem' objectFit='contain' borderRadius='100%' src={logoTrip} className='logo' alt='logo' />
        </Box>
    );
}

export default Logo