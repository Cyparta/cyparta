import { Box } from "@mui/material";
import React from "react";
// import DashNavbar from "../components/DashNavbar";
import Grid from "@mui/material/Unstable_Grid2";
// import NavDrawer from "/NavDrawer";
import NavDrawer from "./navDrawer";
import DashNavbar from "./dashNavbar";
import DashSidebar from "./dashSidebar";

// import DashboardContent from "";
import DashboardContainer from "./dashboardContainer";

const Layout = ({ page }:any) => {
  return (
    <Box sx={{ flexGrow: 1, width: "100vw", height: "100vh" }}>
      <Grid container sx={{  }}>
        {/** First Col */}
        <Grid xs={2}>
          <Box sx={{ height: "100%", bgcolor: "#312F30" }}>
            <NavDrawer />
          </Box>
        </Grid>
        <Grid xs={10}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <DashNavbar />
          </Box>
        </Grid>

        {/** Scound Col */}
        <Grid
          xs={2}
          sx={{
            minHeight: "100%",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <DashSidebar />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={10}
          sx={{ maxHeight: "100%", overflowY: "auto" }}
        >
          {/* <Box
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "#fff",
              padding: 1,

            }}
          >
            {page ? page : ""}
          </Box> */}

          <DashboardContainer>{page}</DashboardContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;