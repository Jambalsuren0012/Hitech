import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">HiTech Solution LLC</h1>
                <p className="footer-text">Технологи өөд тэмүүл</p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      {" "}
                      Services{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                    >
                      About Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={1000}>
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#">hitechsolutionllc@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#">
                      {" "}
                      БЗД-ийн 5-р хороо, Ulaanbaatar, Mongolia
                    </Link>
                  </li>
                  <li>
                    <Link to="#">7755 9911</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="">
                      {" "}
                      SODTECH.MN
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/HiTechSolutionLLC"
                    >
                      {" "}
                      FACEBOOK
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="">
                      {" "}
                      INSTAGRAM
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop">
        <i className="fas fa-level-up-alt"></i>
      </button>
    </footer>
  );
}
export default Footer;
