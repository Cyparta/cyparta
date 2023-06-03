import { Button, Box, Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from '@/components/layout/navbar';
import LandingPage from '@/components/home/landingPage';
import InfoSection from '@/components/home/infoSection';
import AboutSection from '@/components/home/aboutSection';
import ServicesSection from '@/components/home/servicesSection';
import ContactUs from '@/components/home/contactUs';
import Client from '@/components/home/client';
import Footer from '@/components/layout/Footer';
import TopNav from '@/components/layout/topNav';
// import ProjectSection from '@/components/home/projectSection';
import MapSection from '@/components/home/mapSection';
import InfoTest from '@/components/home/InfoTest';
import ProjectSlick from '@/components/home/projectSlick';
// import ProjectSlider from '@/components/home/projectSlider';
// import TestSection from '@/components/home/testSection';


const Index = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <LandingPage />
      <Container>
        {/* <Info /> */}
        {/* <InfoTest /> */}
        <InfoSection />
        <AboutSection />
      </Container>
        <ServicesSection />
      <MapSection />
      {/* <ProjectSection /> */}
      {/* <ProjectSlider /> */}
      {/* <TestSection /> */}
      <ProjectSlick />
      <Container>
        <ContactUs />
      </Container>
      <Client />
      <Footer />
    </>

  )
}

export default Index