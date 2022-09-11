import {
    Button,
    Container,
    Text,
    Image,
    Box,
    Link,
    Skeleton,
} from '@chakra-ui/react';
import { ConnectButton, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import abiFile from './abiFile.json';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

import { Routes, Route } from 'react-router-dom'

let CONTRACT_ADDRESS = '0xFfEE4da57BAb36D71c096d1795666e53274aA96C';
CONTRACT_ADDRESS = CONTRACT_ADDRESS.toLowerCase();
const getOpenSeaURL = (tokenId: string | number) =>
    //`https://goerli.pixxiti.com/nfts/${CONTRACT_ADDRESS}/${tokenId}`;
    `https://testnets.opensea.io/assets/goerli/${CONTRACT_ADDRESS}/${tokenId}`;

const blindURI = 'https://gateway.pinata.cloud/ipfs/Qmf8oauEnvxTG2zPdhrt2SFkfbXkBqNZKtBPedbM6SBAxm/0';


function Erc721A() {
    const contractConfig = {
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: abiFile.abi,
    };
    const { data: tokenURI } = useContractRead({
        ...contractConfig,
        functionName: 'commonTokenURI',
    });
    const [imgURL, setImgURL] = useState('');

    const { writeAsync: mint, error: mintError } = useContractWrite({
        ...contractConfig,
        functionName: 'mint',
    });
    const [mintLoading, setMintLoading] = useState(false);
    const { address } = useAccount();
    const isConnected = !!address;
    const [mintedTokenId, setMintedTokenId] = useState(0);
    console.log(mintedTokenId);
    const onMintClick = async () => {
        try {
            setMintLoading(true);
            const tx = await mint({
                args: [address, { value: ethers.utils.parseEther('0.001') }],
            });
            const receipt = await tx.wait();
            console.log('TX receipt', receipt);
            // @ts-ignore
            const mintedTokenId = await receipt.events[0].args[2].toString();
            setMintedTokenId(mintedTokenId);
        } catch (error) {
            console.error(error);
        } finally {
            setMintLoading(false);
        }
    };

    useEffect(() => {
        (async () => {
            if (tokenURI) {
                const res = await (await fetch(tokenURI as unknown as string)).json();
                setImgURL(res.image);
                console.log(res.image);
            }
        })();
    }, [tokenURI]);




    return (
        <Container>
            <Text marginTop='4'>This is the NFT we will be minting!</Text>
            {imgURL ? (
                <Box
                    as={motion.div}
                    borderColor='gray.200'
                    borderWidth='1px'
                    width='fit-content'
                    marginTop='4'
                    padding='6'
                    shadow='md'
                    rounded='lg'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image src={imgURL} width='200px' />
                </Box>
            ) : (
                <Skeleton marginTop='4' width='250px' height='250px' rounded='lg' />
            )
            }

            <Button
                disabled={!isConnected || mintLoading}
                marginTop='6'
                onClick={onMintClick}
                textColor='white'
                bg='blue.500'
                _hover={{
                    bg: 'blue.700',
                }}
            >
                {isConnected ? '🎉 Mint' : '🎉 Mint (Connect Wallet)'}
            </Button>

            {
                mintError && (
                    <Text marginTop='4'>⛔️ Mint unsuccessful! Error message:</Text>
                )
            }

            {
                mintError && (
                    <pre style={{ marginTop: '8px', color: 'red' }}>
                        <code>{JSON.stringify(mintError, null, ' ')}</code>
                    </pre>
                )
            }
            {mintLoading && <Text marginTop='2'>Minting... please wait</Text>}

            {(mintedTokenId == 0 ? '' : mintedTokenId) && (
                <Text marginTop='2'>
                    🥳 Mint successful! You can view your NFT{' '}
                    <Link
                        isExternal
                        href={getOpenSeaURL(mintedTokenId)}
                        color='blue'
                        textDecoration='underline'
                    >

                        here!
                    </Link>
                </Text>
            )}
        </Container>
    )
}


export default Erc721A