import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import styles from "./card.module.css";
import { BsFillCameraVideoFill, BsGithub, BsFillCameraVideoOffFill } from "react-icons/bs";
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
      <Box
        borderRadius={"15px"}
        backgroundImage={image}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        height={"30vh"}
        border={"2px solid grey"}
        overflow={"hidden"}
      ></Box>
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
          <a href={presentationLink} target="_blank">
            {presentationLink === null ? <BsFillCameraVideoOffFill size={30} /> : <BsFillCameraVideoFill size={30} />}
          </a>
        </Box>
        <Box>
          <a href={liveLink} target="_blank">
            <AiFillEye size={30} />
          </a>
        </Box>
        <Box>
          <a href={githubLink} target="_blank">
            <BsGithub size={30} />
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export default Card;
