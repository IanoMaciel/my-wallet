import React from "react";
import * as S from './styles'

interface IProps {
    children: React.ReactNode;
}

const Content: React.FC<IProps> = ({ children }) => (
    <S.Container>
        { children }
    </S.Container>
);

export default Content;