import { Container } from "react-bootstrap";
import MouseParticles from "react-mouse-particles";

const Contact = () => {
  return (
    <div className="BgLanding5">
      <MouseParticles g={1} num={6} color={["#ff0000", "white"]} />
      <Container>
        <div className="nm">
          <a href="https://wa.me/qr/33FAP3CY7BHNE1">
            <h1 className="lets">Let's Talk.</h1>
          </a>
          <div className="talk"></div>
        </div>
        <div className="amerika">
          <h6 className="text-light mt-5 opacity-75">
            Amerika{" "}
            <h6 className="mt-3 opacity-50" style={{ fontSize: "12px" }}>
              CAKE'A PTE. LTD.{" "}
              <h6 className="mt-1" style={{ fontSize: "10px" }}>
                60 Robinson Road, #14-04 <br /> Amerika Business Federation{" "}
                <br />
                Centre - 068914, Amerika
              </h6>
            </h6>
          </h6>
        </div>
        <div className="surabaya">
          <h6 className="text-light opacity-75" style={{ fontSize: "12px" }}>
            Surabaya, Indonesia
            <h6 className="mt-3 opacity-50" style={{ fontSize: "12px" }}>
              PT FLEAVA DIGITAL MEDIA{" "}
              <h6 className="mt-1" style={{ fontSize: "10px" }}>
                Jalan Pradah Indah No.16, <br />
                Gang Macan, Surabaya,
                <br /> Bali - 80361, Indonesia
              </h6>
            </h6>
          </h6>
        </div>
        <div className="created">
          <h6 className="text-light opacity-75" style={{ fontSize: "12px" }}>
            Created by :
            <h6 className="mt-3 opacity-75" style={{ fontSize: "12px" }}>
              YOGA SETIAWAN{" "}
              <h6 className="mt-2 opacity-75" style={{ fontSize: "10px" }}>
                Mr.LiverZhask ^
                <br />
                Mr.DarkVenom ^
                <br />
                Mr.DarkEmpire ^
              </h6>
            </h6>
          </h6>
        </div>
        <div className="contactme">
          <h6 className="text-light opacity-75" style={{ fontSize: "13px" }}>
            Contact Me :
            <h6
              className="opacity-50"
              style={{ fontSize: "12px", marginTop: "18px" }}
            >
              <a className="text-light" href="https://wa.me/qr/33FAP3CY7BHNE1">
                Whatsaap
              </a>
              <br />
              <a
                className="text-light"
                href="https://www.facebook.com/yogaesslurrr"
              >
                Faceboock
              </a>
              <br />
              <a
                className="text-light"
                href="https://www.instagram.com/yogaaeslurrr/"
              >
                Instagram
              </a>

              <br />
              <a className="text-light" href="https://wa.me/qr/33FAP3CY7BHNE1">
                Messenger
              </a>
            </h6>
          </h6>
          <div className="imagelogo"></div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
