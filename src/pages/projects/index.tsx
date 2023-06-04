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
  const [filterOpt, setFilterOpt] = useState("latest");
  const projectDetails = [
    { photo: project1, type: "web", date: 1 },
    { photo: project2, type: "applications", date: 5 },
    { photo: project3, type: "applications", date: 4 },
    { photo: project4, type: "web", date: 2 },
    { photo: project5, type: "web", date: 6 },
    { photo: project6, type: "applications", date: 8 },
    { photo: project7, type: "applications", date: 3 },
    { photo: project8, type: "web", date: 7 },
    { photo: project9, type: "applications", date: 9 },
  ];

  // console.log(projectDetails.sort((a, b) => {
  //   if (filterOpt == 'latest') {
  //     return a.date - b.date
  //   } else {
  //     return b.date - a.date
  //   }
  // }))

  // console.log(projectDetails.sort((a, b) => filterOpt === 'latest' ?a.date - b.date : b.date - a.date ))

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
              style={{
                fontSize: "16px", fontWeight: "500", cursor: "pointer",
                color: projectDet !== "all" ? "rgba(164, 164, 164, 1)" : "rgba(37, 35, 36, 1)",
              }}
              onClick={() => setProjectDet("all")}
            >
              All /{" "}
            </li>
            <li
              style={{
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                color: projectDet !== "applications" ? "rgba(164, 164, 164, 1)" : "rgba(37, 35, 36, 1)",
              }}
              onClick={() => setProjectDet("applications")}
            >
              Applications /
            </li>
            <li
              style={{
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                color: projectDet !== "web" ? "rgba(164, 164, 164, 1)" : "rgba(37, 35, 36, 1)",
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
              onChange={(e) => {
                setFilterOpt(e.target.value)
              }}
            >
              <option value="latest">Latest</option>
              <option value="oldest">oldest</option>
            </select>
          </Box>
        </Box>
        <Grid container spacing={2} sx={{ mt: "24px" }}>
          {projectDet === "all" ? projectDetails.sort((a, b) => filterOpt === 'latest' ? a.date - b.date : b.date - a.date).map((project, index) => (
            <Grid item xs={12} sm={6} key={index} sx={{ overflow: "hidden" }}>
              <Box className="projects-hover">
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
                <Box>
                  <Typography sx={{ mb: "8px", fontWeight: "500" }}>Fe khidmetak</Typography>
                  <Typography sx={{ mb: "32px" }}>Mobile app ,service all Egypt</Typography>
                  <Link href={`/projects/${index + 1}`}>

                    <button style={{ background: "rgba(37, 35, 36, 1)", color: "#fff", padding: "10px 30px", border: "2px solid #EC232B", borderRadius: "12px", cursor: "pointer" }}>see details</button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          )) : projectDetails.sort((a, b) => filterOpt === 'latest' ? a.date - b.date : b.date - a.date).filter((project) => project.type == projectDet).map((project, index) => (
            <Grid item xs={12} sm={6} key={index} sx={{ overflow: "hidden" }}>
              <Box className="projects-hover">
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
                <Box>
                  <Typography sx={{ mb: "8px", fontWeight: "500" }}>Fe khidmetak</Typography>
                  <Typography sx={{ mb: "32px" }}>Mobile app ,service all Egypt</Typography>
                  <Link href={`/projects/${index + 1}`}>

                    <button style={{ background: "rgba(37, 35, 36, 1)", color: "#fff", padding: "10px 30px", border: "2px solid #EC232B", borderRadius: "12px", cursor: "pointer" }}>see details</button>
                  </Link>
                </Box>
              </Box>
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
