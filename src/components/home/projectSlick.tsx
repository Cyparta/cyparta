import React, { useState, useRef } from "react";
import Slider from "react-slick";
import project1 from "../../assets/projects/project-1.png";
import project2 from "../../assets/projects/project-2.png";
import project3 from "../../assets/projects/project-3.png";
import project4 from "../../assets/projects/project-4.png";
import project5 from "../../assets/projects/project-5.png";
import project6 from "../../assets/projects/project-6.png";
import project7 from "../../assets/projects/project-7.png";
import project8 from "../../assets/projects/project-8.png";
import project9 from "../../assets/projects/project-9.png";
import project10 from "../../assets/projects/project-10.png";
import project11 from "../../assets/projects/project-11.png";
import test from "../../assets/home/test.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// import MainButton from '../commons/MainButton';
import { MainButton } from "@/style/style";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ProjectSlick = () => {
  // const { collection } = useSelector((state: RootState) => state.collection)
  const { collection } = useSelector((state: RootState) => state.products)
  const lang = useSelector((state: RootState) => state.lang.value.lang)
  const { heading, tab1, tab2, tab3, viewAll } = useSelector((state: RootState) => state.lang.value.projects)

  const [details, setDetails] = useState("all");

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
        },
      },
      {
        breakpoint: 989,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };



  interface Collection {
    // image: string;
    description: string;
    title: string;
    type: string
    main_image: string
  }

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
        {heading[lang]}
      </Typography>
      {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
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
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              color:
                details !== "all"
                  ? "rgba(164, 164, 164, 1)"
                  : "rgba(37, 35, 36, 1)",
            }}
            onClick={() => setDetails("all")}
          >
            {tab3[lang]} /{" "}
          </li>
          <li
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color:
                details !== "app"
                  ? "rgba(164, 164, 164, 1)"
                  : "rgba(37, 35, 36, 1)",
              cursor: "pointer",
            }}
            onClick={() => setDetails("app")}
          >
            {tab1[lang]} /
          </li>
          <li
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color:
                details !== "website"
                  ? "rgba(164, 164, 164, 1)"
                  : "rgba(37, 35, 36, 1)",
              cursor: "pointer",
            }}
            onClick={() => setDetails("website")}
          >
           {tab2[lang]}
          </li>
        </ul>
      </Box> */}
      <Slider {...settings} ref={arrowRef}>
        {details === "all"
          ? collection?.map((project: Collection, index) => {
            return (
              <>
                <Box className="project" key={index}>
                  {project.main_image ? <img
                    src={project.main_image}
                    alt="test"
                    style={{ borderRadius: "10px", width: "100%", height: "100%" }}

                  /> : ""}


                  <Box className="swiper-info" sx={{ mt: "24px" }}>
                    {project.description.length > 200
                      ? project.description.slice(0, 200) + "..."
                      : project.description}
                  </Box>
                </Box>
              </>
            );
          })
          : collection
            ?.filter((project: Collection) => project.type === details)
            .map((project: Collection, index) => {
              return (
                <Box className="project" key={index}>
                  {/* <Image
                      src={project.image}
                      alt="test"
                      style={{ borderRadius: "10px" }}
                    /> */}

                  {project.main_image ? <img
                    src={project.main_image}
                    alt="test"
                    style={{ borderRadius: "10px", width: "100%", height: "100%" }}

                  /> : ""}
                  <Box className="swiper-info" sx={{ mt: "24px" }}>
                    {project.description.length > 200
                      ? project.description.slice(0, 200) + "..."
                      : project.description}
                  </Box>
                </Box>
              );
            })}
      </Slider>
      <div className="slider-arrow">
        <button onClick={() => handlePrevClick()} className="back">
          <NavigateBeforeIcon />
        </button>
        <button
          onClick={() => {
            if (arrowRef.current !== null) {
              arrowRef.current.slickNext();
            }
          }}
          className="next"
        >
          <NavigateNextIcon />
        </button>
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
          {/* <MainButton text="View all Projects" /> */}
          <MainButton>{viewAll[lang]}</MainButton>
        </Link>
      </Box>
    </div>
  );
};

export default ProjectSlick;
