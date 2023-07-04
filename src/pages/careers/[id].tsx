import { useRef, useState } from "react";
import HeroPage from "@/components/commons/heroPage";
import TopNav from "@/components/layout/topNav";
import Navbar from "@/components/layout/navbar";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import coverImage from "../../assets/cover/careers-cover.png";
import Image from "next/image";
import bagIcon from "../../assets/icons/bag-icon.png";
import fullTimeIcon from "../../assets/icons/baag-icon.png";
import siteIcon from "../../assets/icons/lap-icon.png";
import locationIcon from "../../assets/icons/location-icon.png";
import arrowIconsCareers from "../../assets/icons/arrow-icon-careers.png";
import uploadIcon from "../../assets/icons/upload-icon.png";
// import MainButton from '@/components/commons/MainButton'
import { MainButton } from "@/style/style";

import Footer from "@/components/layout/Footer";
import InputControl from "@/components/commons/InputControl";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { RequestGetCareer } from "@/store/careers/careersSlice";
import { useRouter } from "next/router";
import { BASEURL } from "@/data/APIS";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomSelect from "@/components/commons/customSelect";
import axios from "axios";
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
} from 'react-share';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { toast } from "react-toastify";


interface CareerState {
    work_from?: string;
    jop_type?: string;
    category?: string;
    id?: number;
    jop_description?: string;
    location?: string;
    posted_at?: null;
}
const CareerDetails = () => {
    const imageLink = 'https://example.com/image.jpg';
    const [isShare, setIsShare] = useState(false);
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [dragging, setDragging] = useState(false);

    const lang = useSelector((state: RootState) => state.lang.value.lang);
    const contactUs = useSelector((state: RootState) => state.lang.value.contactUs)
    const career: CareerState = useSelector(
        (state: RootState) => state.careers.career
    );

    const dispatch = useDispatch<AppDispatch>();

    const router = useRouter();
    const { id: careerID } = router.query

    const fileRef = useRef<any>(false);
    const shareRef = useRef<HTMLDivElement>(null)
    
    // To READ PDF 
    const handleReadFile = (e: any) => {
        setSelectedFile(e.target.files[0])
        formik.setFieldValue('cv', e.target.files[0])
    }

    // options for YEARS Exp Menu
    const options = [
        "1 year Experience",
        "2 years Experience",
        "3 years Experience",
        "4 years Experience",
    ];

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

    // when click outside close menu 
    const handleOutsideClick = (event: MouseEvent) => {
        console.log(shareRef.current, event)
        if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
            setIsShare(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // Vaildtion
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            development: "1 years",
            phone_number: "",
            summary: "",
            cv: null
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Please enter name"),
            development: Yup.string(),
            phone_number: Yup.number().required("Please enter a phone number"),
            summary: Yup.string().required("Please enter a summary"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Please enter a vaild email"),
            cv: Yup.mixed()
                .required('A PDF file is required')
        }),
        onSubmit: (values, { resetForm }) => {
            const { name, email, development, phone_number, summary, cv } = values;
            console.log(values)
            console.log(cv)

            const formData = { name, email, development, phone_number, summary, cv: selectedFile }

            try {
                const response = axios.post(`${BASEURL}apis/careers/${careerID}/cvs/`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } catch (error) {
                console.error(error);
            }

            // setSubmitting(false);
            setSelectedFile("")
            resetForm()
        },
    });

    useEffect(() => {
        // fetchData()
        dispatch(RequestGetCareer(router.query.id));
    }, [router.query.id]);

    return (
        <Box className={lang}>
            <TopNav />
            <Navbar />
            <HeroPage
                text="thinking you make a better decision more than choosing us !!"
                heading={career.category}
                imageCover={coverImage}
            />
            <Container>
                {/* top section  */}
                <Box
                    sx={{
                        background: "#FCFBFC",
                        borderRadius: "16px",
                        padding: "24px",
                        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
                        mb: "24px",
                        mt: "24px",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    mb: "8px",
                                }}
                            >
                                <Image src={fullTimeIcon} alt="bag" width={15} height={15} />
                                <p style={{ fontSize: "14px", color: "#727071" }}>
                                    {career.jop_type === "F" ? "Full time" : "Part time"}
                                </p>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    mb: "8px",
                                }}
                            >
                                <Image src={bagIcon} alt="bag" width={15} height={15} />
                                <p style={{ fontSize: "14px", color: "#727071" }}>
                                    {career?.work_from === "S" ? "on Site" : career?.work_from === "R" ? "Remotly" : "Hyprid"}
                                </p>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    mb: "8px",
                                }}
                            >
                                <Image src={siteIcon} alt="bag" width={15} height={15} />
                                <p style={{ fontSize: "14px", color: "#727071" }}>
                                    Posted {career.posted_at !== null ? career.posted_at : "1 month ago"}
                                </p>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    mb: "8px",
                                }}
                            >
                                <Image src={locationIcon} alt="bag" width={15} height={15} />
                                <p style={{ fontSize: "14px", color: "#727071" }}>
                                    {career.location}
                                </p>
                            </Box>
                            {/* <Box
                                sx={{
                                    width: "100%",
                                    background: "rgba(223, 223, 223, 1)",
                                    height: "1px",
                                    mt: "32px",
                                    mb: "24px",
                                }}
                            ></Box> */}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                gap: "10px",
                            }}
                            ref={shareRef}
                        >
                            <Box sx={{ display: "flex", gap: "13px", justifyContent: "end", position: "relative" }} >
                                {/* <MainButton>Apply now</MainButton> */}
                                <Box sx={{}} onClick={() => setIsShare((old) => !old)}>
                                    <Box
                                        sx={{
                                            border: "1px solid rgba(236, 35, 43, 1)",
                                            padding: "10px 15px",
                                            cursor: "pointer",
                                            borderRadius: "15px",
                                        }}
                                    >
                                        <Image
                                            src={uploadIcon}
                                            alt="upload"
                                            width="24"
                                            height="24"
                                        />
                                    </Box>
                                </Box>
                                {isShare && <Box sx={{ position: 'absolute', background: "#fff", width: "auto", bottom: "-75px", padding: "15px", boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.16)", borderRadius: "6px" }} >
                                    <Box sx={{ display: "flex", gap: "20px" }}>
                                        <FacebookShareButton url={imageLink} onClick={() => setIsShare((old) => !old)}>
                                            <FacebookOutlinedIcon sx={{ color: "rgba(59, 89, 152, 1)" }} />
                                        </FacebookShareButton>
                                        <TwitterShareButton url={imageLink} onClick={() => setIsShare((old) => !old)}>
                                            <TwitterIcon sx={{ color: "rgba(29, 161, 242, 1)" }} />
                                        </TwitterShareButton>

                                        {/* <LinkedinShareButton url={imageLink}>
                                            <LinkedInIcon />
                                        </LinkedinShareButton> */}

                                        <WhatsappShareButton url={imageLink} onClick={() => setIsShare((old) => !old)}>
                                            <WhatsAppIcon sx={{ color: "rgba(37, 211, 102, 1)" }} />
                                        </WhatsappShareButton>

                                        <ContentCopyIcon sx={{ cursor: "pointer" }} onClick={() => {
                                            navigator.clipboard.writeText(imageLink)
                                            toast.success("link copied")
                                            setIsShare((old) => !old)
                                        }} />
                                    </Box>

                                </Box>}

                            </Box>
                            <Typography sx={{ color: "rgba(114, 112, 113, 1)" }}>
                                122 Applied
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                {/* seconad section  */}
                <Box
                    sx={{
                        background: "#FCFBFC",
                        borderRadius: "16px",
                        padding: "24px",
                        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
                        mb: "24px",
                    }}
                >
                    <Typography sx={{ fontSize: "16px", mb: "16px", color: "#252324" }}>
                        Job Description
                    </Typography>
                    <Typography sx={{ color: "rgba(114, 112, 113, 1)" }}>
                        {career.jop_description}
                    </Typography>
                    {/* <ul style={{ padding: "12px 30px", color: "rgba(114, 112, 113, 1)" }}>
                        <li>
                            Designing and building web applications using Laravel.
                        </li>
                        <li>
                            Troubleshooting issues in the implementation and debug builds.
                        </li>
                        <li>
                            Working with front-end and back-end developers on projects.
                        </li>
                        <li>
                            Testing functionality for users and the backend.
                        </li>
                        <li>
                            Ensuring that integrations run smoothly.
                        </li>
                        <li>
                            Scaling projects based on client feedback.
                        </li>
                        <li>
                            Maintaining web-based applications.
                        </li>
                        <li>
                            Presenting work in meetings with clients and management.
                        </li>
                    </ul> */}
                </Box>
                {/* Third section */}
                <Box mb="24px">
                    <Box
                        sx={{
                            background: "rgba(252, 251, 252, 1)",
                            borderRadius: "20px",
                            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
                            padding: "24px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "rgba(37, 35, 36, 1)",
                                mb: "12px",
                                fontWeight: "500",
                            }}
                        >
                            Get In Touch With Ussss
                        </Typography>
                        <form onSubmit={formik.handleSubmit}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <Box
                                    sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: "20px",
                                            flexWrap: { xs: "wrap", sm: "nowrap" },
                                        }}
                                    >
                                        <Box sx={{ width: "100%" }}>
                                            <InputControl
                                                type="text"
                                                name="name"
                                                placeholder={contactUs.name[lang]}
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                            />

                                            {formik.touched.name && formik.errors.name ? (
                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        color: "red",
                                                        mt: "",
                                                        fontSize: "14px",
                                                        padding: "0px 10px",
                                                    }}
                                                >
                                                    {formik.errors.name}
                                                </Typography>
                                            ) : null}
                                        </Box>
                                        <Box sx={{ width: "100%" }}>
                                            <InputControl
                                                type="text"
                                                name="email"
                                                placeholder={contactUs.email[lang]}
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        color: "red",
                                                        mt: "",
                                                        fontSize: "14px",
                                                        padding: "0px 10px",
                                                    }}
                                                >
                                                    {formik.errors.email}
                                                </Typography>
                                            ) : null}
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: "20px",
                                            flexWrap: { xs: "wrap", sm: "nowrap" },
                                        }}
                                    >
                                        <Box sx={{ width: "100%" }}>
                                            <CustomSelect
                                                options={options}
                                                defaultValue="1 year Experience"
                                                handleSelect={(option: string) => {
                                                    formik.setFieldValue("development", option)
                                                }}
                                            />
                                        </Box>

                                        <Box sx={{ width: "100%" }}>
                                            <InputControl
                                                type="number"
                                                name="phone_number"
                                                placeholder={contactUs.phone[lang]}
                                                value={formik.values.phone_number}
                                                onChange={formik.handleChange}
                                                className="no-arrows"
                                            />
                                            {formik.touched.phone_number && formik.errors.phone_number ? (
                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        color: "red",
                                                        mt: "",
                                                        fontSize: "14px",
                                                        padding: "0px 10px",
                                                    }}
                                                >
                                                    {formik.errors.phone_number}
                                                </Typography>
                                            ) : null}
                                        </Box>
                                    </Box>
                                    <Box>
                                        <textarea
                                            style={{
                                                width: "100%",
                                                height: "65px",
                                                border: "1px solid #E1E6EF",
                                                outline: "none",
                                                borderRadius: "10px",
                                                padding: "15px",
                                            }}
                                            placeholder="summary about you"
                                            name='summary'
                                            value={formik.values.summary}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        ></textarea>
                                        {formik.touched.summary && formik.errors.summary ? (
                                            <Typography
                                                component="span"
                                                sx={{
                                                    color: "red",
                                                    mt: "",
                                                    fontSize: "14px",
                                                    padding: "0px 10px",
                                                }}
                                            >
                                                {formik.errors.summary}
                                            </Typography>
                                        ) : null}
                                    </Box>
                                </Box>
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
                                    <input type="file" ref={fileRef} style={{ display: "none" }} onChange={handleReadFile} />
                                    <Typography sx={{ fontWeight: "500", mt: "8px" }}>
                                        {selectedFile !== null ? selectedFile?.name : "Or drop file"}
                                    </Typography>

                                    {formik.touched.cv && formik.errors.cv ? (
                                        <Typography
                                            component="span"
                                            sx={{
                                                color: "red",
                                                mt: "",
                                                fontSize: "14px",
                                                padding: "0px 10px",
                                            }}
                                        >
                                            {formik.errors.cv}
                                        </Typography>
                                    ) : null}
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <MainButton type="submit">Apply</MainButton>
                                </Box>
                            </Box>
                        </form>

                    </Box>


                </Box>
            </Container>
            <Footer />
        </Box>
    );
};

export default CareerDetails;
