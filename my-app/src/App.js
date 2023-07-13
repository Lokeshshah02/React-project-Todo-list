import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";


function App() {
  let todos=[
    {
      sno: 1,
      title: "go to the market",
      desc: "Welcome to the Market"
  
    },{
    
    sno: 2,
    title: "go to the mall",
    desc: "Welcome to the Market"

  },{
  
  sno: 3,
  title: "go to the sochle",
  desc: "Welcome to the Market"

},
  ]
  
  return (
    <>
   <Header title="My Todos List" searchbar={false}/>
   <Todos todos={todos}/>
   < Footer/>
  </>
  );
}

export default App;
