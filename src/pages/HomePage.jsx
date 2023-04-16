import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./homepage.module.css";
import WritingEffect from "../component/WritingEffect";
import Projects from "../component/Projects";
import skills from "../component/TechSkills";
import Card from "../component/Card";
import SmallCard from "../component/SmallCard";
import GithubCalendar from "react-github-calendar";
import {
  BsLinkedin,
  BsFillTelephoneFill,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import resumePDF from "../resume/Suraj_Kumar_Gupta_Resume.pdf";
import { FaDownload } from "react-icons/fa";

const HomePage = () => {
  function handleResumeDownload() {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Suraj_Kumar_Gupta_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // If download attribute is not supported, open the file in a new window
    setTimeout(() => {
      if (!document.querySelector(":active")) {
        window.open(resumePDF, "_blank");
      }
    }, 100);
  }

  return (
    <Box className={styles.container}>
      <Flex className={styles.sec1} id="section1">
        <Flex justify={"center"} align={"center"}>
          <Box textAlign={"start"}>
            <Text fontSize={{base : "18px" , md : "25px"}}>Hello, my name is</Text>
            <Text fontSize={{base : "30px", md : "50px"}}>Suraj Kumar Gupta</Text>
            <Flex fontSize={{base : '20px', md : "30px"}} align={"center"} gap={2}>
              <Text>I'm a </Text>
              <WritingEffect text={"Full Stack Developer."} />
            </Flex>
            <Box>
              <button
                className={styles.resumebtn}
                onClick={handleResumeDownload}
              >
                <FaDownload className={styles.downloadIcon} />
                <span>Resume</span>
              </button>
            </Box>
          </Box>
        </Flex>
        <Box className={styles.small1}></Box>
      </Flex>
      <Box id="section2" w={"100%"} height="100vh" boxSize={"border-box"}>
        <Text className={styles.secName}>
          <span className={styles.redTxt}>About</span> Me
        </Text>
        <Flex className={styles.sec2}>
          <Box></Box>
          <Box className={styles.aboutSec}>
            <Box>
              <ul>
                <li>
                  Hello! My name is Suraj Kumar Gupta and I am a Full Stack
                  Developer, passionate about building digital products that
                  improve everyday experience for people. I love to work on
                  exciting projects that test what I've learnt, whilst being
                  exposed to the power and potential of the ever-evolving
                  technologies around us. I'm always looking for better, more
                  optimized, ethical and accessible ways to solve the common
                  problems that we are facing with our day-to-day life.
                </li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>
                  I'm very passionate to the computer's & smartphones from my
                  childhood. People always call's me to fix their problems in
                  their smartphone and i'm really enjoying to do this kind of
                  help. That's how my intrest in this field is growing day by
                  day.
                </li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>
                  One day i know about 'Masai School'. After doing lot more
                  research, i foung intresting. So, i enrolled in 'Masai
                  School'. Where i have completed 'Full Stack Web Development'.
                  Learnt various types of skills, like for frontend i learnt
                  HTML5, CSS3, React, Redux, CharaUI, Material UI & for backend,
                  i learnt Nodejs, Express, Mongoose, MongoDB & i also have
                  knowledge about tools which we are using in develpoment like
                  Git, Github, Npm, Postman, Cloudinary etc.
                </li>
              </ul>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box className={styles.sec3} id="section3">
        <Text className={styles.secName}>
          My <span className={styles.redTxt}>Creativity</span>And{" "}
          <span className={styles.redTxt}>Projects</span>
        </Text>
        <Box className={styles.projSec}>
          {Projects.map((e) => {
            return <Card {...e} />;
          })}
        </Box>
      </Box>
      <Box id="section4" min-height="100vh">
        <Text className={styles.secName}>
          My
          <span className={styles.redTxt}>Technical</span>Skills
          <Box className={styles.sec4}>
            {skills.map((e) => {
              return <SmallCard {...e} />;
            })}
          </Box>
        </Text>
      </Box>
      <Box id="section5">
        <Text className={styles.secName}>
          Github <span className={styles.redTxt}>Overview</span>
        </Text>
        <Flex
          p={10}
          gap={10}
          background={"#050A30"}
          color={"white"}
          justify={"space-between"}
          flexDir={"column"}
        >
          <Flex justify={"center"}>
            <a href="https://github.com/Surajbnp/github-readme-stats">
              <img
                alt="Suraj Kumar Gupta's Github Stats"
                src="https://github-readme-stats.vercel.app/api?username=Surajbnp&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117"
              />
            </a>
          </Flex>
          <Flex justify={"center"}>
            <GithubCalendar username="Surajbnp" />
          </Flex>
        </Flex>
      </Box>
      <Box id="section6" bg={"#edf2f8"}>
        <Text className={styles.secName}>
          Take A<span className={styles.redTxt}>Coffee</span>And{" "}
          <span className={styles.redTxt}>Chat</span> With Me
        </Text>
        <Flex className={styles.sec6}>
          <Flex className={styles.contact}>
            <Flex>
              <Box>
                <BsLinkedin size={20} />
              </Box>
              <Box>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/suraj-kumar-gupta-058191222/"
                >
                  SURAJ KUMAR GUPTA
                </a>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <BsGithub size={20} />
              </Box>
              <Box>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/Surajbnp"
                >
                  Surajbnp
                </a>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <SiGmail size={20} />
              </Box>
              <Box>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:surajguptabnp14c@gmail.com"
                >
                  surajguptabnp14c@gmail.com
                </a>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <BsFillTelephoneFill size={20} />
              </Box>
              <Box>
                <a rel="noreferrer" target="_blank" href="tel:6206280964">
                  +91 6206280964
                </a>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <BsWhatsapp size={20} />
              </Box>
              <Box>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=6206280964"
                >
                  +91 6206280964
                </a>
              </Box>
            </Flex>
          </Flex>
          <Box display={"flex"} align="center" justifyContent="center">
            <img
              src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
              alt=""
            />
          </Box>
        </Flex>
      </Box>
      <Text fontWeight={400} className={styles.lastTxt} >
        Designed & Made With <span style={{ color: "red" }}>❤</span> By SRJ,
        2023 All rights reserved.
      </Text>
    </Box>
  );
};

export default HomePage;
