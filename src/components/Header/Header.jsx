import "./Header.css";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar.svg";

function Header({ weatherData, onAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="Logo" />
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <div className="header__right">
        <button
          className="header__add-clothes-button"
          type="button"
          onClick={onAddClick}
        >
          + Add clothes
        </button>

        <div className="header__user-container">
          <p className="header__username">user</p>
          <img className="header__avatar" src={avatar} alt="Terrence Tegegne" />
        </div>
      </div>
    </header>
  );
}

export default Header;
