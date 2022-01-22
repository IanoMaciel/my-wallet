import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    background-color: ${props => props.theme.colos.secundary};
    border-bottom: 1px solid ${props => props.theme.colos.gray};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

export const Profile = styled.div`
    color: ${props => props.theme.colos.white};
`;

export const Welcome = styled.h3``;
export const UserName = styled.span``;