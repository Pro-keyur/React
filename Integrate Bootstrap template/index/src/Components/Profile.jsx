import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col } from "react-bootstrap";

function Profile() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className="Content" style={{ textAlign: "justify" }}>
              <h2>Hi, Hi,I'm keyur kanpariya</h2>
              <h3>Full stack Developer</h3>
              <p>
                A freelancer Web developer from india. i conver custom <br />
                Web design to bootstrap templates.
                <br />
                <br />i make YouTube Video and Write blogs.
              </p>

              <div className="btn">
                <button style={{ backgroundColor: "skyblue", color: "white" }}>
                  I'm available
                </button>
              </div>
            </div>

            <div class="Footer-icons">
              <a href="https://www.facebook.com/">
                <i class="bi bi-facebook" style={{ color: "black" }}></i>
              </a>
              <a href="https://x.com/i/flow/login">
                <i class="bi bi-twitter" style={{ color: "black" }}></i>
              </a>
              <a href="https://www.instagram.com/">
                <i class="bi bi-instagram" style={{ color: "black" }}></i>
              </a>
              <a href="https://github.com/">
                <i class="bi bi-github" style={{ color: "black" }}></i>
              </a>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div class="image">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="img-fluid"
                height={350}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
