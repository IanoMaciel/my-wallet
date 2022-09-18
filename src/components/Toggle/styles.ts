import styled from 'styled-components';
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
    display: flex;
    align-items: center;

`

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.with}
`

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: theme.colors.warning,
        offColor: theme.colors.information
    })
)<ReactSwitchProps>`
    margin: 0 10px;
`;