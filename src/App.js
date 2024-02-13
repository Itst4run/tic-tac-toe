
import './App.css';
import Tictactoe from "./Components/Tictactoe/TicTacToe";
import dot from "../src/Components/Assets/dot.png"
import cross from "../src/Components/Assets/cross.png"
function App() {
  return (
    <div className="container">
    {/* <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1> */}
    {/* <div className='board'> */}
      
    {/* </div>  */}
      <Tictactoe/>
      
    </div>
  );
}

export default App;
