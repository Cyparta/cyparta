import TopNav from "@/components/layout/topNav";
import Navbar from "@/components/layout/navbar";
import { Box, Container, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
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

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import EditorToolbar, { modules, formats } from "@/components/blogs/editorToolbar";

const Post = () => {
  const [value, setValue] = useState("");
  console.log(value);

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
      image: "",
      publisher: "8",
      category: "1",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Please enter name"),
      image: Yup.string(),
      publisher: Yup.number().required("Please enter a publisher name"),
      category: Yup.string().required("Please enter a category"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const { title } = values;

      const formData = { title, cv: selectedFile };

      setSubmitting(true);
      try {
        const response = await axios.post(`${BASEURL}apis/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.error(error);
      }

      setSubmitting(false);
      console.log(formik.isSubmitting);
      if (formik.isSubmitting) {
        toast.success("your cv sent successfully");
      }
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
  return (
    <Box>
      <TopNav />
      <Navbar />
      <Container>
        <Box sx={{ mt: "46px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Box>
              <InputControl
                type="text"
                placeholder="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </Box>

            <Box
              sx={{
                border: "2px solid rgba(225, 230, 239, 1)",
                textAlign: "center",
                padding: "43px",
                borderRadius: "10px",
              }}
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
            </Box>
            <Box>
              <Typography
                mb="16px"
                sx={{ fontWeight: "500", fontSize: "18px" }}
              >
                Choose your tags
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <MainCategory text="Design" />
                <MainCategory text="Technical consulting" />
              </Box>
            </Box>

            <MyEditor />

            <Box sx={{ textAlign: "center" }}>
              <MainButton>Publish</MainButton>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Post;
