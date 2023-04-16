import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import styles from "./card.module.css";
import { BsFillCameraVideoFill, BsGithub } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

const Card = ({
  image,
  projectName,
  desc,
  techStack,
  presentationLink,
  liveLink,
  githubLink,
}) => {
  return (
    <Box className={styles.container}>
      <Box borderRadius={"15px"} border={"2px solid grey"} overflow={"hidden"}>
        <img src={image} alt="" />
      </Box>
      <Text className={styles.name}>{projectName}</Text>
      <Text className={styles.desc}>{desc}</Text>
      <Text className={styles.techStack}>
        <span className={styles.redTxt}>Tech Stack :</span>
        {techStack.map((e) => {
          return <>{`${e}, `}</>;
        })}
      </Text>
      <Flex className={styles.icons}>
        <Box>
          <BsFillCameraVideoFill  size={30}/>
        </Box>
        <Box>
          <AiFillEye size={30} />
        </Box>
        <Box>
          <BsGithub size={30}/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Card;
