import React from "react";
import experience from "../component/Experience";
import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "../component/exp.module.css";

const ExpCard = () => {
  return (
    <Flex direction={"column"}>
      {experience &&
        experience.map((e) => {
          return (
            <Box
              pl={7}
              position={"relative"}
              borderLeft={"4px dashed red"}
              h={"200px"}
            >
              <Box
                className={`${
                  e?.currentCompany === true ? styles.current : styles.blinkDiv
                }`}
              ></Box>
              <Text fontSize={"18px"} fontWeight={600}>
                {e.role}
              </Text>
              <Text>{e.company}</Text>
              <Text fontSize={"14px"}>
                {"("}
                <span>{e.from}</span> - <span>{e.to}</span>
                {")"}
              </Text>
            </Box>
          );
        })}
    </Flex>
  );
};

export default ExpCard;
