import { createContext, useState } from "react";


const SightContext = createContext();

const SightProvider = ({children}) => {
    const [activeSight, setActiveSight] = useState(4);
    const state = {activeSight, setActiveSight};


    return <SightContext.Provider value={state}>{children}</SightContext.Provider>

};

export {SightContext, SightProvider};