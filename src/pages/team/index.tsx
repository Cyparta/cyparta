import TopNav from "@/components/layout/topNav";
import Navbar from "@/components/layout/navbar";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

import team1 from "../../assets/team/team-1.png";
import team2 from "../../assets/team/team-2.png";
import team3 from "../../assets/team/team-3.png";
import team4 from "../../assets/team/team-4.png";
import team5 from "../../assets/team/team-5.png";
import team6 from "../../assets/team/team-6.png";
import team7 from "../../assets/team/team-7.png";
import team8 from "../../assets/team/team-8.png";
import team9 from "../../assets/team/team-9.png";
import team10 from "../../assets/team/team-10.png";
import team11 from "../../assets/team/team-11.png";
import team12 from "../../assets/team/team-12.png";
import facebookIcon from "../../assets/team/ri_facebook-fill.png";
import backTeam from "../../assets/team/background-team.png";
import whatsIcon from "../../assets/team/ri_whatsapp-fill.png";
const Team = () => {
  const teamInfo = [
    { name: "mohamed Ayed", job: "flutter developer" },
    { name: "khaled el hadedy", job: "flutter developer" },
    { name: "Eslam el hadedy", job: "software developer" },
    { name: "Khaled Gamal", job: "front developer" },
    { name: "Ali samer", job: "front developer" },
  ]
  return (
    <>
      <Box>
        <TopNav />
        <Navbar />
        <Box sx={{ position: "relative" }}>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <Box sx={{ textAlign: "center", mt: "64px" }}>
                <Typography sx={{ fontWeight: "500", fontSize: "24px" }}>
                  Our Team
                </Typography>
                <Typography sx={{ mt: "16px", mb: "32px" }}>
                  Meet Our team and make sure that you making the right decision
                </Typography>
              </Box>

              <Box sx={{ display: "flex", pl: { md: "81px" }, gap: "20px", justifyContent: { xs: "center", md: "flex-start" }, flexWrap: "wrap" }}>
                <Box
                  sx={{ position: "relative", overflow: "hidden" }}
                  className="team-info"
                >
                  <Image src={team1} alt="test" width="162" height="162" />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0",
                      width: "100%",
                      height: "100%",
                      background: "#20202073",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "20px" }}>
                      Mohamed Ayed
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: "500",
                        mt: "5px",
                        mb: "5px",
                      }}
                    >
                      flutter developer
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ position: "relative", overflow: "hidden" }} className="team-info">
                  <Image src={team2} alt="test" width="162" height="162" />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0",
                      width: "100%",
                      height: "100%",
                      background: "#20202073",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "20px" }}>
                      Khaled Elhededy
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: "500",
                        mt: "5px",
                        mb: "5px",
                      }}
                    >
                      flutter developer
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Image src={team3} alt="test" width="162" height="162" />
                </Box>
                <Box>
                  <Image src={team4} alt="test" width="162" height="162" />
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                <Box>
                  <Image src={team5} alt="test" width="162" height="162" />
                </Box>
                <Box>
                  <Image src={team6} alt="test" width="162" height="162" />
                </Box>
                <Box>
                  <Image src={team7} alt="test" width="162" height="162" />
                </Box>
                <Box>
                  <Image src={team8} alt="test" width="162" height="162" />
                </Box>
                <Box>
                  <Image src={team9} alt="test" width="162" height="162" />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  paddingLeft: { md: "81px" },
                  gap: "20px",
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap"
                }}
              >
                <Box>
                  <Image src={team10} alt="test" width="162" height="162" />
                </Box>
                <Box>
                  <Image src={team11} alt="test" width="162" height="162" />
                </Box>
                <Box>
                  <Image src={team12} alt="test" width="162" height="162" />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box className="team-background"></Box>
        <Footer />
      </Box>
    </>
  );
};

export default Team;
