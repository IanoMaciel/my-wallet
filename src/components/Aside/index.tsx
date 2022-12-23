import React from "react";
import * as S from './styles';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

import logo from '../../assets/logo.svg'

const Aside: React.FC = () => {
    return(
        <S.Container>
            <S.Header>
                <S.Logo src={logo} alt="Logo minha carteira"/>
                <h3>Minha Carteira</h3>
            </S.Header>

            <S.MenuContainer>
                <S.MenuItemLink href="/dashboard"> <MdDashboard/> Dashboard</S.MenuItemLink>
                <S.MenuItemLink href="/list/balance-entry"> <MdArrowUpward/> Entradas</S.MenuItemLink>
                <S.MenuItemLink href="/list/balance-exit"> <MdArrowDownward/> Saídas</S.MenuItemLink>
                <S.MenuItemLink href="#"> <MdExitToApp/> Sair</S.MenuItemLink>
            </S.MenuContainer>

        </S.Container>
    );
}

export default Aside;