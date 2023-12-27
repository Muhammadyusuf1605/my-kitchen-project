// rrd import
import { Link } from "react-router-dom";
// react-icons import
import { FaInstagram } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { TfiYoutube } from "react-icons/tfi";
function Footer() {
  return (
    <div className="site-container flex py-4 px-3 justify-between items-center">
      <h2 className="text-3xl text-cyan-300">
        Author:{" "}
        <span className="text-cyan-400">Ne'matjonov Muhammadyusuf</span>
      </h2>
      <div className="text-5xl flex justify-center items-center gap-4">
        <Link to="/">
          <FaInstagram color="pink" />
        </Link>
        <Link to="/">
          <SiTelegram color="#527ff2" />
        </Link>
        <Link to="/">
          <TfiYoutube color="red"/>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
