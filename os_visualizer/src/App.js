import "./App.css";
import Chart from "./Pages/Chart";
import LandingPage from "./Pages/LandingPage";
import ListPage from "./Pages/ListPage";
// import LandingPage from "./Pages/LandingPage";
import InputPage from "./Pages/InputPage";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
   {/* <LandingPage /> */}
   {/* <ListPage/> */}
   <Chart/>

   {/* <LandingPage  */}
    {/* <InputPage />  */}
  
    </div>
  );
}

export default App;
