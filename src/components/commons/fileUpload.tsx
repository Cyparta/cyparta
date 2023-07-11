import { Box, Typography } from "@mui/material";
import React, {useState, useRef} from "react";

const FileUpload = () => {
    const [dragging, setDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<any>(null);

    const fileRef = useRef<any>(false);

    const handleReadFile = (e: any) => {
        setSelectedFile(e.target.files[0])
        // formik.setFieldValue('cv', e.target.files[0])
    }

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
      {/* <MainButton>Upload  your cv</MainButton> */}
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
          Upload your cv
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
  );
};

export default FileUpload;
