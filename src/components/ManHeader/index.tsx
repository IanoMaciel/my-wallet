import React, { useMemo } from "react";
import * as S from './styles'

import emoji from "../../utils/emoji";

import Toggle from "../Toggle"; //components


const ManHeader: React.FC = () => {

    const emotion = useMemo(() => {
        const index = Math.floor(Math.random()* emoji.length)
        return emoji[index];
    }, [])

    return(
        <S.Container>
            <Toggle/>
            <S.Profile>
                <S.Welcome>Olá,{emotion}</S.Welcome>
                <S.UserName>Iano Maciel</S.UserName>
            </S.Profile>
        </S.Container>
    );
}

export default ManHeader;