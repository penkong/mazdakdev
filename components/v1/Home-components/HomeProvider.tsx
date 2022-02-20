// ------------------------------------------

import React from "react";
import { PartnersProvider } from "./7-Partners-section/PartnersProvider";

// ------------------------------------------

import {
  HomeSectionProvider,
  AboutProvider,
  SpecializationProvider,
  ProjectsProvider,
  ExprienceProvider,
  TestimonialsProvider,
  NewsProvider,
  ContactProvider,
} from "./";

// ------------------------------------------

const _HomeProvider = () => {
  return (
    <>
      <div className="wrapper">
        <HomeSectionProvider />

        <div className="content">
          <div className="lines">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4"></div>
                <div className="col-md-6 hidden-sm col-lg-4"></div>
                <div className="col-md-6 col-lg-4 hidden-md"></div>
              </div>
            </div>
          </div>
          <AboutProvider />
          <SpecializationProvider />
          <ProjectsProvider />
          <ExprienceProvider />
          <ContactProvider />
        </div>
      </div>
    </>
  );
};

// <PartnersProvider />
// <NewsProvider />
// <TestimonialsProvider />
export const HomeProvider = _HomeProvider;
