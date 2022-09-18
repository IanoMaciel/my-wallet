import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;

    background-color: #313862;
    color: #FFFFFF;
    border-right: 1px solid ${props => props.theme.colors.gray};
`