import React from "react";
import GlobalStyles from "./styles/GlobalStyles"; // estilo global
import { ThemeProvider } from 'styled-components'; // temas

import Dark from "./styles/themes/Dark"; // tema dark
import Light from "./styles/themes/Light"; // tema light

//views
import Routes from "./routes";
import Layout from "./components/Layout";


const App: React.FC = () => {
    return(
        <ThemeProvider theme={Dark}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    );
}

export default App;