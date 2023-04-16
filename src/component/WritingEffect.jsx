import { Text } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';

const WritingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateDisplayText = () => {
      setDisplayText((prevText) => prevText + text[index]);
      setIndex((prevIndex) => prevIndex + 1);
    };

    intervalRef.current = setInterval(() => {
      if (index < text.length) {
        updateDisplayText();
      } else {
        clearInterval(intervalRef.current);
      }
    }, 50);

    return () => clearInterval(intervalRef.current);
  }, [index, text]);

  useEffect(() => {
    if (displayText === text) {
      setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 1000);
    }
  }, [displayText, text]);

  return <Text color={'#F51720'}>{displayText}</Text>;
};

export default WritingEffect;
