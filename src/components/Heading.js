import { Container } from "react-bootstrap";
import { Parallax } from "react-parallax";
const Heading = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Parallax strength={300} className="heading">
        <Container>
          <div className="text-light text-center">
            <h5
              className="headingtext opacity-75 fw-bold text-light"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-anchor-placement="center-bottom"
            >
              Heading
              <span
                style={{
                  fontSize: "16px",
                  paddingTop: "2.5px",
                  position: "absolute",
                  marginLeft: "5px",
                }}
              >
                |
              </span>
              <span
                className="gt2"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-anchor-placement="center-bottom"
              >
                |
              </span>
            </h5>
            <div
              className="textheading"
              data-aos="flip-up"
              data-aos-duration="1000"
            >
              <h1 className="mb-4">We Provoke What Is Possible</h1>
              <h4>We are passionate about making the best cake products,</h4>
              <h4>
                through innovation and motivation from digital to forward
                thinking,
              </h4>
              <h4>
                a cake brand that wants to push boundaries and push significant
                impact,
              </h4>
              <h4>for buyers.</h4>
            </div>
          </div>
        </Container>
      </Parallax>
    </div>
  );
};

export default Heading;
