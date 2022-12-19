import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    padding-left: 20px;

    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.gray};

`

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    h3 {
        color: ${props => props.theme.colors.with};
        margin-left: 10px;
    }
`
export const Logo = styled.img`
    width: 40px;
    height: 40px;
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.information};
    text-decoration: none;

    margin: 10px 0;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    > svg {
        margin-right: 7px;
        font-size: 20px;
    }
`