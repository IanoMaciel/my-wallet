import React from "react";
import * as S from './styles';

import ManHeader from "../ManHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = () => {
    return(
        <S.Container>
            <ManHeader/>
            <Aside/>
            <Content/>
        </S.Container>
    );
}

export default Layout;