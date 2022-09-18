import React from "react";
import * as S from './styles';

const Toggle: React.FC = () => {
    return(
        <S.Container>
            <S.ToggleLabel>Light</S.ToggleLabel>
            <S.ToggleSelector 
                onChange={() => console.log('trocou')}
                checked={true}
                uncheckedIcon={false}
                checkedIcon={false}
            />
            <S.ToggleLabel>Dark</S.ToggleLabel>
        </S.Container>
    );
}

export default Toggle;