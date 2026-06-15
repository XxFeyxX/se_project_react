import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/clothingItems";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import "./App.css";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const [newItemName, setNewItemName] = useState("");
  const [newItemImageUrl, setNewItemImageUrl] = useState("");
  const [newItemWeather, setNewItemWeather] = useState("");

  const [weatherData, setWeatherData] = useState({
    city: "",
    temp: {
      F: 0,
    },
    type: "",
  });

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeatherData(filterWeatherData(data));
      })
      .catch(console.error);
  }, []);

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleAddItemSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      _id: Date.now().toString(),
      name: newItemName,
      imageUrl: newItemImageUrl,
      weather: newItemWeather,
    };

    setClothingItems([newItem, ...clothingItems]);

    setNewItemName("");
    setNewItemImageUrl("");
    setNewItemWeather("");

    handleCloseModal();
  };

  return (
    <div className="page">
      <Header weatherData={weatherData} onAddClick={handleAddClick} />

      <Main
        weatherData={weatherData}
        clothingItems={clothingItems}
        onCardClick={handleCardClick}
      />

      <Footer />

      <ModalWithForm
        title="New garment"
        name="add-garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={handleCloseModal}
        onSubmit={handleAddItemSubmit}
      >
        <label className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            name="name"
            placeholder="Name"
            value={newItemName}
            onChange={(event) => setNewItemName(event.target.value)}
            required
          />
        </label>

        <label className="modal__label">
          Image
          <input
            className="modal__input"
            type="url"
            name="imageUrl"
            placeholder="Image URL"
            value={newItemImageUrl}
            onChange={(event) => setNewItemImageUrl(event.target.value)}
            required
          />
        </label>

        <fieldset className="modal__fieldset">
          <legend className="modal__legend">Select the weather type:</legend>

          <label className="modal__radio-label">
            <input
              className="modal__radio"
              type="radio"
              name="weather"
              value="hot"
              checked={newItemWeather === "hot"}
              onChange={(event) => setNewItemWeather(event.target.value)}
              required
            />
            Hot
          </label>

          <label className="modal__radio-label">
            <input
              className="modal__radio"
              type="radio"
              name="weather"
              value="warm"
              checked={newItemWeather === "warm"}
              onChange={(event) => setNewItemWeather(event.target.value)}
            />
            Warm
          </label>

          <label className="modal__radio-label">
            <input
              className="modal__radio"
              type="radio"
              name="weather"
              value="cold"
              checked={newItemWeather === "cold"}
              onChange={(event) => setNewItemWeather(event.target.value)}
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>

      <ItemModal
        card={selectedCard}
        isOpen={activeModal === "preview"}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
