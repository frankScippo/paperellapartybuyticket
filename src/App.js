import { useState } from "react";
import Modal from "react-modal";

import "./styles.css";

import duck from "./image/duck_click.png";
import duck_sound from "./sound/duck_sound.wav";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 300
  }
};

function Paperella() {
  let sound = new Audio(duck_sound);
  function playSound() {
    sound.play();
    const timer = setTimeout(() => {
      window.open("https://www.eventbrite.it/e/biglietti-sangria-pool-party-165721002981");
      clearTimeout(timer);
    }, 500);
  }
  return (
    <div className="Paperella">
      <button onClick={() => playSound()} className="PaperellaLink">
        <img className="PaperellaImg" src={duck} alt="paperellaparty" />
      </button>
    </div>
  );
}

function Info() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button className="Info" onClick={openModal}>
        Info
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Info"
      >
        <h2>PAPERELLAPARTY PRESENTA</h2>

        <div>Ai nostri party non devi preoccuparti di nulla!</div>
        <div>
          Con l'acquisto del ticket del party, avete il diritto di gustare un
          ottimo drink accompagnato da un meraviglioso aperitivo con ingredienti
          a chilometro zero, l'accesso al party e di conseguenza alla pista da
          ballo, alla piscina e all'esclusivo shop di cappellini stilosi firmati
          FAMIGLIA! Che cosa stai aspettando? Compra un ticket e dillo ai tuoi
          amici!
        </div>
      </Modal>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Info />
      <Paperella />
      <div className="Copyright">powered by PAPERELLAPARTY</div>
    </div>
  );
}
