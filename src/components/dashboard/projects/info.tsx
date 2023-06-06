import React from "react";
// import PageName from "../../components/PageName";
// import HeroPage from "../../components/HeroPage";
import PageName from "@/components/dashboard/pageName";
import { Box, List, ListItem, Typography } from "@mui/material";
import HeroPage from "@/components/commons/heroPage";
import logo from "@/assets/Dashboard/logo.png";
import Checkbox from "@mui/material/Checkbox";
// make sure you include the timeline stylesheet or the timeline will not be styled
import moment from 'moment';
import Image from "next/image";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  }
]
const Info = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", mb: "100px" }}>
      <Box sx={{ fontSize: "2rem" }}>
        <PageName
          sx={{ color: "#000" }}
          name={"projects"}
          subName={"CreateProject"}
          subTitle={"CYPARTA"}
        />
      </Box>
      <Box mt="20px">
        {/* <HeroPage
          name={{title: "Tasks", active: false, to: "/Dashboard/myprojects"}}
          subName={{title: "Timeline", active: false, to: "/Dashboard/timeline"}}
          subTitle={{title: "Info", active: true, to: "/Dashboard/info"}}
        /> */}
      </Box>
      {/* card Box */}
      <Box
        sx={{ boxShadow: "0px 0px 6px #00000029", padding: "20px", mt: "23px" }}
      >
        {/* top Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h4" component="h3" color="#ED1B24">
            CYPARTA
          </Typography>
          {/* <img src={logo} alt="logo" /> */}
          <Image src={logo} alt="logo"/>
        </Box>
        {/* list SEction */}
        <List>
          <ListItem>
            <Checkbox {...label} defaultChecked />
            <Box>
              <Typography color="red" component="span" fontSize="22px">
                Project Owner:{" "}
              </Typography>
              <Typography component="span" fontSize="22px">
                Eslam Elhadedy
              </Typography>
            </Box>
          </ListItem>
          <ListItem>
            <Checkbox {...label} defaultChecked />
            <Box>
              <Typography color="red" component="span" fontSize="22px">
                Team Leader:{" "}
              </Typography>
              <Typography component="span" fontSize="22px">
                Ahmed Hatem
              </Typography>
            </Box>
          </ListItem>
          <ListItem>
            <Checkbox {...label} />
            <Box>
              <Typography color="red" component="span" fontSize="22px">
                Budget:{" "}
              </Typography>
              <Typography component="span" fontSize="22px">
                1500$
              </Typography>
            </Box>
          </ListItem>
          <ListItem>
            <Checkbox {...label} defaultChecked />
            <Box>
              <Typography color="red" component="span" fontSize="22px">
                Start Date:{" "}
              </Typography>
              <Typography component="span" fontSize="22px">
                4/11/2022
              </Typography>
            </Box>
          </ListItem>
          <ListItem>
            <Checkbox {...label} defaultChecked />
            <Box>
              <Typography color="red" component="span" fontSize="22px">
                Deadline:{" "}
              </Typography>
              <Typography component="span" fontSize="22px">
                4/11/2022
              </Typography>
            </Box>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <Box>
              <Checkbox {...label} defaultChecked />
              <Typography color="red" component="span" fontSize="22px">
                Deadline:{" "}
              </Typography>
            </Box>
            <Box sx={{ marginLeft: "20px" }}>
              <Box mb="10px">
                <Typography component="span" fontSize="22px">
                  Demiana Magdy{" "}
                  <Typography color="red" component="span" fontSize="22px">
                    (UI/Ux Designer)
                  </Typography>
                </Typography>
              </Box>
              <Box mb="10px">
                <Typography component="span" fontSize="22px">
                  Demiana Magdy{" "}
                  <Typography color="red" component="span" fontSize="22px">
                    (UI/Ux Designer)
                  </Typography>
                </Typography>
              </Box>
              <Box mb="10px">
                <Typography component="span" fontSize="22px">
                  Demiana Magdy{" "}
                  <Typography color="red" component="span" fontSize="22px">
                    (UI/Ux Designer)
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </ListItem>
        </List>
      </Box>   
    </Box>
  );
};

export default Info;