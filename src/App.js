import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Err from "./Components/Err";
import FirstPage from "./Components/FirstPage/FirstPage";
import Second from './Components/SecondFolder/Second';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/secondpage" element={<Second />} />
        <Route path="*" element={<Err />}/>
      </Routes>
    </Router>
  );
}

export default App;
