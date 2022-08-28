import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import paperPunksNFT from './PaperPunksNFT.json';

const paperPunksNFTAddress = "0x3D99bC13144cdAA436d46463600a6b6A6AE4D745";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    const handleMint = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                paperPunksNFTAddress,
                paperPunksNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ', response);
            } catch (error) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 6) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
                <div>
                    <Text fontSize="48px" textShadow="0 #000000">PaperPunks</Text>
                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        fontFamily="VT232"
                        textShadow="0 2px 2px #000000"
                    >It's 2077. Can the PaperPunks NFT save humans from destructive rampant NFT speculation. Mint PaperPunks to find out.
                    </Text>
                </div>
                {isConnected ? (
                    <div>
                        <Flex align="center" justify="center">
                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                margintop="10px"
                                onClick={handleDecrement}>-</Button>
                        </Flex>

                        <input
                            readOnly
                            fontFamily="inherit"
                            width="100px"
                            height="40px"
                            textalign="center"
                            paddingleft="19px"
                            margintop="10px"
                            type="number"
                            value={mintAmount} />


                        <Flex align="center" justify="center">
                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                margintop="10px"
                                onClick={handleIncrement}>+</Button>
                        </Flex>

                        <Button
                            backgroundColor="#D6517D"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            margintop="10px"
                            onClick={handleMint}> Mint Now
                        </Button>
                    </div>
                ) : (
                    <p>You are not connected yet.</p>
                )}
            </Box>
        </Flex>
    );
};

export default MainMint;