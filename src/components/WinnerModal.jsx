import { Square } from "./Square";
import congratsImg from "../assets/congrats.png";

export function WinnerModal({ winner, resetGame }) {

  const winnerText = winner === false ? "It's a draw!" : `The winner is`;

  if (!winner) return null;
  return (
    <section className="winner">
      <div className="text">
        <img src={congratsImg} alt="congrats" />
        <h2>{winnerText}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Play Again</button>
        </footer>
      </div>
    </section>
  );
}
