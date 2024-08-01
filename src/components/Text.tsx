import React from 'react';
import { Stack, Avatar, Heading } from '@chakra-ui/react';

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
      <Avatar bg="#03396C" />
      <Heading color="#03396C">Hello Again!</Heading>
      <Heading fontSize="xl" color="#03396C">Welcome Back</Heading>
      <br/>
      
    </Stack>
  );
};

export default CenteredStack;
