import { Box, Container, Grid } from "@mui/material";
import phoneIcon from "../../assets/icons/phone-nav.png";
import messageIcon from "../../assets/icons/message-icon.png";
import Image from "next/image";
import MainButton from "../commons/MainButton";
import Link from "next/link";
const TopNav = () => {
  return (
    <Box
      className="top-nav"
      sx={{
        background: "rgba(49, 47, 48, 1)",
        color: "#fff",
        padding: "10px",
        boxShadow: "0px 1px 2px #A49FA1",
        display:{xs:"none", md:"block"}
      }}
    >
      <Container>
        <Grid
          container
          alignItems="center"
          sx={{ flexWrap: "wrap" }}
          spacing={2}
        >
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Image src={phoneIcon} alt="phone" width={20} height={20} />
                  <p style={{ cursor: "pointer", fontSize: "14px" }}>
                    +1 (312) 270-0815
                  </p>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Image src={phoneIcon} alt="phone" width={20} height={20} />
                  <p style={{ cursor: "pointer", fontSize: "14px" }}>
                    +20 0101 720 4584
                  </p>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Image src={messageIcon} alt="phone" width={20} height={20} />
                  <p style={{ cursor: "pointer", fontSize: "14px" }}>
                    Support@cyparta.com
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} textAlign={"right"}>
            <Link href="/offer">
              <MainButton text="Offer Price" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopNav;
