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
import TestNav from '@/components/layout/testNav';
const Index = () => {
  return (
    <>
      <TestNav />
      <TopNav />
      <Navbar />
      <Container>
      </Container>
      <LandingPage />
      <Container>
        <InfoSection />
        <AboutSection />
        {/* <ServicesSection /> */}
        <ContactUs />
      </Container>
      <Client />
      <Footer />
    </>

  )
}

export default Index