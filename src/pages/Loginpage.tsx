import {Flex,Box} from '@chakra-ui/react';
import Rightside from '../components/Rightside';
function Loginpage() {
  return (
    
    <>
      <Flex width="100%" >
        
      <Box
      height="100%"
      width="50%"
      position="fixed"
      zIndex={1}
      top={0}
      right={0}
      overflowX="hidden"
      paddingTop="20px"
      bg="white"
        > 
        </Box>
        
      </Flex>
      <Flex width="100%" minHeight="100vh">
        <Rightside/>
        
      </Flex>
   
    </>
      
  );
}




  


export default Loginpage ;

