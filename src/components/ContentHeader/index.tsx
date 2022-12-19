import React from "react";
import SelectInput from "../SelectInput";
import * as S from './styles'

interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, lineColor, children
}) => {
    return(
        <S.Container>
            <S.TitleContainer lineColor={lineColor}>
                <h2>{title}</h2>
            </S.TitleContainer>
            <S.Controllers>
                {children}
            </S.Controllers>
        </S.Container>
    );
}

export default ContentHeader;