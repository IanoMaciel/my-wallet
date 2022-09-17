import React from "react";
import GlobalStyles from "./styles/GlobalStyles"; //estilo global

//views
import Dashboard from "./views/Dashboard";

const App: React.FC = () => {
    return(
        <>
            <GlobalStyles/>
            <Dashboard/>
        </>
    );
}

export default App;