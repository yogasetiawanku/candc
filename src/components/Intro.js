import { Container } from "react-bootstrap";
const Intro = () => {
  return (
    <div data-aos="fade-up">
      <div className="BgLanding">
        <Container>
          <h6
            className="introduction opacity-75 fw-bold text-light"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-anchor-placement="center-bottom"
          >
            Introduction
            <span
              className="gti"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-anchor-placement="center-bottom"
            >
              /
            </span>
          </h6>
          <h1
            className="textintro opacity-75 text-light"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Cake Is A Taste
            <h1 style={{ fontSize: "50px" }}> Brands — Years ahead.</h1>
          </h1>
          <h4
            className="textintroduc opacity-75 text-light"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            We are a world class pastry team---
            <h4>leading professionals, who constantly push</h4> new technology
            to its limits.
          </h4>
          <div style={{ marginLeft: "100px" }}>
            <img
              src="https://3.bp.blogspot.com/-oJizhAxwbuw/WEYuH_WScuI/AAAAAAAALUQ/rAaIbfekTmoM2hK5vMnnKfYbn5ChKc6FgCLcB/s1600/Gambar%2BAnimasi%2BKembang%2BApi%2BBergerak%2BFireworks%2BAnimation%2BGif.gif"
              className="img-fluid gift opacity-25"
              data-aos="zoom-in"
              alt="..."
            />
            <img
              src="https://3.bp.blogspot.com/-oJizhAxwbuw/WEYuH_WScuI/AAAAAAAALUQ/rAaIbfekTmoM2hK5vMnnKfYbn5ChKc6FgCLcB/s1600/Gambar%2BAnimasi%2BKembang%2BApi%2BBergerak%2BFireworks%2BAnimation%2BGif.gif"
              className="img-fluid gift2 opacity-25"
              data-aos="zoom-in"
              alt="..."
            />
            <img
              src="https://3.bp.blogspot.com/-oJizhAxwbuw/WEYuH_WScuI/AAAAAAAALUQ/rAaIbfekTmoM2hK5vMnnKfYbn5ChKc6FgCLcB/s1600/Gambar%2BAnimasi%2BKembang%2BApi%2BBergerak%2BFireworks%2BAnimation%2BGif.gif"
              className="img-fluid gift3 opacity-25"
              data-aos="zoom-in"
              alt="..."
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Intro;
