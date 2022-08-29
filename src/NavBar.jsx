import React from 'react';
import {Box, Button, Flex, Image, Link, Spacer} from "@chakra-ui/react";
import Facebook from "./assets/social-media-icons/facebook.png";
import Twitter from "./assets/social-media-icons/twitter.png";
import Email from "./assets/social-media-icons/email.png";


const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    const connectAccount = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex width="100%" justify="space-between" align="center" padding="10px">
            
            <Flex justify="space-around" flex="0.4" padding="0 10px">
                <Link href="https://www.facebook.com">
                    <Image src={Facebook} boxSize="42px" />
                </Link>
                <Spacer />
                <Link href="https://www.twitter.com">
                    <Image src={Twitter} boxSize="42px" />
                </Link>
                <Spacer />
                <Link href="https://www.gmail.com">
                    <Image src={Email} boxSize="42px" />
                </Link>

            </Flex>
            <Flex flex="0.5">

            </Flex>
            <Flex
                justify="space-evenly"
                align="center"
                flex="0.6"
                padding="30px 0 30px 0"
            >
                <Box margin="0 15px">About</Box>
                <Spacer />
                <Box margin="0 15px">Mint</Box>
                <Spacer />
                <Box margin="0 15px">Team</Box>
                <Spacer />

                {isConnected ? (
                <Box width="fit-content">Connected</Box>
            ) : (
                <Button
                 backgroundColor="#DC7D5F"
                 borderRadius="5px"
                 width="fit-content"
                 boxShadow="0px 2px 2px 1px #0f0f0f"
                 color="white"
                 cursor="pointer"
                 fontFamily="inherit"
                 padding="15px"
                 onClick={connectAccount}>Connect</Button>
            )}


            </Flex>   
        </Flex>
    );
};

export default NavBar;