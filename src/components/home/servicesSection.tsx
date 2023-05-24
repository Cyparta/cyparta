
import { Box } from "@mui/material"
import services from '../../assets/home/services.png'
import Image from "next/image"
const ServicesSection = () => {
    return (
        <Box sx={{ position: "relative" }}>
            <Box className="services-img "></Box>
            <Box sx={{ position: "absolute", width: "100%", top: "-20px", height: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center", height: "100%", alignItems: "end" }}>
                    <Box sx={{ flex: "1", fontSize:"28px", }} className="box-1">
                        Web development
                    </Box>
                    <Box sx={{ flex: "1", fontSize:"28px", }} className="box-2">
                        App development
                    </Box>
                    <Box sx={{ flex: "1", fontSize:"28px", }} className="box-3">
                        CRM systems
                    </Box>
                    <Box sx={{ flex: "1", fontSize:"28px", }} className="box-4">
                        Social Media Management
                    </Box>
                    <Box sx={{ flex: "1", fontSize:"28px", }} className="box-5">
                        Penetration Testing
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ServicesSection