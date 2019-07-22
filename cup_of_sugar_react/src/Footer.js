import React from "react";
import {  MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css';

const FooterPage = () => {
  return (
    <MDBFooter className="footer">
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <p className="container justify-content-end">&copy; {new Date().getFullYear()} A Cup of Sugar is Capstone Project for Ada Developers Academy C11 Copyright:  Maria Wissler </p>
          </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;