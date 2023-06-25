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
import team14 from "../../assets/team/team-14.png";
import facebookIcon from "../../assets/team/ri_facebook-fill.png";
import backTeam from "../../assets/team/background-team.png";
import whatsIcon from "../../assets/team/ri_whatsapp-fill.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface TeamState {
  name: { en: string, ar: string };
  job: { en: string, ar: string };
  photo: any
}
const Team = () => {

  const lang = useSelector((state: RootState) => state.lang.value.lang);
  const teamPage = useSelector(
    (state: RootState) => state.lang.value.teamPage
  );

  const teamInfoCol: TeamState[] = [
    { name: { en: "Khaled", ar: "خالد" }, job: { en: "Founder & CEO", ar: "المؤسس والرئيس التنفيذي" }, photo: team2 },
    { name: { en: "Eslam", ar: "اسلام" }, job: { en: "cyber security manager", ar: "مدير الأمن السيبراني" }, photo: team3 },
    { name: { en: "Bahaa", ar: "بهاء" }, job: { en: "CEO & Project Manager", ar: "الرئيس التنفيذي ومدير المشروع" }, photo: team14 },
  ]

  const teamInfoCol2: TeamState[] = [
    { name: { en: "Mostafa", ar: "مصطفي" }, job: { en: "Content Director", ar: "كاتب محتوي" }, photo: team11 },
    { name: { en: "Maram", ar: "مرام" }, job: { en: "Backend Developer", ar: "مطور مواقع" }, photo: team6 },
    { name: { en: "Rawiaa", ar: "راوية" }, job: { en: "Direct Sales", ar: "مبيعات مباشرة" }, photo: team8 },
    { name: { en: "ahmed", ar: "احمد" }, job: { en: "flutter developer", ar: "مطور تطبيقات موبايل" }, photo: team9 },
  ]

  const teamInfoCol3: TeamState[] = [
    { name: { en: "Moaz", ar: "معاذ" }, job: { en: "Backend Developer", ar: "مطور مواقع" }, photo: team10 },
    { name: { en: "Nada", ar: "ندي" }, job: { en: "UI & UX", ar: "واجهة المستخدم وتجربة المستخدم" }, photo: team7 },
    { name: { en: "Hosam", ar: "حسام" }, job: { en: "FrontEnd Developer", ar: "مطور مواقع" }, photo: team12 },
  ]


  const teamInfoCol4: TeamState[] = [
    { name: { en: "mohammed", ar: "محمد" }, job: { en: "flutter developer", ar: "مطور تطبيقات موبايل" }, photo: team1 },
    { name: { en: "Ali", ar: "علي" }, job: { en: "flutter developer", ar: "مطور تطبيقات موبايل" }, photo: team5 },
    { name: { en: "Khaled", ar: "خالد" }, job: { en: "FrontEnd Developer", ar: "مطور مواقع" }, photo: team4 },
  ]

  return (
    <>
      <Box className={lang}>
        <TopNav />
        <Navbar />
        <Box sx={{ position: "relative" }}>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <Box sx={{ textAlign: "center", mt: "64px" }}>
                <Typography sx={{ fontWeight: "500", fontSize: "24px" }}>
                  {teamPage.heading[lang]}
                </Typography>
                <Typography sx={{ mt: "16px", mb: "32px" }}>
                  {teamPage.text[lang]}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", pl: { md: lang === 'en' ? "99px" : "0" }, pr: { md: lang === 'en' ? "0px" : "99px" }, gap: "20px", justifyContent: { xs: "center", md: "flex-start" }, flexWrap: "wrap" }}>
                {teamInfoCol.map((person: any, index) => (
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
                        {person.name[lang]}
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
                        {person.job[lang]}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                {teamInfoCol2.map((person: any, index) => (
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
                        {person.name[lang]}
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
                        {person.job[lang]}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  paddingLeft: { md: lang === 'en' ? "99px" : "" },
                  paddingRight: { md: lang === 'en' ? "0" : "99px" },
                  gap: "20px",
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap"
                }}
              >
                {teamInfoCol3.map((person: any, index) => (
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
                        {person.name[lang]}
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
                        {person.job[lang]}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap"
                }}
              >
                {teamInfoCol4.map((person: any, index) => (
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
                        {person.name[lang]}
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
                        {person.job[lang]}
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <Box
                  sx={{ position: "relative", overflow: "hidden" }}
                >
                  <Image src={team13} alt="test" width="162" height="162" />
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
                    <Typography sx={{ color: "rgba(37, 35, 36, 1)", fontSize: "20px" }}>
                      +15
                    </Typography>
                  </Box>
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
