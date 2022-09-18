import React from "react";
import GlobalStyles from "./styles/GlobalStyles"; // estilo global
import { ThemeProvider } from 'styled-components'; // temas

import Dark from "./styles/themes/Dark"; // tema dark
import Light from "./styles/themes/Light"; // tema light

//views
import Dashboard from "./views/Dashboard";

const App: React.FC = () => {
    return(
        <ThemeProvider theme={Dark}>
            <GlobalStyles/>
            <Dashboard/>
        </ThemeProvider>
    );
}

export default App;