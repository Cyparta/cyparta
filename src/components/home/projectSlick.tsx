import React, {useState} from 'react'
import Slider from "react-slick";
import project1 from "../../assets/projects/project-1.png";
import project2 from "../../assets/projects/project-2.png";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {Box, Typography} from '@mui/material';
import Image from 'next/image';

const projectSlick = () => {
    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows : false,
        spaceBetween: 20,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              centerMode: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
                centerMode: false,

            }
          }
        ]
      };

    const projectDetails = [
        {
            photo: project1,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "web",
        },
        {
            photo: project2,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "Applications",
        },
        {
            photo: project1,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "web",
        },
        {
            photo: project2,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "Applications",
        },
        {
            photo: project1,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "web",
        },
        {
            photo: project2,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "Applications",
        },
        {
            photo: project1,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "web",
        },
        {
            photo: project1,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "Applications",
        },
        {
            photo: project2,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "Applications",
        }, {
            photo: project1,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "Applications",
        }, {
            photo: project2,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "Applications",
        }, {
            photo: project1,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "web",
        }, {
            photo: project1,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "web",
        },
        {
            photo: project1,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "web",
        },
    ];

    const [projectDet, setProjectDet] = useState("all")

    return (
        <div>
            <Typography
                sx={{
                    color: "rgba(37, 35, 36, 1)",
                    mt: "32px",
                    mb: "30px",
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: "24px",
                }}
            >
                Latest Projects
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ul
                    style={{
                        listStyle: "none",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "8px",
                        marginTop: "34px",
                        marginBottom: "24px",
                    }}
                >
                    <li
                        style={{
                            fontSize: "16px", fontWeight: "500", cursor: "pointer",
                            color: projectDet !== "all" ? "rgba(164, 164, 164, 1)" : "rgba(37, 35, 36, 1)",

                        }}
                        onClick={() => setProjectDet('all')}
                    >
                        All /{" "}
                    </li>
                    <li
                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: projectDet !== "Applications" ? "rgba(164, 164, 164, 1)" : "rgba(37, 35, 36, 1)",
                            cursor: "pointer",
                        }}
                        onClick={() => setProjectDet('Applications')}
                    >
                        Applications /
                    </li>
                    <li
                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: projectDet !== "web" ? "rgba(164, 164, 164, 1)" : "rgba(37, 35, 36, 1)",
                            cursor: "pointer",
                        }}
                        onClick={() => setProjectDet('web')}
                    >
                        Websites
                    </li>
                </ul>
            </Box>
            <Slider {...settings}>
               {projectDetails.map((project, index) => {
                return <Box className="project">
                        <Image src={project.photo} alt="test"/>
                        <Box className="swiper-info" sx={{mt:"24px"}}>
                            Since our inception, We have been striving to create your own sld of
                            digital Marketing, by providing all the digital services and
                            solutions you need to creaists in their field.
                        </Box>
                </Box>
               })}
            </Slider>
        </div>
    )
}

export default projectSlick