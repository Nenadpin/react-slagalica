import skocko from "../img/1.png";
import tref from "../img/2.png";
import pik from "../img/3.png";
import karo from "../img/4.png";
import herc from "../img/5.png";
import zvezda from "../img/6.png";

const slike = [skocko, tref, pik, karo, herc, zvezda];

function Resenje(props) {
  return (
    <div>
      {props.text === 24 ? (
        <div className="resenje">
          <button>
            <img src={slike[props.zadato[0] - 1]} alt="" />
          </button>
          <button>
            <img src={slike[props.zadato[1] - 1]} alt="" />
          </button>
          <button>
            <img src={slike[props.zadato[2] - 1]} alt="" />
          </button>
          <button>
            <img src={slike[props.zadato[3] - 1]} alt="" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
export default Resenje;
