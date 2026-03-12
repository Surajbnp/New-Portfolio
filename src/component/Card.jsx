import { useState } from "react";
import { Box, Text, Flex, Tooltip, IconButton, Image } from "@chakra-ui/react";
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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex
      direction="column"
      w="100%"
      maxW="350px"
      minH={{ base: "auto", md: "500px" }}
      borderRadius="16px"
      p={{ base: 3, md: 4 }}
      bg="white"
      color="black"
      transition="all 0.3s ease-in-out"
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      _hover={{ transform: "scale(1.03)" }}
    >
      {/* Image Section */}
      <Box
        h={{ base: "180px", md: "220px" }}
        w="100%"
        overflow="hidden"
        borderRadius="8px"
      >
        <Image
          src={image}
          alt={projectName}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>

      {/* Project Name */}
      <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mt={3}>
        {projectName}
      </Text>

      {/* Description */}
      <Box mt={2} flex="1">
        <Text
          fontWeight="normal"
          textAlign="start"
          fontSize="sm"
          noOfLines={isExpanded ? undefined : 4}
        >
          {desc}
        </Text>

        {desc.length > 200 && (
          <Text
            cursor="pointer"
            textAlign="end"
            color="#f51720"
            fontSize="10px"
            mt={1}
            _hover={{ textDecoration: "underline" }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Text>
        )}
      </Box>

      {/* Tech Stack */}
      <Text textAlign="start" fontSize="sm" mt={2}>
        <strong style={{ color: "#f51720" }}>Tech Stack: </strong>
        {techStack.join(", ")}
      </Text>

      {/* Icons */}
      <Flex mt={4} justifyContent="space-between" flexWrap="wrap" gap={2}>
        <Tooltip label="Presentation" hasArrow>
          <IconButton
            as="a"
            href={presentationLink || "#"}
            target="_blank"
            aria-label="Presentation"
            icon={<BsFillCameraVideoFill size={20} />}
            variant="ghost"
            border="2px solid black"
            borderRadius="full"
            _hover={{ color: "#f51720", borderColor: "#f51720" }}
          />
        </Tooltip>

        <Tooltip label="Live Demo" hasArrow>
          <IconButton
            as="a"
            href={liveLink || "#"}
            target="_blank"
            aria-label="Live Demo"
            icon={<AiFillEye size={20} />}
            variant="ghost"
            border="2px solid black"
            borderRadius="full"
            _hover={{ color: "#f51720", borderColor: "#f51720" }}
          />
        </Tooltip>

        <Tooltip label={githubLink ? "GitHub" : "Not Available"} hasArrow>
          <IconButton
            as="a"
            href={githubLink || "#"}
            target="_blank"
            aria-label="GitHub"
            icon={<BsGithub size={20} />}
            variant="ghost"
            border="2px solid black"
            borderRadius="full"
            isDisabled={!githubLink}
            _hover={{
              color: githubLink ? "#f51720" : "gray",
              borderColor: githubLink ? "#f51720" : "gray",
            }}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Card;
