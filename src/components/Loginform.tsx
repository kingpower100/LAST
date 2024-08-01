
import React, { useState } from "react";
import CenteredStack from "./Text";
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
  Image
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Loginform = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
    >
      
      <Stack direction="row" align="center" justify="center" width="100%" mb="4">
        <Image
          boxSize="100px"
          width="100wh"
          src="https://lh3.googleusercontent.com/p/AF1QipMXU27O8KGTXrkk1qJ2qdyQVUhyX_fLbBA0kXak=s1360-w1360-h1020" //logo effectstack
          alt="Visto Logo"
        />
      </Stack>
      
      <br/>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "100%", md: "500px" }}>
          <form>
            <Stack
              spacing={4}
              p="3rem"
              backgroundColor="#d3dbeb" // glass effect
              boxShadow="md"
              borderRadius={20}
            >
              <CenteredStack />
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="d3dbeb" />}
                  />
                  <Input borderRadius={20} type="name" placeholder="name" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.d3dbeb"
                    children={<CFaLock color="d3dbeb" />}
                  />
                  <Input
                    borderRadius={20}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button colorScheme="gray" h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <br />
                <Button
                  borderRadius={20}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                >
                  Login
                </Button>
                <FormHelperText textAlign="center">
                  <Link as='b'>Forgot Password</Link>
                </FormHelperText>
              </FormControl>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Loginform;
