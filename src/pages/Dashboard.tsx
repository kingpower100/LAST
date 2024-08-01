import React from 'react'

import Navbar from "../components/navbar";
import { Flex,Box } from "@chakra-ui/react";
import Dashbordpage from '../components/Dashbordpage';
import SidebarS from '../components/SidebarS';
function Dashboard() {
  return (
    <>
    <Flex minHeight="100vh" direction="column">
      <Navbar />
      <Flex flex="1">
      <Box  paddingLeft={0} boxShadow='md' marginTop="-80px" >
          <SidebarS/>
      </Box>
        <Flex
          flex="1"
          justifyContent="center"
          alignItems="center"
          padding="1"
          bg="white"
        >
        <Dashbordpage/>
          
        </Flex>
      </Flex>
    </Flex>
  </>
  )
}

export default Dashboard