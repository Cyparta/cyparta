


import React from "react";
import { Box, Typography } from "@mui/material";
import PageName from "../pageName";
import CustomContainer from "../customContainer";
import person4 from "@/assets/dashboard/person3.png";
import Image from "next/image";
const ProjectDetails = () => {
    // const columns = [
    //   { field: "taskName", headerName: "Task Name", width: 140 },
    //   {
    //     field: "status",
    //     headerName: "Status",
    //     width: 130,
    //     cellClassName: "status-column--cell",
    //     renderCell: ({ row }) => (
    //       <Box
    //         sx={{
    //           width: "100%",
    //           height: "100%",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           background:
    //             row.status === "Working on it"
    //               ? "#FDAB3D"
    //               : row.status === "Done"
    //               ? "#00C875"
    //               : row.status === "Stuck"
    //               ? "#E2445C"
    //               : "transparent",
    //         }}
    //       >
    //         <Typography sx={{ color: "white", fontSize: "14px" }}>
    //           {row.status}
    //         </Typography>
    //       </Box>
    //     ),
    //   },
    //   { field: "start", headerName: "Start Date", width: 130 },
    //   {
    //     field: "deadline",
    //     headerName: "deadline",
    //     type: "date",
    //     width: 90,
    //   },
    //   { field: "notes", headerName: "notes", width: 200 },
    //   { field: "taskPerview", headerName: "task Perview", width: 100 },
    //   {
    //     field: "taskReview",
    //     headerName: "task review",
    //     width: 100,
    //     renderCell: ({ row }) => (
    //       <Box>
    //         {row.taskReview && (
    //           <>
    //           {console.log(row.taskReview)}
    //             <StarIcon fontSize="15px" sx={{ color: "#F2CD5C" }} />
    //             <StarIcon fontSize="15px" sx={{ color: "#F2CD5C" }} />
    //             <StarIcon fontSize="15px" sx={{ color: "#F2CD5C" }} />
    //             <StarIcon fontSize="15px" sx={{ color: "#F2CD5C" }} />
    //             <StarIcon fontSize="15px" sx={{ color: "#F2CD5C" }} />
    //           </>
    //         )}
    //       </Box>
    //     ),
    //   },
    //   {},
    // ];

    const rows = [
        {
            checkbox: false,
            taskName: "Login Screen",
            status: "Working on it",
            start: "Oct 10",
            notes: "Don't forget to add login by Facebook and Instgram.",
            taskPerview: { name: "Cyparta", to: "https://xd.adobe.com/view/d6bb32ec-cfac-4631-9c4d-ae2233cac91d-83e8/screen/ca5757f0-1a3e-481d-9c96-663420575786/" },
            deadline: "Oct 10",
            rating: "3",
        },
        {
            checkbox: true,
            taskName: "SignUp Screen",
            status: "Done",
            start: "Oct 11",
            notes: "",
            taskPerview: { image: "https://unsplash.com/s/photos/image", to: "https://xd.adobe.com/view/d6bb32ec-cfac-4631-9c4d-ae2233cac91d-83e8/screen/ca5757f0-1a3e-481d-9c96-663420575786/" },
            deadline: "Oct 11",
            rating: "3.5",
        },
        {
            taskName: "Home Screen",
            status: "Stuck",
            start: "Oct 12",
            notes: "",
            taskPerview: { name: "Cyparta", to: "https://xd.adobe.com/view/d6bb32ec-cfac-4631-9c4d-ae2233cac91d-83e8/screen/ca5757f0-1a3e-481d-9c96-663420575786/" },
            deadline: "Oct 13",
            rating: "0",
        },
    ];
    const columns = [
        { value: "", name: "checkbox", type: "checkbox" },
        { value: "task Name", name: "taskName", type: "text", size: "18px" },
        { value: "status", name: "status", type: "text", color: "#FFFFFF" },
        { value: "start Date", name: "start", type: "text" },
        { value: "Deadline", name: "deadline", type: "text" },
        { value: "notes", name: "notes", type: "text" },
        { value: "task Perview", name: "taskPerview", type: "link", size: "18px" },
        { value: "rating", name: "rating", type: "rating" },
    ];
    return (
        <Box sx={{ width: "100%", height: "100vh" }}>
            <Box>
                <PageName
                    sx={{ color: "#000" }}
                    name={"projects"}
                    subName={"My Project"}
                    subTitle={"CYPARTA"}
                />

                {/* <HeroPage
          name={{title: "Tasks", active: true, to: "/"}}
          subName={{title: "Timeline", active: false, to: "/Dashboard/timeline"}}
          subTitle={{title: "Info", active: false, to: "/Dashboard/info"}}
          sx={{ mt: "20px" }}
        /> */}

        <Box>hero page here</Box>

                <Box sx={{ borderRadius: "10px", marginBlock: "2rem" }}></Box>
                <Box
                    sx={{ borderRadius: "10px", marginBlock: "2rem" }}
                    style={{ height: "10px", width: "100%" }}
                >
                    {/* person  */}
                    <Box sx={{ display: "flex", mb: "0" }}>
                        <Box>
                            <Image src={person4} alt="person" />
                            <Typography component="span" sx={{ color: "#312F30", fontSize: "18px", fontFamily: "Tajawal", fontWeight: "500", mx: "6px" }}>
                                Demiana Magdy <Typography component="span" color="#ED1B24" fontSize="14px">(UI/UX Designer)</Typography>
                            </Typography>
                        </Box>
                    </Box>
                    <CustomContainer columns={columns} rows={rows} addTask={true} />
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectDetails;
