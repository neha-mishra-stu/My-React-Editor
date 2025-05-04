import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./Screens/HomeScreen";
import { PlaygroundScreen } from "./Screens/PlaygroundScreen";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen/>}></Route>
      <Route path="/playground" element={<PlaygroundScreen/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
