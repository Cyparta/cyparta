import { Box, ListItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
// import DashboardTable from "../../components/DashboardTable";
import DashboardTable from "../dashboardTable";
import PageName from "../pageName";
import FormTable from "../formTable";
import CustomForm from "../customForm";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
// import MenuFilter from "../../components/MenuFilter";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
// import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* react beautiful -dnd */
// import { DragDropContext } from "react-beautiful-dnd";
// import { Droppable } from "react-beautiful-dnd";
// import TaskCard from "../../components/TaskCard";

import person1 from "@/assets/dashboard/person1.png";
import person2 from "@/assets/dashboard/person2.png";
import person3 from "@/assets/dashboard/person3.png";

import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
const rows = [
  {
    name: "employe Name",
    start: "09:00:25 Am",
    end: "09:00:25 Am",
    days: "00.00.25",
    notes: "need vacition to spend it with her family",
    history: "09:00:25 Am",
  },
  {
    name: "employe Name",
    start: "09:00:25 Am",
    end: "09:00:25 Am",
    days: "00.00.25",
    notes: "need vacition to spend it with her family",
    history: "09:00:25 Am",
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const CreateProject = () => {
  // perview image
  const inputImage = useRef();
  const [images, setImages] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);
  useEffect(() => {
    if (images.length < 1) return;
    const newImagesUrl = [];
    // images.forEach((image) => newImagesUrl.push(URL.createObjectURL(image)));
    setImagesUrl(newImagesUrl);
  }, [images]);
  function onImgChange(e) {
    setImages([...e.target.files]);
  }

  const col = [
    {
      name: "name",
      value: "project Name",
      type: "input",
    },
    {
      name: "owner",
      value: "project owner",
      type: "input",
    },
    {
      name: "team",
      value: "team leader",
      type: "input",
    },
    {
      name: "start",
      value: "start Date",
      type: "date",
    },
    {
      name: "end",
      value: "end Date",
      type: "date",
    },
  ];

  const listData = [
    "Cash payment",
    "Credit Payment",
    "Login by e-mail, facebook and instgram",
    "SignUp by e-mail, facebook and instgram",
  ];

  const data = [
    {
      id: "1",
      Task: "Eslam El hadedy",
      avatar: person1,
    },
    {
      id: "2",
      Task: "Ahmed hatem",
      avatar: person2,
    },
    {
      id: "3",
      Task: "Demiana Magdy",
      avatar: person3,
    },
    {
      id: "4",
      Task: "Abd El Rahman",
      avatar: person1,
    },
    {
      id: "5",
      Task: "proin",
      avatar: person1,
    },
  ];

  const list2 = [
    {
      id: "7",
      Task: "Eslam El hadedy",
      avatar: person1,
    },
    {
      id: "8",
      Task: "Ahmed hatem",
      avatar: person2,
    },
    {
      id: "9",
      Task: "Demiana Magdy",
      avatar: person3,
    },
  ];

  const [columns, setColumns] = useState({
    name: { title: "Employee Name:", items: data },
    text: { title: "project Member:", items: list2 },
  });

//   const onDragEnd = (result, columns, setColumns) => {
//     if (!result.destination) return;
//     const { source, destination } = result;
//     if (source.droppableId !== destination.droppableId) {
//       const sourceColumn = columns[source.droppableId];
//       const destColumn = columns[destination.droppableId];
//       const sourceItems = [...sourceColumn.items];
//       const destItems = [...destColumn.items];
//       const [removed] = sourceItems.splice(source.index, 1);
//       destItems.splice(destination.index, 0, removed);
//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...sourceColumn,
//           items: sourceItems,
//         },
//         [destination.droppableId]: {
//           ...destColumn,
//           items: destItems,
//         },
//       });
//     } else {
//       const column = columns[source.droppableId];
//       const copiedItems = [...column.items];
//       const [removed] = copiedItems.splice(source.index, 1);
//       copiedItems.splice(destination.index, 0, removed);
//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...column,
//           items: copiedItems,
//         },
//       });
//     }
//   };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ fontSize: "2rem" }}>
        <PageName
          sx={{ color: "#000" }}
          name={"projects"}
          subName={"CreateProject"}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", sm: "50%" },
              height: "100%",
              bgcolor: "#fff",
              paddingBlock: 3,
            }}
          >
            <DashboardTable
              pageName={"create Project"}
              hint={"Please fill this form"}
            >
              <FormTable submitButtonLabel={"save"} sx={{ width: "100%" }}>
                {/* Form */}
                <CustomForm columns={col} />
                {/* Drag and Drop */}
                {/* <DragDropContext
                  onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
                >
                  <Box sx={{ display: "flex", position: "relative" }}>
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      {Object.entries(columns).map(
                        ([columnId, column], index) => {
                          return (
                            <Droppable key={columnId} droppableId={columnId}>
                              {(provided, snapshot) => (
                                <Box
                                  sx={{
                                    minHeight: "100px",
                                    display: "flex",
                                    flexDirection: "column",
                                    background: "#312f30",
                                    width: "45%",
                                    borderRadius: "5px",
                                    padding: "15px 15px",
                                    marginRight: "1px",
                                    borderRadius: "20px",
                                  }}
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                >
                                  <Box
                                    sx={{
                                      fontSize: "22px",
                                      fontFamily: "Tajawal",
                                      fontWeight: "400",
                                      color: "#fff",
                                      alignSelf: "flex-start",
                                      marginBottom: "17px",
                                      textTransform: "capitalize"
                                    }}
                                  >
                                    {column.title}
                                  </Box>
                                  {column.items.map((item, index) => (
                                    <TaskCard
                                      key={item}
                                      item={item}
                                      index={index}
                                    />
                                  ))}
                                  {provided.placeholder}
                                </Box>
                              )}
                            </Droppable>
                          );
                        }
                      )}
                      <div
                        style={{
                          alignSelf: "center",
                          position: "absolute",
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <div>
                          <ArrowCircleRightRoundedIcon />
                        </div>
                        <div>
                          <ArrowCircleLeftRoundedIcon />
                        </div>
                      </div>
                    </Box>
                  </Box>
                </DragDropContext> */}
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      border: "1px solid #312f30",
                      borderRadius: "20px",
                      mb: "10px",
                      bgcolor: "#312f30",
                      "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          border: "none",
                          outline: "none",
                        },
                    }}
                  >
                    <TextField
                      id="featured"
                      name="featured"
                      type="text"
                      placeholder="features"
                      variant="outlined"
                      sx={{
                        width: "100%",
                        overflow: "hidden",
                        input: {
                          color: "#fff",
                          outline: "none",
                          border: "none",
                          "&::placeholder": {
                            padding: "1rem",
                            color: "white",
                            opacity: "1",
                          },
                        },
                        fieldset: {
                          border: "none",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        // padding: "20px",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: "fit-content",
                          borderRadius: "30px",
                          padding: 2,
                          paddingBlock: 1,
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Box>
                          {/* <MenuFilter
                            filters={rows}
                            tableUrl={rows}
                            storeSet={rows}
                            chipFilter="Add filter"
                          /> */}
                          menu filter
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      background: "#312f30",
                      width: "100%",
                      border: "1px solid #312f30",
                      borderRadius: "20px",
                      color: "#fff",
                      padding: "20px",
                      fontSize: "22px",
                      mb: "10px",
                    }}
                  >
                    {listData.map((value, index) => (
                      <ListItem
                        secondaryAction={
                          <DeleteIcon
                            sx={{ color: "red", cursor: "pointer" }}
                          />
                        }
                        key={index}
                      >
                        <ListItemText>{value}</ListItemText>
                      </ListItem>
                    ))}
                  </Box>
                  {/* textarea */}
                  <Box sx={{ position: "relative" }}>
                    <TextField
                      multiline
                      rows={4}
                      id="notes"
                      name="notes"
                      type="text"
                      placeholder="notes"
                      variant="outlined"
                      sx={{
                        width: "100%",
                        border: "1px solid #312f30",
                        borderRadius: "20px",
                        bgcolor: "#312f30",
                        overflow: "hidden",
                        input: {
                          color: "#fff",
                          "&::placeholder": {
                            padding: "1rem",
                            color: "white",
                            opacity: "1",
                          },
                        },
                        "& textarea": {
                          borderColor: "#312f30",
                          color: "#fff",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "0",
                        right: "10px",
                        color: "#fff",
                      }}
                      onClick={() => inputImage.current.click()}
                    >
                      <InsertPhotoIcon />
                    </Box>
                    <Box
                      component={"input"}
                      type="file"
                      multiple
                      name="myImage"
                      ref={inputImage}
                      sx={{
                        display: "none",
                      }}
                      onChange={onImgChange}
                    />
                  </Box>
                  {imagesUrl && (
                    <Slider {...settings}>
                      {imagesUrl.map((imageSrc) => (
                        <Box
                          key={imageSrc}
                          mt="10px"
                          sx={{
                            "& img": {
                              width: "200px",
                              height: "200px",
                              objectFit: "cover",
                            },
                          }}
                        >
                          <img src={imageSrc} alt="slide" width="100%" />
                        </Box>
                      ))}
                    </Slider>
                  )}
                </Box>
              </FormTable>
            </DashboardTable>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateProject;