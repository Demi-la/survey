import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from './navbar/navbar';
import headerImage from '../../asset/landingPage/headerImage.png';
import circle from '../../asset/landingPage/circle.svg';
import line from '../../asset/landingPage/line.svg';
import mobileHeaderImage from "../../asset/landingPage/mobileHeaderImage.png"

function Header() {
  return (
    <>
      <Box
        background={'#254F1A'}
        width={'100%'}
        height={{ base: 'auto', md: '', lg: 'auto' }}
      >
        <Navbar />

        <Flex flexDirection={{ base: 'column', md: '', lg: 'row' }}>
          <Box
            color={'#F7F6F4'}
            ml={{ base: '2rem', md: '', lg: '8rem' }}
            mt={'8.31rem'}
            position={'relative'}
          >
            <Text
              fontSize={{ base: '2.8rem', md: '', lg: '3rem' }}
              fontWeight={'800'}
              w={{ base: '20rem', md: '', lg: '40rem' }}
              lineHeight={{ base: 'normal', md: '', lg: '4.5rem' }}
            >
              Earn Money by Sharing Your Opinion!
            </Text>
            <Text
              fontSize={{ base: '1.125rem', md: '', lg: '1.6875rem' }}
              fontWeight={'600'}
              letterSpacing={{ base: '0.0675rem', md: '', lg: '0.27844rem' }}
              w={{ base: '19rem', md: '', lg: '35.6875rem' }}
              mt={'1rem'}
            >
              Your Voice Matters: Earn Money by Sharing Your Opinions through
              Surveys!
            </Text>
            <Button
              fontSize={'1.125rem;'}
              fontWeight={'400'}
              mt={'1rem'}
              w={'13.5625rem'}
              h={'3.5625rem'}
              background={'#FF8C09'}
              color={{ base: 'black', md: '', lg: 'white' }}
            >
              Get Started Today
            </Button>
            <Image
              src={line}
              position={'absolute'}
              bottom={'0'}
              left={'12rem'}
              w={'7.8875rem'}
              h={'5.72969rem'}
              display={{ base: 'none', md: '', lg: 'flex' }}
            />
          </Box>
          <Flex position={'relative'}>
            <Image
              src={headerImage}
              alt="image"
              mt={'2rem'}
              position={'relative'}
              right={{ base: '0rem', md: '', lg: '3rem' }}
              zIndex={'1000'}
                display={{ base: 'none', md: '', lg: 'flex' }}
            />
               <Image
              src={mobileHeaderImage}
              alt="image"
              mt={'2rem'}
             
                display={{ base: 'block', md: '', lg: 'none' }}
            />
            
            <Image
              src={circle}
              w={'6.25rem'}
              h={'6.25rem'}
              position={'absolute'}
              right={'2rem'}
              bottom={'12rem'}
              display={{ base: 'none', md: '', lg: 'flex' }}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
