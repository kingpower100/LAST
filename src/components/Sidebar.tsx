
import React, { useState } from 'react';
import { Box, Text, VStack, Flex, Image } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LiaSearchSolid } from "react-icons/lia";
import { VscFeedback, VscSignOut } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
    label: string;
    path: string;
    selected: string;
    onSelect: (path: string) => void;
    icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ label, path, selected, onSelect, icon }) => (
    <Link to={path} onClick={() => onSelect(path)}>
        <Box
            display="flex"
            alignItems="center"
            borderRadius="md"
            padding="5px"
            backgroundColor={selected === path ? "whiteAlpha.300" : "transparent"}
            _hover={{ backgroundColor: "whiteAlpha.200" }}
            cursor="pointer"
            w={200}
            
        >
            <Flex alignItems="center" ml={5}>
                {icon}
            </Flex>
            <Text
                fontSize="md"
                ml={2}
                color="white"
                _groupHover={{ color: "blue.500" }} // Change color on hover of parent Box
            >
                {label}
            </Text>
        </Box>
    </Link>
);

const Sidebar: React.FC = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);

    const handleSelect = (path: string) => {
        setSelected(path);
    };

    return (
        <Box w="286px" h="695px" backgroundColor="#005B96">
            
            <Flex display="grid">
                <Image
                    src='/src/assets/elitecv-high-resolution-logo-white-transparent (5).png'
                    w={190} p="20px" ml="auto" mr="auto" mt={8}
                />
                <Flex>
                    <VStack align="start" spacing={5} color="white" ml={6} mt="80px">
                        <NavItem label="Dashboard" path="/Dashboard" selected={selected} onSelect={handleSelect} icon={<GoHome />} />
                        <NavItem label="Offres d'emplois" path="/Offre" selected={selected} onSelect={handleSelect} icon={<LiaSearchSolid />} />
                        <NavItem label="Entretiens" path="/Entretien" selected={selected} onSelect={handleSelect} icon={<VscFeedback />} />
                        <NavItem label="Recommendations" path="/Recommendation" selected={selected} onSelect={handleSelect} icon={<FaRegHeart />} />
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <VStack >
                            
                            <NavItem label="Profil" path="/Profile" selected={selected} onSelect={handleSelect} icon={<IoPersonOutline />} />
                            <NavItem label="Déconnexion" path="/Logout" selected={selected} onSelect={handleSelect} icon={<VscSignOut />} />
                        </VStack>
                    </VStack>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Sidebar;
