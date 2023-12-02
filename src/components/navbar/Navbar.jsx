import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";
import { open } from "../../utils/sidebarSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  function handleOpen() {
    console.log("clicked");
    dispatch(open());
  }
  return (
    <>
      <nav className="navbar">
        <div onClick={handleOpen}>
          <GiHamburgerMenu />
        </div>
        <img
          src="https://aadai.in/cdn/shop/files/aadai_med_140x@2x.png?v=1698179639"
          alt="logo"
        />
        <ul className="navbar-ordered-list">
          <li>WOMEN</li>
          <li>KIDS</li>
        </ul>
        <div>
          <AiOutlineUser />
          <AiOutlineShopping />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
