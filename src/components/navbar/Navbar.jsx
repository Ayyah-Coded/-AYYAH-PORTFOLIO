import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          AYYAH
        </motion.span>
        <div className="social">
          <a href="https://github.com/Ayyah-Coded">
            <img src="/github.png" alt="" />
          </a>
          <a href="#">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://x.com/ayyah_dev">
            <img src="/twitter.png" alt="" />
          </a>
          <a href="https://wa.me/qr/44QR4JGXZ4YNF1">
            <img src="/whatsapp.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;