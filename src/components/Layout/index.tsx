import React from "react";
import * as S from './styles';

import ManHeader from "../ManHeader";
import Aside from "../Aside";
import Content from "../Content";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
        <S.Container>
            <ManHeader/>
            <Aside/>
            <Content>
                { children }                
            </Content>
        </S.Container>
);

export default Layout;