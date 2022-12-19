import React from "react";
import GlobalStyles from "./styles/GlobalStyles"; // estilo global
import { ThemeProvider } from 'styled-components'; // temas

import Dark from "./styles/themes/Dark"; // tema dark
import Light from "./styles/themes/Light"; // tema light

//views
import Dashboard from "./views/Dashboard";
import List from "./views/List";
import Layout from "./components/Layout";


const App: React.FC = () => {
    return(
        <ThemeProvider theme={Dark}>
            <GlobalStyles/>
            <Layout>
                <List/>
            </Layout>
        </ThemeProvider>
    );
}

export default App;