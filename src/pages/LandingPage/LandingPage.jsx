// import { useEffect, useState } from "react";
import { ButtonType, CallToAction, CardImage, CardProduct, Hero, NavbarBrand, Title } from "../../components"
// import axiosClient from "../../services/auth.service";
import { CardTestimonial } from "./components"
import SectionPlanes from "./components/SectionPlanes"
import SectionProducts from "./components/SectionProducts"
import SectionServicios from "./components/SectionServices"
import SectionTestimonials from "./components/SectionTestimonials"
// import CardPlan from "./components/CardPlans";

export const LandingPage = () => {
  
  return (
    <>
      <NavbarBrand />
      <Hero />
      <SectionPlanes ButtonType={ButtonType} Title={Title} />
      <SectionServicios />
      <SectionTestimonials />
      <CallToAction />
      <SectionProducts />
      
    </>
  )
}