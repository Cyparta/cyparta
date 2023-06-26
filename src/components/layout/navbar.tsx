import logoImg from "../../assets/icons/logo-header.png";
import Image from "next/image";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import TopNav from "./topNav";
import Link from "next/link";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

// const navItems = ['Home', 'projects', 'Contact Us', 'Team'];

export default function DrawerAppBar(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const lang = useSelector((state: RootState) => state.lang.value.lang);
  const {home, projects, team, career, blog} = useSelector((state: RootState) => state.lang.value.pages);
  

  const navItems = [
    { title: home[lang], to: "/" },
    { title: projects[lang], to: "/projects" },
    // { title: career[lang], to: "/careers" },
    // { title: blog[lang], to: "/careers" },
    // { title: "Blog", to: "/blog" },
    { title: team[lang], to: "/team" },
  ];
  // console.log(pages)

  const router = useRouter();

  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Image src={logoImg} width={100} height={50} alt="logo" />
      </Link>
      <List>
        {navItems.map((item, index) => (
          <Link href={`${item.to}`} key={index}>
            <ListItem disablePadding>
              <ListItemButton sx={{}}>
                <ListItemText
                  primary={item.title}
                  style={{
                    color:
                      router.pathname === item.to
                        ? "rgba(37, 35, 36, 1)"
                        : "rgba(133, 133, 133, 1)",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "rgba(204, 204, 204, 1)",
          boxShadow: "0px 1px 2px #A49FA1",
          position: "sticky",
          width: "100%",
          paddingRight: "0 !important",
        }}
        style={{}}
      >
        <Container>
          <Toolbar>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}
            >
              <Link href="/">
                <Image src={logoImg} width={100} height={50} alt="logo" />
              </Link>
              <Box
                sx={{
                  alignSelf: "center",
                  justifySelf: "end",
                  display: "flex",
                  textAlign: "right",
                  margin: "0 !important",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  mr: "20px",
                  marginLeft: "80px",
                },
              }}
            >
              {navItems.map((item, index) => (
                <Link href={`${item.to}`} key={index}>
                  <Button
                    key={index}
                    sx={{
                      color:
                        router.pathname === item.to
                          ? "rgba(37, 35, 36, 1)"
                          : "rgba(133, 133, 133, 1)",
                      textTransform: "capitalize",
                      fontSize: "16px",
                    }}
                  >
                    {item.title}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
