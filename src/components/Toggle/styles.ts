import styled from 'styled-components';
import Switch, {ReactSwitchProps} from 'react-switch';

export const Container = styled.div`
    display: flex;
    align-items: center;

`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colos.white}
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: theme.colos.info,
        offColor: theme.colos.warning,
    }))<ReactSwitchProps>`
    margin: 0 7px;
`;