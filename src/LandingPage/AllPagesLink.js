import React from "react";
import ChooseUs from "./components/ChooseUs";
import ClientLogoArea from "./components/ClientLogoArea";
import FeaturesAreaPage from "./components/FeaturesAreaPage";
import FooterAreaPage from "./components/FooterAreaPage";
import HeaderPage from "./components/HeaderPage";
import HeroPage from "./components/HeroPage";
import ServiceAreaPage from "./components/ServiceAreaPage";
import TestimonialAreaPage from "./components/TestimonialAreaPage";
import VideoAreaPage from "./components/VideoAreaPage";

const AllPagesLink = () => {
  return (
    <div className="App">
      <HeaderPage />
      <HeroPage />
      <VideoAreaPage />
      <ServiceAreaPage />
      <FeaturesAreaPage />
      <ChooseUs />
      <TestimonialAreaPage />
      <ClientLogoArea />
      <FooterAreaPage />
    </div>
  );
};
export default AllPagesLink;
