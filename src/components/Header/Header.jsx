function Header({ weatherData, onAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <p className="header__logo">WTWR</p>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__right">
        <button className="header__add-button" type="button" onClick={onAddClick}>
          + Add clothes
        </button>
        <p className="header__username">Feylie</p>
        <div className="header__avatar">F</div>
      </div>
    </header>
  );
}

export default Header;
