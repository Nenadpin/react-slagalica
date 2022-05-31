import { useState, useEffect } from "react";
import logo from "./img/skocko.png";
import "./App.css";
import skocko from "./img/1.png";
import tref from "./img/2.png";
import pik from "./img/3.png";
import karo from "./img/4.png";
import herc from "./img/5.png";
import zvezda from "./img/6.png";
import Odgovor from "./components/Odgovor";
import Odgovor2 from "./components/Odgovor2";
import Odgovor3 from "./components/Odgovor3";
import Odgovor4 from "./components/Odgovor4";
import Odgovor5 from "./components/Odgovor5";
import Odgovor6 from "./components/Odgovor6";
import PrviPokusaj from "./components/PrviPokusaj.js";
import Resenje from "./components/resenje";

let pocetak = [];
let pokusaj = [];

for (let j = 0; j < 4; j++) {
  pocetak.push(Math.floor(Math.random() * 6) + 1);
}

function App() {
  const [timer, setTimer] = useState(60);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      const vreme = setInterval(() => {
        updateTime();
      }, 1000);
      return () => clearInterval(vreme);
    }
  }, [timer]);

  function updateTime() {
    if (timer === 0) {
      setCount(24);
    } else {
      setTimer(timer - 1);
    }
  }

  function klik(a) {
    if (count === 24) {
      setTimer(0);
      window.location.reload(false);
    } else {
      pokusaj.push(a);
      setCount(count + 1);
      if (count === 0) setTimer(59);
    }

    if (pokusaj.length % 4 === 0 && pokusaj.length >= 4) {
      if (
        pokusaj[count] === pocetak[3] &&
        pokusaj[count - 1] === pocetak[2] &&
        pokusaj[count - 2] === pocetak[1] &&
        pokusaj[count - 3] === pocetak[0]
      ) {
        setCount(24);
        setTimer(0);
      }
    }
  }

  function ups() {
    if (count > 0 && count % 4 !== 0) {
      setCount(count - 1);
      pokusaj.pop();
    } else if (count === 24) {
      window.location.reload(false);
    }
  }
  return (
    <div className="App">
      <div className="App-header">
        <img
          src={logo}
          className={count > 0 && count !== 24 ? "App-logo" : "Applogo"}
          alt="logo"
          onClick={() => ups()}
        />
        <div className="zadatak">
          <button onClick={() => klik(1)}>
            <img src={skocko} alt="" />
          </button>
          <button onClick={() => klik(2)}>
            <img src={tref} alt="" />
          </button>
          <button onClick={() => klik(3)}>
            <img src={pik} alt="" />
          </button>
          <button onClick={() => klik(4)}>
            <img src={karo} alt="" />
          </button>
          <button onClick={() => klik(5)}>
            <img src={herc} alt="" />
          </button>
          <button onClick={() => klik(6)}>
            <img src={zvezda} alt="" />
          </button>
        </div>
        {count > 0 && count < 25 ? (
          <div>
            <div className="igra">
              <div>
                <PrviPokusaj text={pokusaj} />
              </div>
              <div className="Odgovor">
                <div className="red">
                  {count >= 4 ? (
                    <Odgovor zadatak={pocetak} proba={pokusaj} />
                  ) : null}
                </div>
                <div className="red">
                  {count >= 8 ? (
                    <Odgovor2 zadatak={pocetak} proba={pokusaj} />
                  ) : null}
                </div>
                <div className="red">
                  {count >= 12 ? (
                    <Odgovor3 zadatak={pocetak} proba={pokusaj} />
                  ) : null}
                </div>
                <div className="red">
                  {count >= 16 ? (
                    <Odgovor4 zadatak={pocetak} proba={pokusaj} />
                  ) : null}
                </div>
                <div className="red">
                  {count >= 20 ? (
                    <Odgovor5 zadatak={pocetak} proba={pokusaj} />
                  ) : null}
                </div>
                <div className="red">
                  {count === 24 ? (
                    <Odgovor6 zadatak={pocetak} proba={pokusaj} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div>
          {count === 0 ? <p>Nova igra?</p> : null}
          {timer < 60 && count !== 24 ? (
            <p>Preostalo vreme... {timer} s</p>
          ) : null}
          {count === 24 ? <Resenje text={count} zadato={pocetak} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
