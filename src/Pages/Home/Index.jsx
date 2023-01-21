import React from "react";
import { Slider } from "./Slider";
import { Categories } from "./Categories";
import { New } from "./New";
import { Story } from "./Story";
import { Footer } from "./Footer";
import  "./Scroll";
import style from "./mainstyle.css";


const Index = () => {
  return (
    <>
      <Slider />
      <Categories />
      <New />
      <Story />
      <New />
      <Footer />
    </>
  );
};

export default Index;
