import dynamic from "next/dynamic";
import React, { useState } from "react";
// import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const MyEditor = () => {
  const [content, setContent] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const handleChange = (value: any) => {
    setContent(value);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleChange} modules={modules} />
    </div>
  );
};

export default MyEditor;
