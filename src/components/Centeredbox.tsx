import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';

const CenteredStack: React.FC = () => {
  return (
    <Stack 
      align="center" 
      spacing={3} 
      bg="#d3dbeb" // glass
      padding={1}
      
      boxShadow="0"
      borderRadius={20}
    >
      
      <Heading color="#03396C">Hello !</Heading>
      
      <Heading fontSize="xl" color="#03396C">Sign Up to Get Started </Heading>
      <br/>
      
    </Stack>
  );
};

export default CenteredStack;
