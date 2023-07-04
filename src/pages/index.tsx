import { Button, Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
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
import ProjectSlick from '@/components/home/projectSlick';
import SocailSection from '@/components/home/socailSection';
import { useDispatch, useSelector } from 'react-redux';
import { RequestGetProjects } from '@/store/projects/projectsSlice';
import { AppDispatch, RootState } from '@/store/store';
import { RequestGetCollection } from '@/store/collections/collectionsSlice';
import { RequestGetAllProducts, RequestGetProducts } from '@/store/products/productsSlice';


import dynamic from "next/dynamic";
// import ProjectSlider from '@/components/home/projectSlider';
// import TestSection from '@/components/home/testSection';


const Index = () => {
  const dispatch = useDispatch<AppDispatch>()
  const lang = useSelector((state :RootState) => state.lang.value.lang)
  useEffect(() => {
    // dispatch(RequestGetAllProducts())
    dispatch(RequestGetProducts())
  }, [])
  return (
    <>
      <div className={lang}>
        <SocailSection />
        <TopNav />
        <Navbar />
        {/* <LandingPage /> */}
        <ServicesSection />
        <Container>
          <AboutSection />
        </Container>
        <MapSection />
        <ProjectSlick />
        <Container>
          <InfoSection />
          <ContactUs />
        </Container>
        <Client />
        <Footer />
      </div>
    </>

  )
}

export default dynamic(() => Promise.resolve(Index), { ssr: false });