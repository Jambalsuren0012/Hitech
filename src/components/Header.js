import background from "./40x60.jpg";
import "./header.css";

import { Typewriter, Cursor } from "react-simple-typewriter";
function Header() {
  return (
    <header
      className="bgimg"
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <h1>
        <Typewriter
          words={["Технологи өөд тэмүүл"]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div className="row"></div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
