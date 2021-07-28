import React from "react";

import HeaderSection from "./Header/HeaderSection";
import ContactComponent from "./ConatactPage/ContactComponent";
import HomePage from "./HomePage/HomePage";
import GetInvolved from "./GetInvolvedPage/GetInvolved";
import DonationPage from "./DonationPage/DonationPage";
import DonorPage from "./DonorDetailPage/DonorDetailsPage";

import { Route, BrowserRouter, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      
      <BrowserRouter>
          <HeaderSection />
          <div>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/contact" component={ContactComponent} />
              <Route exact path="/getinvolved" component={GetInvolved} />
              <Route exact path="/donation" component={DonationPage} />
              <Route exact path="/donor" component={DonorPage} />
          </div>
      </BrowserRouter>
             
    </div>
  )
}
