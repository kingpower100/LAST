
import { Box } from '@chakra-ui/react';
import Loginform from './Loginform';
    function Rightside() {
     
      return (
        
        <Box
      height="100%"
      width="100%"
      position="fixed"
      zIndex={1}
      top={0}
      right={0}
      overflowX="hidden"
      paddingTop="20px"
      bg="white"
        > 
            
          <Loginform/>
            

        </Box>

          
        
      );
    }
    
    export default Rightside;
    
    