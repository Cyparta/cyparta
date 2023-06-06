import { ListItemButton } from "@mui/material";
import React, { useRef } from "react";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from "../commons/navLink";
import Link from "next/link";

const NestedListItem = ({ item }: any) => {
  // let activeStyle = {
  //   textDecoration: "underline",
  // };

  const listItemRef = useRef<any>();

  const [isActive, setIsActive] = useState(false);

  return (
    <ListItemButton
      sx={{
        pl: 4,
        backgroundColor: isActive ? "#fff" : "", 
        color: isActive ? "#ED1B24" : "",
        borderLeft: isActive ? "2px solid #ED1B24" : "",
      }}
      onClick={() => {
        listItemRef.current.click();
      }}
    >
      <Link
        ref={listItemRef}
        href={item.to}
        // style={({ isActive }:any) => {
        //   setIsActive(isActive);
        //   return {
        //     textDecoration: "none",
        //     color: isActive ? "#ED1B24" : "#fff",
        //   };
        // }}
        replace
      >
        {item.name}
      </Link>


    </ListItemButton>
  );
};

export default NestedListItem;