import { useEffect } from "react";

function ItemModal({ card, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`modal modal_type_preview ${isOpen ? "modal_is-opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content modal__content_type_image">
        <button className="modal__close" type="button" onClick={onClose}>
          ×
        </button>
        {card && (
          <>
            <img className="modal__image" src={card.imageUrl} alt={card.name} />
            <div className="modal__caption">
              <h2 className="modal__item-name">{card.name}</h2>
              <p className="modal__weather">Weather: {card.weather}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemModal;
