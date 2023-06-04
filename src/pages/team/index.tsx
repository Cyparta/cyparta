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
import team13 from "../../assets/team/team-13.png";
import facebookIcon from "../../assets/team/ri_facebook-fill.png";
import backTeam from "../../assets/team/background-team.png";
import whatsIcon from "../../assets/team/ri_whatsapp-fill.png";
const Team = () => {
  const teamInfoCol = [
    { name: "Mohamed", job: "flutter developer", photo: team1 },
    { name: "Khaled", job: "Founder & CEO", photo: team2 },
    { name: "Eslam", job: "cyber security manager", photo: team3 },
    { name: "Khaled", job: "FrontEnd developer", photo: team4 },
  ]

  const teamInfoCol2 = [
    { name: "Ali", job: "flutter developer", photo: team5 },
    { name: "Maram", job: "Backend Developer", photo: team6 },
    { name: "Nada", job: "UI & UX", photo: team7 },
    { name: "Rawya", job: "Direct Sales", photo: team8 },
    { name: "Ahmed", job: "flutter developer", photo: team9 },
  ]

  const teamInfoCol3 = [
    { name: "Moaz", job: "Backend Developer", photo: team10 },
    { name: "Mostafa", job: "Content Director", photo: team11 },
    { name: "Hosam", job: "FrontEnd Developer", photo: team12 },
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
                {teamInfoCol.map((person, index) => (
                  <Box
                    sx={{ position: "relative", overflow: "hidden" }}
                    className="team-info"
                    key={index}
                  >
                    <Image src={person.photo} alt="test" width="162" height="162" />
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
                          "polygon(50% 0%, 100% 25%, 100% 73%, 50% 97%, 0% 72%, 0% 24%)",
                        textAlign: "center"
                      }}
                    >
                      <Typography sx={{ color: "#fff", fontSize: "20px" }}>
                        {person.name}
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
                        {person.job}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                {teamInfoCol2.map((person, index) => (
                  <Box
                    sx={{ position: "relative", overflow: "hidden" }}
                    className="team-info"
                    key={index}
                  >
                    <Image src={person.photo} alt="test" width="162" height="162" />
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
                          "polygon(50% 0%, 100% 25%, 100% 73%, 50% 97%, 0% 72%, 0% 24%)",
                        textAlign: "center"
                      }}
                    >
                      <Typography sx={{ color: "#fff", fontSize: "20px" }}>
                        {person.name}
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
                        {person.job}
                      </Typography>
                    </Box>
                  </Box>
                ))}
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
                {teamInfoCol3.map((person, index) => (
                  <Box
                    sx={{ position: "relative", overflow: "hidden" }}
                    className="team-info"
                    key={index}
                  >
                    <Image src={person.photo} alt="test" width="162" height="162" />
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
                          "polygon(50% 0%, 100% 25%, 100% 73%, 50% 97%, 0% 72%, 0% 24%)",
                          textAlign:"center"
                      }}
                    >
                      <Typography sx={{ color: "#fff", fontSize: "20px" }}>
                        {person.name}
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
                        {person.job}
                      </Typography>
                    </Box>
                  </Box>
                ))}
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
