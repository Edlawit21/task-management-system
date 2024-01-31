import PropTypes from "prop-types";

const Header = ({ title }) => (
  <div className=" mb-10">
    <p className="text-lg text-gray-400"></p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
