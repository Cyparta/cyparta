import TopNav from "@/components/layout/topNav";
import Navbar from "@/components/layout/navbar";
import { Box, Container, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import InputControl from "@/components/commons/InputControl";
import MainCategory from "@/components/blogs/mainCategory";
import { MainButton } from "@/style/style";
import MyEditor from "@/components/blogs/myEditor";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { BASEURL } from "@/data/APIS";
import axios from "axios";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { RequestGetCollection } from "@/store/collections/collectionsSlice";
import { RequestGetBlogsCate } from "@/store/blogs/blogsSlice";
import { categoryProps } from "@/types/blog";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import EditorToolbar, { modules, formats } from "@/components/blogs/editorToolbar";

const Post = () => {
  const [value, setValue] = useState("");
  
  const formData: any = new FormData();
  
  const cate: categoryProps[] = useSelector(
    (state: RootState) => state.blogs.cate
  );
  const user: categoryProps[] = useSelector(
    (state: RootState) => state.user.user
  );
  const lang = useSelector(
    (state: RootState) => state.lang.value.lang
  );

  const [category, setCatgory] = useState<any>([]);

  // const cate = [{name:"test", id:1}, {name:"test", id:2}]

  const dispatch = useDispatch<AppDispatch>();

  /* for upload photo */
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const fileRef = useRef<any>(false);

  const handleReadFile = (e: any) => {
    setSelectedFile(e.target.files[0]);
    formik.setFieldValue("image", e.target.files[0]);
  };


  const formik = useFormik({
    initialValues: {
      title: "",
      image: null,
      publisher: "8",
      category: "1",
      text: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Please enter name"),
      image: Yup.mixed().required("A photo is required"),
      publisher: Yup.number().required("Please enter a publisher name"),
      category: Yup.string().required("Please enter a category"),
      text: Yup.string(),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const { title, image, publisher, category, text } = values;
      formData.append("photo", image);
      formData.append("category", [{ name: "backend", id: "1" }]); // need to fix
      formData.append("text", text);
      formData.append("title", title);
      formData.append("publisher", 8);
      const res = await axios.post(`${BASEURL}apis/blogs/`, ...[formData], {
        headers: {
          Authorization: `Token ${user}`,
        },
      });

      console.log(res);

      setSubmitting(true);

      setSubmitting(false);
      setSelectedFile("");
      resetForm();
    },
  });

  useEffect(() => {
    for (let i = 0; category.length > i; i++) {
      formData.append(`category_id[${i}]`, category[i]);
    }
  }, [formData]);
  console.log(category);

  // for Drag and Drop PDF
  const handleDragEnter = (event: any) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: any) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleEditor = (value: any) => {
    formik.setFieldValue("text", value);
  };

  console.log(category.find((item: any) => item === 1));
  useEffect(() => {
    dispatch(RequestGetBlogsCate());
  }, []);
  return (
    <Box>
      <Box className={lang}>
        <TopNav />
        <Navbar />
      </Box>
      <Container sx={{ position: "relative" }}>
        <Box sx={{ mt: "46px" }}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <Box>
                <InputControl
                  type="text"
                  placeholder="title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
                {formik.touched.title && formik.errors.title ? (
                  <Typography
                    component="span"
                    sx={{
                      color: "red",
                      mt: "",
                      fontSize: "14px",
                      padding: "0px 10px",
                    }}
                  >
                    {formik.errors.title}
                  </Typography>
                ) : null}
              </Box>

              {selectedFile && (
                <img
                  src={window.URL.createObjectURL(selectedFile)}
                  alt="test"
                />
              )}

              <Box
                sx={{
                  border: "2px solid rgba(225, 230, 239, 1)",
                  textAlign: "center",
                  padding: "43px",
                  borderRadius: "10px",
                }}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "32px",
                    mt: "22px",
                    flexWrap: "wrap",
                    cursor: "pointer",
                  }}
                  onClick={() => fileRef.current.click()}
                >
                  <Box
                    key={1}
                    sx={{
                      background: "rgba(37, 35, 36, 1)",
                      padding: "15px 15px",
                      border: "1px solid rgba(236, 35, 43, 1)",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                  >
                    Add your blog cover
                    <input type="file" style={{ display: "none" }} />
                  </Box>
                </Box>
                <input
                  type="file"
                  ref={fileRef}
                  style={{ display: "none" }}
                  onChange={handleReadFile}
                />
                <Typography sx={{ fontWeight: "500", mt: "8px" }}>
                  {selectedFile !== null ? selectedFile?.name : "Or drop file"}
                </Typography>
                {formik.touched.image && formik.errors.image ? (
                  <Typography
                    component="span"
                    sx={{
                      color: "red",
                      mt: "",
                      fontSize: "14px",
                      padding: "0px 10px",
                    }}
                  >
                    {formik.errors.image}
                  </Typography>
                ) : null}
              </Box>
              <Box>
                <Typography
                  mb="16px"
                  sx={{ fontWeight: "500", fontSize: "18px" }}
                >
                  Choose your tags
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {cate?.map((item, index) => {
                    return (
                      <Box
                        onClick={() => {
                          if (
                            category.filter((cat: any) => cat === item.id)
                              .length > 0
                          ) {
                            setCatgory(
                              category.filter((cat: any) => cat !== item.id)
                            );
                          } else {
                            setCatgory([...category, item.id]);
                          }
                        }}
                        key={item.id}
                      >
                        <Box
                          sx={{
                            color:
                              category.filter((cat: any) => cat === item.id)
                                .length > 0
                                ? "#EC232B"
                                : "rgba(157, 157, 157, 1)",
                            border:
                              category.filter((cat: any) => cat === item.id)
                                .length > 0
                                ? "1px solid #EC232B"
                                : "1px solid rgba(157, 157, 157, 1)",
                            display: "inline-block",
                            padding: "8px 16px",
                            borderRadius: "20px",
                          }}
                        >
                          {item.name}
                        </Box>
                      </Box>
                    );
                  })}
                  {/* <Box onClick={() => setCategory0(1)}>
                    <MainCategory text="Design"/>
                  </Box>
                  <Box onClick={() => setCategory1(2)}>
                    <MainCategory text="Mobile Development"/>
                  </Box>
                  <Box onClick={() => setCategory2(3)}>
                    <MainCategory text="Web Development" />
                  </Box>
                  <Box onClick={() => setCategory3(4)}>
                    <MainCategory text="Technical Consulting" />
                  </Box>
                  <Box onClick={() => setCategory4(5)}>
                    <MainCategory text="Software Management System" />
                  </Box> */}
                </Box>
              </Box>

              <Box
                sx={{
                  height: "300px",
                  overflow: "auto",
                  border: "1px solid lightgray",
                }}
              >
                <MyEditor handleEditor={handleEditor} />
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <MainButton type="submit">Publish</MainButton>
              </Box>
            </Box>
          </form>
        </Box>
        {/* <Box
          sx={{
            position: "absolute",
            top: "0",
            left:"0",
            width: "100%",
            height: "100%",
            background: "#fff",
            zIndex:"90000"
          }}
        >
          test
        </Box> */}
      </Container>
      <Box className={lang}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Post;
