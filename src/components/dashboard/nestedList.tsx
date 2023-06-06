import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NestedListItem from "./nestedListItem";

export default function NestedList({ listName, listButtons } :any) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const pathCheck =
    typeof window !== "undefined" &&
    window.location.pathname.includes(listName.toLowerCase());
  // const pathCheck = window.location.pathname.includes(listName.toLowerCase())

  return (
    <List sx={{ width: "100%", maxWidth: 360, color: "#fff" }} component="nav">
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={listName} />
        {open ? (
          <ExpandLess sx={{ color: "#ED1B24" }} />
        ) : (
          <ExpandMore sx={{ color: "#ED1B24" }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding 
           className={!pathCheck ? 'dash-nav': ""}  
        >
          {listButtons &&
            listButtons.map((item:any, index:number) => <NestedListItem item={item} key={index}/>)}
        </List>
      </Collapse>
    </List>
  );
}