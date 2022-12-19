import React, { Children } from "react";
import * as S from './styles'

//import components
import Layout from "../../components/Layout";
import List from "../List";

const Dashboard: React.FC = () => {
    return(
        <S.Container>
            <h1>
                Dashboard
            </h1>
        </S.Container>
    );
}

export default Dashboard;