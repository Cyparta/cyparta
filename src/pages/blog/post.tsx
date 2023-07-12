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
  
  const [category, setCategory] = useState([1, 2])

  // const cate: categoryProps[] = useSelector(
  //   (state: RootState) => state.blogs.cate
  // );

  const cate = [{name:"test", id:1}, {name:"test", id:2}]

  const dispatch = useDispatch<AppDispatch>();

  const arr = [1, 2, 3, 4];

  // console.log(arr.filter(ele => ele === 5 ? [ele, 10] :  [ele, 10]))

  // for(var i =0; i < arr.length; i++) {
  //   if (arr[i] === 3) {
  //     console.log('yes', i)
  //     arr.splice(arr[i -1], 1)
  //   } else {
  //     arr.push(3)
  //   }
  //   console.log(arr)
  // }

  // const test = category?.map((ele, index, arr) => {
  //   if (ele === 3) {
  //     arr.splice(arr[index-1], 1)
  //   } else {
  //     arr.push(ele)
  //   }
  // })
  // console.log(category)


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
      image: Yup.mixed().required('A photo is required'),
      publisher: Yup.number().required("Please enter a publisher name"),
      category: Yup.string().required("Please enter a category"),
      text: Yup.string(),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const { title, image, publisher, category, text } = values;
      const formData:any = new FormData();
      formData.append('photo', image);
      formData.append('category', [{name:"backend", id:"1"}]);
      formData.append('text', text);
      formData.append('title', title);
      formData.append('publisher', 8);
      const res = await axios.post(
        `${BASEURL}apis/blogs/`,
        formData,
        {
          headers: {
            Authorization: `Token b4375de1ff6454c97275ddb98e5eaba4cd413787`,
          },
        }
      );

      console.log(res);

      setSubmitting(true);

      setSubmitting(false);
      // if (formik.isSubmitting) {
      //   toast.success("your cv sent successfully");
      // }
      setSelectedFile("");
      resetForm();
    },
  });

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

  useEffect(() => {
    dispatch(RequestGetBlogsCate());
  }, []);
  return (
    <Box>
      <TopNav />
      <Navbar />
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
                  {cate?.map((item) => {
                    return (
                      <Box
                        onClick={() =>
                          {
                            formik.setFieldValue("category", item.name)
                          }
                        }
                        key={item.id}
                      >
                        <MainCategory
                          text={item.name}
                          active={item.name == formik.values.category}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </Box>

              <MyEditor handleEditor={handleEditor} />

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
      <Footer />
    </Box>
  );
};

export default Post;
