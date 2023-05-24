import TopNav from '@/components/layout/topNav';
import Navbar from '@/components/layout/navbar';
import { Container, Box, Typography, Grid } from '@mui/material';
import coverImage from '../../assets/projects/cover.png'
import project1 from '../../assets/projects/project-1.png'
import project2 from '../../assets/projects/project-2.png'
import project3 from '../../assets/projects/project-3.png'
import project4 from '../../assets/projects/project-4.png'
import project5 from '../../assets/projects/project-5.png'
import project6 from '../../assets/projects/project-6.png'
import project7 from '../../assets/projects/project-7.png'
import project8 from '../../assets/projects/project-8.png'
import project9 from '../../assets/projects/project-9.png'

import Image from 'next/image';
import Footer from '@/components/layout/Footer';
const Index = () => {
    return (
        <div>
            <TopNav />
            <Navbar />
            <Box sx={{ position: "relative" }}>
                <Image src={coverImage} alt="cover" width={500} height={375} style={{ width: "100%" }} />
                <Box sx={{ position: "absolute", top: "60%", width: "100%", transform: "translateY(-50%)" }}>
                    <Container>
                        <Typography sx={{ color: "rgba(255, 255, 255, 1)", fontSize: "48px", fontWeight: "700" }}>Projects</Typography>
                        <Typography sx={{ fontSize: "24px", color: "rgba(255, 255, 255, 1)", width: "502px", margin: "0 auto", display: "inline-block", fontWeight: "400" }}>thinking you make a better decision more than choosing us !!</Typography>
                    </Container>
                </Box>
            </Box>

            <Container>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginTop: "34px", marginBottom: "24px" }}>
                        <li style={{ fontSize: "16px", fontWeight: "500", cursor: "pointer" }}>All / </li>
                        <li style={{ fontSize: "16px", fontWeight: "500", color: "rgba(164, 164, 164, 1)", cursor: "pointer" }}>Applications /</li>
                        <li style={{ fontSize: "16px", fontWeight: "500", color: "rgba(164, 164, 164, 1)", cursor: "pointer" }}>Websites</li>
                    </ul>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Box>
                        <Typography sx={{color:"rgba(33, 33, 33, 1)", fontSize:"12px", fontWeight:"500"}}>Sort by</Typography>
                        <select name="cars" id="cars" style={{ border: "none", outline: "none" }} className="select">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </Box>
                </Box>
                <Grid container spacing={2} sx={{ mt: "24px" }}>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Image src={project1} width='500' height={282} style={{ width: "100%", borderRadius: "10px", height: "100%" }} alt="project Name" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Image src={project2} width='500' height={282} style={{ width: "100%", borderRadius: "10px", height: "100%" }} alt="project Name" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Image src={project3} width='500' height={282} style={{ width: "100%", borderRadius: "10px", height: "100%" }} alt="project Name" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Image src={project4} width='500' height={282} style={{ width: "100%", borderRadius: "10px", height: "100%" }} alt="project Name" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Image src={project5} width='500' height={282} style={{ width: "100%", borderRadius: "10px", height: "100%" }} alt="project Name" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Image src={project6} width='500' height={282} style={{ width: "100%", borderRadius: "10px", height: "100%" }} alt="project Name" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Image src={project7} width='500' height={282} style={{ width: "100%", borderRadius: "10px", height: "100%" }} alt="project Name" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Image src={project8} width='500' height={282} style={{ width: "100%", borderRadius: "10px", height: "100%" }} alt="project Name" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Image src={project9} width='500' height={282} style={{ width: "100%", borderRadius: "10px" }} alt="project Name" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>


            <Footer />
        </div>
    )
}

export default Index