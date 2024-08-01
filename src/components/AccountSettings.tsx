

import React, { useState, ChangeEvent } from 'react';
import { Box, Flex,Text, VStack, FormControl, FormLabel, HStack, Input, IconButton, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { FaUser } from 'react-icons/fa';

const AccountSettings: React.FC = () => {
  const [name, setName] = useState<string>('Utilisateur');
  const [email, setEmail] = useState<string>('Utilisateur@exemple.com');
  const [contact, setContact] = useState<string>('+216 22222222');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  
  // Event handlers for input changes
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangeContact = (e: ChangeEvent<HTMLInputElement>) => setContact(e.target.value);
  const handleChangeOldPassword = (e: ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value);
  const handleChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value);
  const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

  return (
    <Box
      w="800px"
      p={7}
      boxShadow="md"
      borderRadius="md"
      backgroundColor="white"
      h="570px"
      mt="-15px"
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Mon Compte
      </Text>
      <Text fontSize="sm" color="gray.500" mb={2}>
        Vous pouvez changer vos informations ici
      </Text>

      <VStack spacing={1}>
        {/* Personal Information */}
        <FormControl mb={1}>
          <HStack spacing={1}>
            
            
            <Input
             borderRadius={20}
            type="text" // Use 'text' for name fields
            placeholder="Full name"
            />
            
            
            <IconButton aria-label="Edit name" icon={<EditIcon />} />
          </HStack>
        </FormControl>

        <FormControl mb={1}>
          <HStack spacing={1}>
            
            <Input borderRadius={20}  type="email" placeholder="Email address" />
            <IconButton aria-label="Edit email" icon={<EditIcon />} />
          </HStack>
        </FormControl>

        <FormControl mb={1}>
          <HStack spacing={1}>
          <Input
              borderRadius={20}
              type="tel" // Use 'tel' for phone numbers
              placeholder="Contact number"
          />
            <IconButton aria-label="Edit contact" icon={<EditIcon />} />
          </HStack>
        </FormControl>

        {/* Change Password */}
        <Text fontSize="lg" fontWeight="bold" alignSelf="flex-start" mt={0} mb={2}>
          Changer mot de passe
        </Text>

        <FormControl mb={1}>
          <FormLabel mb={1}>Ancien mot de passe</FormLabel>
          <Input 
            type="password" 
            value={oldPassword} 
            onChange={handleChangeOldPassword} 
            placeholder="Ancien mot de passe"
          />
        </FormControl>

        <FormControl mb={1}>
          <FormLabel mb={1}>Nouveau mot de passe</FormLabel>
          <Input 
            type="password" 
            value={newPassword} 
            onChange={handleChangeNewPassword} 
            placeholder="Nouveau mot de passe"
          />
        </FormControl>

        <FormControl mb={1}>
          <FormLabel mb={1}>Vérifier le mot de passe</FormLabel>
          <Input 
            type="password" 
            value={confirmPassword} 
            onChange={handleChangeConfirmPassword} 
            placeholder="Confirmer le mot de passe"
          />
        </FormControl>

        <Flex justify="flex-end" mt={1}>
         <Button colorScheme="blue" bg="#005b96">
            Changer
        </Button>
        </Flex>


      </VStack>
    </Box>
  );
};

export default AccountSettings;
