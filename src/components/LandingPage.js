import { Container } from "react-bootstrap";
import { useRef } from "react";
const LandingPage = () => {
  const Scrollref = useRef(null);
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="BgLanding2">
        <Container>
          <div className="paralax">
            <h5 className="intro opacity-75">
              <span className="gt"></span>
            </h5>
            <h5 className="animate__animated animate__fadeInUp animate_delay-20s introo opacity-50">
              <span className="gt">/</span> cake and coockie /
            </h5>
            <div>
              <h1
                className="heading1 fw-bold opacity-75"
                data-aos={"fade-up"}
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                Cake For One Staile ToMore
                <h1 data-aos={"fade-up"} style={{ marginLeft: "100px" }}>
                  And WIth Me And You.
                </h1>
              </h1>
            </div>
            <button
              onClick={() => goto(Scrollref.current)}
              className="text-dark btnstarted animate__animated animate__backInUp animate_delay-20s"
            >
              <span className="opacity-50 fw-bold">Started Now</span>
            </button>
          </div>
        </Container>
      </div>
      <div ref={Scrollref}></div>
    </div>
  );
};

export default LandingPage;
