import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./smallcard.module.css"

const SmallCard = ({image, name}) => {
  return (
    <Box className={styles.cont}>
      <Box w='50%'>
        <img width={'100%'} src={image} alt="skills" />
      </Box>
      <Text>{name}</Text>
    </Box>
  )
}

export default SmallCard