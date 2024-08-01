import React from "react";
import {
  Box,
  Heading,
  Stack,
  HStack,
  
  Text,
  
  IconButton,
} from "@chakra-ui/react";

import { FaUser } from "react-icons/fa";
import ProfileSection from "./Profilesection";
import AccountSettings from "./AccountSettings";


function ProfilePage() {
  return (
    <Box p={7} backgroundColor="WHITE" mt="1px" h="700px"  w="1200px">
      
        <Text fontSize="2xl" color="#03396c" fontWeight="bold" mb={4}>
              Profil
        </Text>
      
      <br/>
      <HStack spacing={8} align="start">
        {/* Profile Section */}
        <Box
          w="30%"
          p={6}
          boxShadow="white"
          borderRadius="20"
          backgroundColor="white"
          mt="-15px"
        > 
          <Stack 
  direction="row" // Align children horizontally
  align="center" 
  spacing={3} 
  bg="white" // glass"#d3dbeb"
  padding={1}
  boxShadow="0"
  borderRadius={20}
>
  <IconButton aria-label='Search database' color="#03396c" icon={<FaUser />} />
  <Heading fontSize='md ' color="#03396c">Mon Profile</Heading>
</Stack>
    <br/>
          <ProfileSection/>
        </Box>

        {/* Account Details Section */}
       <AccountSettings/>
      </HStack>
    </Box>
  );
}

export default ProfilePage;
