import React from "react";
import Slider from "react-slick"; // Import react-slick carousel
import { Box, Text } from "@chakra-ui/react"; // Import Chakra UI components
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS

// SmallCard component for rendering each image
const SmallCard = ({ src, title }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      w={{ base: "100%", md: "300px" }} // Responsive width
      h={{ base: "230px", md: "200px" }} // Responsive height
      textAlign="center"
    >
      <img
        src={src}
        alt={title}
        style={{ width: "100%", height: "fit-content" }}
      />
    </Box>
  );
};

const ImageSlider = () => {
  // Array of image data
  const images = [
    {
      src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1729503194/DSC_0357_psq4i7.jpg",
      title: "Image 1",
    },
    {
      src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1729503318/WhatsApp_Image_2024-10-21_at_11.18.14_17ad712f_eafluz.jpg",
      title: "Image 2",
    },
    {
      src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1729503251/DSC_0378_vibqkg.jpg",
      title: "Image 3",
    },
    {
      src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1729503192/DSC_0351_k8e0eq.jpg",
      title: "Image 4",
    },
    {
      src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1729503677/WhatsApp_Image_2024-10-21_at_15.11.10_da62d010_mmqdzb.jpg",
      title: "Image 5",
    },
    {
      src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1729503678/WhatsApp_Image_2024-10-21_at_15.10.44_3981d5fe_z4psmy.jpg",
      title: "Image 6",
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides infinitely
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 4 images at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Automatically slide
    autoplaySpeed: 2000, // 2 seconds delay between slides
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // Mobile and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box minHeight="fit-content" p={10}>
      <Text fontSize="2xl" mb={5} textAlign="center">
        My <span style={{ color: "red" }}>Contributions</span>
      </Text>
      <Box>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <Box key={index} p={2} mx="auto">
              <SmallCard src={image.src} title={image.title} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ImageSlider;
