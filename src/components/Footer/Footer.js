/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Col, Row } from "reactstrap";

function Footer() {
  return (
    <footer className="footer px-0">
      <Container>
        <Row className="mx-0">
          <Col xs={12}>
            <h4>E-HIGH Developers.</h4>
            <p>
              David Asenso-Boadi
              <br />
              <a href="mailto:asensoboadi814@gmail.com">asensoboadi814@gmail.com</a>
            </p>

            <p>
              Maxwell Adorsoo
              <br />
              <a href="mailto:adorsoomaxwell186@gmail.com">adorsoomaxwell186@gmail.com</a>
            </p>

            <p>
              Michael Osei
              <br />
              <a href="mailto:knanamichael25@gmail.com">knanamichael25@gmail.com</a>
            </p>
            <p>
              David Asalye
              <br />
              <a href="mailto:perrilconics5@gmail.com">perrilconics5@gmail.com</a>
            </p>
            <p>
              Linda Ama Paha
              <br />
              <a href="mailto:pahaamalinda@gmail.com">pahaamalinda@gmail.com</a>
            </p>
            <p>
              John Akanlegum
              <br />
              <a href="mailto:akanlegumjohn2@gmail.com">akanlegumjohn2@gmail.com</a>
            </p>
            <p>
              Adwobiah Amissah
              <br />
              <a href="mailto:amissahadwobiah2002@gmail.com">amissahadwobiah2002@gmail.com</a>
            </p>
            <p>
              Michael Viewu Bambino
              <br />
              <a href="mailto:viewumichael@gmail.com">viewumichael@gmail.com</a>
            </p>
            <p>
              Ansah Foster
              <br />
              <a href="mailto:kweku4sta@gmail.com">kweku4sta@gmail.com</a>
            </p>
          </Col>
          <Col xs={12}>
            <h4>Nav Links</h4>
            <ul className="footer__links px-0">
              <li><a href="LEADERboad.html">Leaderboard</a></li>
              <li><a href="Notification.html">Notification </a></li>
              <li><a href="Messages.html">Messages</a></li>
            </ul>
          </Col>
          <Col xs={12}>
            <div className="social__mediaHandles">
              <h4>Social Media Handles</h4>
              <p className="medias">
                <a href="####"> <img className="media__icons" src="./Images/instagram-logo.png" alt="" />Instagram </a>
                <br />
                <a href="###"> <img className="media__icons" src="./Images/face.jpg" alt="" />Facebook</a>
                <br />
                <a href="####"> <img className="media__icons" src="./Images/Twiter-logo.png" alt="" />Twitter</a>
                <br />
                <a href="####"> <img className="media__icons" src="./Images/whatsapp-logo.png" alt="" />whatsapp</a>
                <br />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
