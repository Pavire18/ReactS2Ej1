import "./BetList.css";

const BetList = ({name, addBet}) => {

  return(
    <button onClick={addBet} className="bet-button">
      Añadir puja de {name} por 5€
    </button>
  );
}

export default BetList;