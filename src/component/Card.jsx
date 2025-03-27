import { useState } from "react";
import { Box, Text, Flex, Tooltip, IconButton } from "@chakra-ui/react";
import {
  BsFillCameraVideoFill,
  BsGithub,
} from "react-icons/bs";
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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex
      direction="column"
      maxW="100%"
      h="520px"
      borderRadius="16px"
      p={4}
      bg="white"
      color="black"
      transition="all 0.3s ease-in-out"
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      _hover={{ transform: "scale(1.05)" }}
    >
      {/* Image Section */}
      <Box minH="220px" overflow="hidden" borderRadius="8px">
        <img
          style={{
            borderRadius: "8px",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          src={image}
          alt={projectName}
        />
      </Box>

      {/* Project Name */}
      <Text fontSize="xl" fontWeight="bold" mt={3}>
        {projectName}
      </Text>

      {/* Description Section */}
      <Box mt={2} flex="1">
        <Text fontWeight={'normal'} textAlign="start" fontSize="sm" noOfLines={isExpanded ? undefined : 4}>
          {desc}
        </Text>

        {/* Read More Button */}
        {desc.length > 200 && (
          <Text
            cursor="pointer"
            textAlign="end"
            color="#f51720"
            fontSize="10px"
            fontWeight={'normal'}
            mt={1}
            _hover={{ textDecoration: "underline" }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Text>
        )}
      </Box>

      {/* Tech Stack */}
      <Text textAlign="start" fontWeight={'normal'} fontSize="sm" mt={2}>
        <strong style={{ color: "#f51720" }}>Tech Stack: </strong>
        {techStack.join(", ")}
      </Text>

      {/* Icons Row - Always at Bottom */}
      <Flex mt="20px" justifyContent="space-between">
        <Tooltip label="Presentation" hasArrow>
          <IconButton
            as="a"
            href={presentationLink || "#"}
            target="_blank"
            aria-label="Presentation"
            icon={<BsFillCameraVideoFill size={22} />}
            variant="ghost"
            color="black"
            border="2px solid black"
            borderRadius="full"
            p="6px"
            _hover={{ color: "#f51720", borderColor: "#f51720" }}
          />
        </Tooltip>

        <Tooltip label="Live Demo" hasArrow>
          <IconButton
            as="a"
            href={liveLink || "#"}
            target="_blank"
            aria-label="Live Demo"
            icon={<AiFillEye size={22} />}
            variant="ghost"
            color="black"
            border="2px solid black"
            borderRadius="full"
            p="6px"
            _hover={{ color: "#f51720", borderColor: "#f51720" }}
          />
        </Tooltip>

        <Tooltip label={githubLink !== null ? "GitHub" : "Not Available"} hasArrow>
          <IconButton
            as="a"
            href={githubLink || "#"}
            target="_blank"
            aria-label="GitHub"
            icon={<BsGithub size={22} />}
            variant="ghost"
            color="black"
            border="2px solid black"
            borderRadius="full"
            p="6px"
            isDisabled={!githubLink}
            _hover={{ color: githubLink ? "#f51720" : "gray", borderColor: githubLink ? "#f51720" : "gray" }}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Card;
