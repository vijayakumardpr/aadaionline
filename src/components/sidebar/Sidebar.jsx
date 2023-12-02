import { AiOutlineClose } from "react-icons/ai";
import "./sidebar.css";
import { close } from "../../utils/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = () => {
  const isTrue = useSelector((store) => store.sidebarToggle.value);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(close());
  }

  if (!isTrue) return;
  return (
    <>
      <div className="overlay">
        <aside className="aside">
          <div onClick={handleClose}>
            <AiOutlineClose />
          </div>
          <ul className="side-unordered-list">
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>LOGIN</li>
            <li>REGISTER NOW</li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
