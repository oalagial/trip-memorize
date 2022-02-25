import logo from "./logo.svg";
import "./App.css";
import PageContainer from "./PageContainer";
import { SightProvider } from "./sight-context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestCompo from "./TestCompo";
import SightDetails from "./SightDetails";
import LocationContent from "./LocationContent";
import QuestContent from "./QuestContent";

function App() {
  return (
    <div className="App">
      <SightProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageContainer />}>
              {/* <Route index element={<Home />} /> */}
            </Route>
            <Route path="sight/:id" element={<SightDetails />}>
                <Route path="location" element={<LocationContent />} />
                 <Route path="quest" element={<QuestContent />} />
                {/* <Route path="about" element={<LocationContent />} /> */}
                {/* <Route path="hint" element={<LocationContent />} />  */}

            </Route>
          </Routes>
        </BrowserRouter>
      </SightProvider>
    </div>
  );
}

export default App;
