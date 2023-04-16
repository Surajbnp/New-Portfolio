import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Text,
  useColorMode,
  Stack,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import styles from "../pages/homepage.module.css";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box w="100%" top="0" bg={"#EDF2F8"} px={4} position="fixed">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack
            spacing={8}
            alignItems={"center"}
            justify={"space-between"}
            w="100%"
          >
            <Box>
              <Text className={styles.secName}>
                SU<span className={styles.redTxt}>RAJ</span>
              </Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Flex gap={5} cursor={"pointer"}>
                <ScrollLink
                  to="section1"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  exact="true"
                  activeClass={styles.active}
                >
                  Dashborad
                </ScrollLink>
                <ScrollLink
                  to="section2"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  exact="true"
                  activeClass={styles.active}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="section3"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  exact="true"
                  activeClass={styles.active}
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="section4"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  exact="true"
                  activeClass={styles.active}
                >
                  Skills
                </ScrollLink>
                <ScrollLink
                  to="section5"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  exact="true"
                  activeClass={styles.active}
                >
                  Github Overview
                </ScrollLink>
                <ScrollLink
                  to="section6"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  exact="true"
                  activeClass={styles.active}
                >
                  Contact
                </ScrollLink>
              </Flex>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </HStack>
          </HStack>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/*  add link here */}
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
