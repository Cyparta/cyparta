import { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { RequestGetCollection } from "@/store/collections/collectionsSlice";
import { RequestGetProducts, setFilter } from "@/store/products/productsSlice";
const Index = () => {
  const [projectDet, setProjectDet] = useState("all");

  const { collection } = useSelector((state: RootState) => state.products)
  const lang = useSelector((state: RootState) => state.lang.value.lang)
  const { heading, text, tabs, sort } = useSelector((state: RootState) => state.lang.value.projectsPage)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // dispatch(RequestGetCollection())
    dispatch(RequestGetProducts())
  }, [])

  const handleFilter = ({ name, val }: { name: string; val: string }) => {
    if (name === "type") {
      setProjectDet(val)
    }
    dispatch(setFilter({ name, val }))
    dispatch(RequestGetProducts())
  }


  interface Collection {
    // image: string;
    description: string;
    title: string;
    type: string;
    id: number;
    product_image: string
  }


  return (
    <div className={lang}>
      <TopNav />
      <Navbar />

      <HeroPage
        text={text[lang]}
        heading={heading[lang]}
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
              onClick={() => handleFilter({ name: "type", val: "" })}
            >
              {tabs.tab1[lang]} /{" "}
            </li>
            <li
              style={{
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                color: projectDet !== "app" ? "rgba(164, 164, 164, 1)" : "rgba(37, 35, 36, 1)",
              }}
              onClick={() => handleFilter({ name: "type", val: "app" })}
            >
              {tabs.tab2[lang]} /
            </li>
            <li
              style={{
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                color: projectDet !== "website" ? "rgba(164, 164, 164, 1)" : "rgba(37, 35, 36, 1)",
              }}
              onClick={() => handleFilter({ name: "type", val: "website" })}
            >
              {tabs.tab3[lang]}
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
              {sort.sortBy[lang]}
            </Typography>
            <select
              name="cars"
              id="cars"
              style={{ border: "none", outline: "none" }}
              className="select"
              onChange={(e) => handleFilter({ name: "ordering", val: e.target.value })}
            >
              <option value="launched_at">{sort.latest[lang]}</option>
              <option value="-launched_at">{sort.oldest[lang]}</option>
            </select>
          </Box>
        </Box>
        {/* projectDetails.sort((a, b) => filterOpt === 'latest' ? a.date - b.date : b.date - a.date) */}
        <Grid container spacing={2} sx={{ mt: "24px" }}>
          {projectDet === "all" ? collection.map((project: Collection, index) => (
            <Grid item xs={12} sm={6} key={index} sx={{ overflow: "hidden" }}>
              <Box className="projects-hover">
                <Image
                  src={project.product_image}
                  width="500"
                  height={282}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    height: "100%",
                  }}
                  alt="project Name"
                />
                <Box className="project-hover">
                  <Typography sx={{ mb: "8px", fontWeight: "500" }}>{project.title}</Typography>
                  <Typography sx={{ mb: "32px" }}>{project.type == "web" ? "website" : "Application"}</Typography>
                  <Link href={`/projects/${project.id}`}>

                    <button style={{ background: "rgba(37, 35, 36, 1)", color: "#fff", padding: "10px 30px", border: "2px solid #EC232B", borderRadius: "12px", cursor: "pointer" }}>see details</button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          )) : collection.filter((project: Collection) => project.type == projectDet).map((project: Collection, index) => (
            <Grid item xs={12} sm={6} key={index} sx={{ overflow: "hidden" }}>
              <Box className="projects-hover">
                <Image
                  src={project.product_image}
                  width="500"
                  height={282}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    height: "100%",
                  }}
                  alt="project Name"
                />
                <Box className="project-hover">
                  <Typography sx={{ mb: "8px", fontWeight: "500" }}>{project.title}</Typography>
                  <Typography sx={{ mb: "32px" }}>{project.type == "web" ? "website" : "Application"}</Typography>
                  <Link href={`/projects/${project.id}`}>
                    <button style={{ background: "rgba(37, 35, 36, 1)", color: "#fff", padding: "10px 30px", border: "2px solid #EC232B", borderRadius: "12px", cursor: "pointer" }}>see details</button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}

        </Grid>

        {/* pagination */}
        {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
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
        </Box> */}
      </Container>

      <Footer />
    </div>
  );
};

export default Index;
