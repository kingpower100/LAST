
import Navbar from "../components/navbar";
import { Flex,Box ,GridItem,Grid,Text} from "@chakra-ui/react";
import ProfilePage from "../components/Profileform";
import SidebarS from "../components/SidebarS";
function Profile() {
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
          <ProfilePage/>
            
          </Flex>
        </Flex>
      </Flex>
    </>
    
  )
}

export default Profile;