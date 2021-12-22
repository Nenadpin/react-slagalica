import skocko from "../img/1.png";
import tref from "../img/2.png";
import pik from "../img/3.png";
import karo from "../img/4.png";
import herc from "../img/5.png";
import zvezda from "../img/6.png";
const slike=[skocko, tref, pik, karo, herc, zvezda]
function PrviPokusaj(props) {

  return (
    <div className="prviRed">
       {props.text.map((object, i) => <button key={i}><img src={slike[props.text[i]-1]} alt=''/></button>)}
    </div>
  );
  }

export default PrviPokusaj;
