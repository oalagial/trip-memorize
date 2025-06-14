import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import { SightProvider } from "./stateManagement/sight-context";
import SightDetails from "./components/SightDetails";
import LocationContent from "./components/LocationContent";
import QuestContent from "./components/QuestContent";
import React from "react";

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
