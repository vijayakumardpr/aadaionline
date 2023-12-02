import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="quick-shop">
        <li>QUICK SHOP</li>
        <li>MEN</li>
        <li>WOMEN</li>
      </ul>
      <ul className="policy-information">
        <li>POLICY INFORMATION</li>
        <li>Shipping Policy</li>
        <li>Return & Refund Policy</li>
      </ul>
      <ul>
        <li>CONTACT US</li>
        <li>
          <strong>Email</strong>: aadaionline@gmail.com
        </li>
      </ul>
      <ul className="stay-connected">
        <li>STAY CONNECTED</li>
        <li>
          <FaInstagram /> <FaWhatsapp />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
