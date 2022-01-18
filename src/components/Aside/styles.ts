import styled from 'styled-components';


export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colos.secundary};
    border-right: 1px solid ${props => props.theme.colos.gray};
    padding-left: 20px;
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colos.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    margin: 7px 0;
    color: ${props => props.theme.colos.info};
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    >svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;