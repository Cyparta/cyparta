import TopNav from "@/components/layout/topNav";
import Navbar from "@/components/layout/navbar";
import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Footer from "@/components/layout/Footer";
import InputControl from "@/components/commons/InputControl";
import MainCategory from "@/components/blogs/mainCategory";
import { MainButton } from "@/style/style";
import MyEditor from "@/components/blogs/myEditor";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import EditorToolbar, { modules, formats } from "@/components/blogs/editorToolbar";

const Post = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <Box>
      <TopNav />
      <Navbar />
      <Container>
        <Box sx={{ mt: "46px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Box>
              <InputControl type="text" placeholder="title" name="title" />
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
                onClick={() => console.log("tss")}
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
              <Typography sx={{ fontWeight: "500", mt: "8px" }}>
                {"Or drop file"}
              </Typography>
            </Box>
            <Box>
              <Typography mb="16px" sx={{fontWeight:"500", fontSize:"18px"}}>Choose your tags</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <MainCategory text="Design" />
                <MainCategory text="Technical consulting" />
              </Box>
            </Box>

            {/* <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
            /> */}
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
