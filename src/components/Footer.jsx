// rrd import
import { Link } from "react-router-dom";
// react-icons import
import { FaInstagram } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { TfiYoutube } from "react-icons/tfi";
function Footer() {
  return (
    <div className="site-container flex flex-col gap-3 md:flex-row justify-center py-4 px-3 md:justify-between items-center">
      <div className="flex flex-col justify-center items-center md:flex-row">
      <h2 className="text-3xl text-cyan-300">
        Author:
      </h2>
      <h2 className="text-3xl text-cyan-400">Ne'matjonov Muhammadyusuf</h2>
      </div>
      <div className="text-5xl flex justify-center items-center gap-4">
        <Link to="/">
          <FaInstagram color="pink" />
        </Link>
        <Link to="/">
          <SiTelegram color="#527ff2" />
        </Link>
        <Link to="/">
          <TfiYoutube color="red" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
