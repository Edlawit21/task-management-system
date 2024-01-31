import { SearchOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <button className="fold">
        <MenuFoldOutlined />
      </button>
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Type your text"
        />
        <button className="search__button">
          <SearchOutlined />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
