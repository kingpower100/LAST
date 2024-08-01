import React, { useState, ChangeEvent } from 'react';
import { VStack, Avatar, Text, Button, Box } from '@chakra-ui/react';

const ProfileSection: React.FC = () => {
  const [image, setImage] = useState<string>('path-to-profile-image.jpg');

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box >
      <VStack spacing={4} align="center">
        <Avatar size="2xl" bg="#005b96" color="white" name="Utilisateur" src={image} />
        <Text color="#03396c" fontSize="xl" fontWeight="bold">
          Utilisateur
        </Text>
        <Text fontSize="sm" color="gray.500">
          Changer une nouvelle photo de profil
        </Text>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <Button
          as="label"
          htmlFor="fileInput"
          colorScheme="teal"
          variant="solid"
          bg="#005b96"
        >
          Choisir une nouvelle photo
        </Button>
      </VStack>
    </Box>
  );
};

export default ProfileSection;
