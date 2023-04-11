import Page from "./components/Page";
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div>
      <Page/>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
