import { useState } from "react";
import TopNav from "@/components/layout/topNav";
import Navbar from "@/components/layout/navbar";
import { Container, Box, Typography, Grid } from "@mui/material";
import coverImage from "../../assets/projects/cover.png";
import project1 from "../../assets/projects/project-1.png";
import project2 from "../../assets/projects/project-2.png";
import project3 from "../../assets/projects/project-3.png";
import project4 from "../../assets/projects/project-4.png";
import project5 from "../../assets/projects/project-5.png";
import project6 from "../../assets/projects/project-6.png";
import project7 from "../../assets/projects/project-7.png";
import project8 from "../../assets/projects/project-8.png";
import project9 from "../../assets/projects/project-9.png";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import HeroPage from "@/components/commons/heroPage";
const Index = () => {
  const [projectDet, setProjectDet] = useState("all");

  const projectDetails = [
    { photo: project1, type: "web" },
    { photo: project2, type: "applications" },
    { photo: project3, type: "applications" },
    { photo: project4, type: "web" },
    { photo: project5, type: "web" },
    { photo: project6, type: "applications" },
    { photo: project7, type: "applications" },
    { photo: project8, type: "web" },
    { photo: project9, type: "applications" },
  ];

  return (
    <div>
      <TopNav />
      <Navbar />

      <HeroPage
        text="thinking you make a better decision more than choosing us !!"
        heading="Projects"
        imageCover={coverImage}
      />

      <Container>
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
              style={{ fontSize: "16px", fontWeight: "500", cursor: "pointer" }}
              onClick={() => setProjectDet("all")}
            >
              All /{" "}
            </li>
            <li
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "rgba(164, 164, 164, 1)",
                cursor: "pointer",
              }}
              onClick={() => setProjectDet("applications")}
            >
              Applications /
            </li>
            <li
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "rgba(164, 164, 164, 1)",
                cursor: "pointer",
              }}
              onClick={() => setProjectDet("web")}
            >
              Websites
            </li>
          </ul>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Box>
            <Typography
              sx={{
                color: "rgba(33, 33, 33, 1)",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              Sort by
            </Typography>
            <select
              name="cars"
              id="cars"
              style={{ border: "none", outline: "none" }}
              className="select"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </Box>
        </Box>
        <Grid container spacing={2} sx={{ mt: "24px" }}>
          {projectDet === "all" ? projectDetails.map((project, index) => (
            <Grid item xs={12} sm={6}>
              <Link href={`/projects/${index + 1}`}>
                <Box>
                  <Image
                    src={project.photo}
                    width="500"
                    height={282}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      height: "100%",
                    }}
                    alt="project Name"
                  />
                </Box>
              </Link>
            </Grid>
          )) : projectDetails.filter((project) => project.type == projectDet).map((project, index) => (
            <Grid item xs={12} sm={6}>
              <Link href={`/projects/${index + 1}`}>
                <Box>
                  <Image
                    src={project.photo}
                    width="500"
                    height={282}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      height: "100%",
                    }}
                    alt="project Name"
                  />
                </Box>
              </Link>
            </Grid>
          ))}

        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack
            spacing={2}
            sx={{
              justifyContent: "center",
              mt: "70px",
              display: "flex",
              textAlign: "center",
            }}
          >
            <Pagination count={10} />
          </Stack>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default Index;
