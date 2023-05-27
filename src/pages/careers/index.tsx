import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import Navbar from "@/components/layout/navbar";
import TopNav from "@/components/layout/topNav";
import HeroPage from "@/components/commons/heroPage";
import coverImage from "../../assets/cover/careers-cover.png";
import bagIcon from "../../assets/icons/bag-icon.png";
import fullTimeIcon from "../../assets/icons/baag-icon.png";
import siteIcon from "../../assets/icons/lap-icon.png";
import arrowIconsCareers from "../../assets/icons/arrow-icon-careers.png";
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Index = () => {
  return (
    <Box>
      <TopNav />
      <Navbar />
      <Box sx={{ position: "relative" }}>
        <HeroPage
          text="thinking you make a better decision more than choosing us !!"
          heading="Careers"
          imageCover={coverImage}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
          }}
        >
          <Container>
            <Box sx={{ background: "#CCCCCC", padding: "15px" }}>
              <Grid container>
                <Grid item xs={4}>
                  <Box>test</Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>test</Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>test</Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>

      <Container>
        <Box sx={{ display: "flex", alignItems: "center", mb: "40px" }}>
          <Checkbox {...label} />
          <Typography sx={{ fontSize: "13px" }}>
            I need to be noticed if there is an empty position
          </Typography>
        </Box>
        {/* loop will be here  remove this and pust a comment */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "#FCFBFC",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "#252324",
                    fontWeight: "500",
                    mb: "16px",
                  }}
                >
                  FRONT END DEVELOPER (REACT)
                </Typography>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image
                      src={fullTimeIcon}
                      alt="bag"
                      width={15}
                      height={15}
                    />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      Full Time
                    </p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image src={bagIcon} alt="bag" width={15} height={15} />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      On Site
                    </p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image src={siteIcon} alt="bag" width={15} height={15} />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      Posted 4 months ago
                    </p>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      color: "#252324",
                      fontWeight: "500",
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  >
                    Apply now
                  </span>
                  <Image
                    alt="test"
                    src={arrowIconsCareers}
                    width={24}
                    height={24}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "#FCFBFC",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "#252324",
                    fontWeight: "500",
                    mb: "16px",
                  }}
                >
                  FRONT END DEVELOPER (REACT)
                </Typography>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image
                      src={fullTimeIcon}
                      alt="bag"
                      width={15}
                      height={15}
                    />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      Full Time
                    </p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image src={bagIcon} alt="bag" width={15} height={15} />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      On Site
                    </p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image src={siteIcon} alt="bag" width={15} height={15} />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      Posted 4 months ago
                    </p>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      color: "#252324",
                      fontWeight: "500",
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  >
                    Apply now
                  </span>
                  <Image
                    alt="test"
                    src={arrowIconsCareers}
                    width={24}
                    height={24}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "#FCFBFC",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "#252324",
                    fontWeight: "500",
                    mb: "16px",
                  }}
                >
                  FRONT END DEVELOPER (REACT)
                </Typography>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image
                      src={fullTimeIcon}
                      alt="bag"
                      width={15}
                      height={15}
                    />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      Full Time
                    </p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image src={bagIcon} alt="bag" width={15} height={15} />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      On Site
                    </p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image src={siteIcon} alt="bag" width={15} height={15} />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      Posted 4 months ago
                    </p>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      color: "#252324",
                      fontWeight: "500",
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  >
                    Apply now
                  </span>
                  <Image
                    alt="test"
                    src={arrowIconsCareers}
                    width={24}
                    height={24}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "#FCFBFC",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "#252324",
                    fontWeight: "500",
                    mb: "16px",
                  }}
                >
                  FRONT END DEVELOPER (REACT)
                </Typography>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image
                      src={fullTimeIcon}
                      alt="bag"
                      width={15}
                      height={15}
                    />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      Full Time
                    </p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image src={bagIcon} alt="bag" width={15} height={15} />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      On Site
                    </p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image src={siteIcon} alt="bag" width={15} height={15} />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      Posted 4 months ago
                    </p>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      color: "#252324",
                      fontWeight: "500",
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  >
                    Apply now
                  </span>
                  <Image
                    alt="test"
                    src={arrowIconsCareers}
                    width={24}
                    height={24}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "#FCFBFC",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "#252324",
                    fontWeight: "500",
                    mb: "16px",
                  }}
                >
                  FRONT END DEVELOPER (REACT)
                </Typography>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image
                      src={fullTimeIcon}
                      alt="bag"
                      width={15}
                      height={15}
                    />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      Full Time
                    </p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image src={bagIcon} alt="bag" width={15} height={15} />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      On Site
                    </p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      mb: "8px",
                    }}
                  >
                    <Image src={siteIcon} alt="bag" width={15} height={15} />
                    <p style={{ fontSize: "14px", color: "#727071" }}>
                      Posted 4 months ago
                    </p>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      color: "#252324",
                      fontWeight: "500",
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  >
                    Apply now
                  </span>
                  <Image
                    alt="test"
                    src={arrowIconsCareers}
                    width={24}
                    height={24}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
