import React, { useState, useRef } from 'react'
import Slider from "react-slick";
import project1 from "../../assets/projects/project-1.png";
import project2 from "../../assets/projects/project-2.png";
import project3 from "../../assets/projects/project-3.png";
import project4 from "../../assets/projects/project-4.png";
import project5 from "../../assets/projects/project-5.png";
import test from "../../assets/home/test.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import MainButton from '../commons/MainButton';

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";



const ProjectSlick = () => {
    const [details, setDetails] = useState('all');

    const arrowRef = useRef<Slider>(null);

    const handlePrevClick = (): void => {
        if (arrowRef.current !== null) {
            arrowRef.current.slickPrev();
        }
    };

    const handleNextClick = (): void => {
        if (arrowRef.current !== null) {
            arrowRef.current.slickNext();
        }
    };
    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        centerPadding: "60px",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
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
                breakpoint: 989,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,

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
            photo: project3,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "web",
        },
        {
            photo: project4,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "Applications",
        },
        {
            photo: project5,
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
            type: "web",
        },
        {
            photo: project4,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "Applications",
        },
        {
            photo: project3,
            text: "Since our inception, We have been striving to create your own sld of digital Marketing, by providing all the digital services and solutions you need to creaists in their field.",
            type: "Applications",
        },
    ];

    return (
        <div style={{ position: "relative" }}>
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
                            color: details !== "all" ? "rgba(164, 164, 164, 1)" : "rgba(37, 35, 36, 1)",

                        }}
                        onClick={() => setDetails('all')}
                    >
                        All /{" "}
                    </li>
                    <li
                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: details !== "Applications" ? "rgba(164, 164, 164, 1)" : "rgba(37, 35, 36, 1)",
                            cursor: "pointer",
                        }}
                        onClick={() => setDetails('Applications')}
                    >
                        Applications /
                    </li>
                    <li
                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: details !== "web" ? "rgba(164, 164, 164, 1)" : "rgba(37, 35, 36, 1)",
                            cursor: "pointer",
                        }}
                        onClick={() => setDetails('web')}
                    >
                        Websites
                    </li>
                </ul>
            </Box>
            <Slider {...settings} ref={arrowRef}>
                {details === "all" ? projectDetails.map((project, index) => {
                    return <Box className="project" key={index}>
                        <Image src={project.photo} alt="test" />
                        <Box className="swiper-info" sx={{ mt: "24px" }}>
                            Since our inception, We have been striving to create your own sld of
                            digital Marketing, by providing all the digital services and
                            solutions you need to creaists in their field.
                        </Box>
                    </Box>
                }) : projectDetails.filter((project) => project.type === details).map((project, index) => {
                    return <Box className="project" key={index}>
                        <Image src={project.photo} alt="test" />
                        <Box className="swiper-info" sx={{ mt: "24px" }}>
                            Since our inception, We have been striving to create your own sld of
                            digital Marketing, by providing all the digital services and
                            solutions you need to creaists in their field.
                        </Box>
                    </Box>
                })}
            </Slider>
            <div className='slider-arrow'>
                <button
                    onClick={() => handlePrevClick()}
                    className='back'><NavigateBeforeIcon /></button>
                <button
                    onClick={() => {
                        if (arrowRef.current !== null) {
                            arrowRef.current.slickNext()
                        }
                    }}
                    className='next'><NavigateNextIcon /></button>
            </div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: "38px",
                    mb: "92px",
                }}
            >
                <Link href="/projects">
                    <MainButton text="View all Projects" />
                </Link>
            </Box>
        </div>
    )
}

export default ProjectSlick