import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Err from "./Components/Err";
import FirstPage from "./Components/FirstPage/FirstPage";
import Fourth from "./Components/FourthPage/Fourth";
import Second from './Components/SecondFolder/Second';
import Third from "./Components/Third/Third";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/secondpage" element={<Second />} />
        <Route path="/thirdpage" element={<Third />} />
        <Route path="/fourthpage" element={<Fourth />} />
        <Route path="*" element={<Err />}/>
      </Routes>
    </Router>
  );
}

export default App;
