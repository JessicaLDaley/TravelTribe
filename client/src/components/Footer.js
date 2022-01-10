import React from "react";
import {Flex, Link} from '@chakra-ui/react';

function Footer(){
    return(
        <Flex justifyContent="center">
            <p>
                By:
                <a href="https://github.com/SteveB29/"> Steve, </a>
                <a href="https://github.com/JessicaLDaley">Jessica, </a>
                <a href="https://github.com/e1m3m0/">Guillermo, </a>
                <a href="https://github.com/trippjoe">Joe, </a>
                <a href="https://github.com/PandolfoM">Matt</a>
            </p>
        </Flex>
    );
}

export default Footer;