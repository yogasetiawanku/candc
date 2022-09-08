import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Outro = () => {
  return (
    <div>
      <div className="BgLanding4">
        <Container>
          <div data-aos="fade-up">
            <h4
              className="text-light"
              style={{
                float: "center",
                textAlign: "center",
                position: "relative",
                marginTop: "120px",
                fontWeight: "bold",
                textShadow: "2px 2px 2px black",
              }}
            >
              || Gallery Chef Players On Motivation ||{" "}
            </h4>
          </div>
          <div data-aos="fade-left" data-aos-delay="500">
            <h4 className="textleft">
              || Gallery Chef Players On Motivation ||{" "}
            </h4>
          </div>
          <div data-aos="fade-right" data-aos-delay="1500">
            <h4 className="textright">
              || Gallery Chef Players On Motivation ||{" "}
            </h4>
          </div>
          <div data-aos="fade-right" data-aos-delay="1000">
            <h4 className="textbottom">
              || Gallery Chef Players On Motivation ||{" "}
            </h4>
          </div>
          <Carousel fade className="cr">
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ width: "400px", height: "320px" }}
                src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Fe35559b0-fea7-11e7-9e12-af73e8db3c71?dpr=2&fit=scale-down&quality=medium&source=next&width=700"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3
                  className="text-light fw-bold"
                  style={{ textShadow: "2px 2px 2px black" }}
                >
                  Paul Bocuse
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ width: "400px", height: "320px" }}
                src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F39a0f658-0336-11e7-aa5b-6bb07f5c8e12?dpr=2&fit=scale-down&quality=medium&source=next&width=700"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3
                  className="text-light fw-bold"
                  style={{ textShadow: "2px 2px 2px black" }}
                >
                  {" "}
                  Anne-Sophie Pic
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ width: "400px", height: "320px" }}
                src="https://www.mldspot.com/storage/generated/June2021/MLD%20-%20Pierre%20Gagnaire,%20The%20Michelin%20Chef.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3
                  className="text-light fw-bold"
                  style={{ textShadow: "2px 2px 2px black" }}
                >
                  Pierre Gagnaire
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ width: "400px", height: "320px" }}
                src="https://stevemccurry.files.wordpress.com/2022/01/usa-11146_pc.jpg?w=900"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3
                  className="text-light fw-bold"
                  style={{ textShadow: "2px 2px 2px black" }}
                >
                  Barbara Costikyan
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ width: "400px", height: "320px" }}
                src="https://d1e00ek4ebabms.cloudfront.net/production/be035978-bb19-4070-bcd3-678a6c8e3aa1.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3
                  className="text-light fw-bold"
                  style={{ textShadow: "2px 2px 2px black" }}
                >
                  Muriel Barbery
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ width: "400px", height: "320px" }}
                src="https://cateringamanah.com/wp-content/uploads/2021/12/2.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3
                  className="text-light fw-bold"
                  style={{ textShadow: "2px 2px 2px black" }}
                >
                  Alain Ducasse
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ width: "400px", height: "320px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Guillaume_Musso_%2830662447538%29.jpg/1280px-Guillaume_Musso_%2830662447538%29.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3
                  className="text-light fw-bold"
                  style={{ textShadow: "2px 2px 2px black" }}
                >
                  Guillaume Musso
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ width: "400px", height: "320px" }}
                src="https://1.bp.blogspot.com/-voR4zWqI5mg/X1hjjTFC1rI/AAAAAAAAF3U/GDpDv-L8huMGI-qvepHg9l2FwmKt6UWtQCLcBGAsYHQ/s1600/Francis%2BBacon.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3
                  className="text-light fw-bold"
                  style={{ textShadow: "2px 2px 2px black" }}
                >
                  Francis Bacon
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

export default Outro;
