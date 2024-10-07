import Kocka from "./Kocka";
import "./jatek.css"


export default function Jatekmezo(props) {
  return (
    <div className="jatek">
      {props.lista.map((karakter, index) => {
        return <Kocka karakter={karakter} key={index} />;
      })}
    </div>
  );
}
