import styled from 'styled-components'

interface ILgendaProps {
    color: string
}

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.with};

    border-radius: 7px;

    display: flex;
    justify-content: space-between;
`

export const SideLeft = styled.aside`
    padding: 30px 20px;
    > h2 {
        margin-bottom: 20px;
    }
`
export const LegendContainer = styled.ul`
    list-style: none;

    height: 175px;
    padding-right: 15px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }
`
export const Legend = styled.li<ILgendaProps>`
    display: flex;
    align-items: center;

    margin: 10px 0;

    font-size: 18px;

    > div {
        width: 45px;
        height: 45px;

        background-color: ${props => props.color};

        border-radius: 7px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    > span {
        margin-left: 10px;
    }
`
export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`
