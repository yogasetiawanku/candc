import { Container } from "react-bootstrap";
import { Parallax } from "react-parallax";
const Header = () => {
  return (
    <div data-aos="fade-up">
      <Parallax strength={600} className="Bgheader">
        <div className="bb">
          <Container>
            <div className="dd"></div>
            <div className="header">
              <div className="hoverbackground">
                <p
                  className="headertext text-light"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                  data-aos-anchor-placement="center-bottom"
                >
                  Expertise We are passionate about uncovering the best
                  <p className="mb-2">cake innovations for forward—thinking</p>
                  brands looking to push boundaries and drive
                  <p>significant impact.</p>
                  <span
                    className="gt3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                    data-aos-anchor-placement="center-bottom"
                  >
                    / Expertise
                  </span>
                </p>
              </div>
              <p
                className="vanila"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-anchor-placement="center-bottom"
              >
                Cake-Vanila
                <div className="w1">
                  <div className="cake opacity-75"></div>
                </div>
              </p>
              <p
                className="cocolate"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-anchor-placement="center-bottom"
              >
                Cake-Cocolate
                <div className="w">
                  <div className="cake2 opacity-75"></div>
                </div>
              </p>
              <p
                className="strawberry"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-anchor-placement="center-bottom"
              >
                Cake-strawberry
                <div className="w">
                  <div className="cake3 opacity-75"></div>
                </div>
              </p>
            </div>
          </Container>
        </div>
      </Parallax>
    </div>
  );
};

export default Header;
