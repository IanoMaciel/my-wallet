import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import * as S from './styles'

const List: React.FC = () => {
    
    const months = [
        {value: '1', label: 'Janeiro'},
        {value: '2', label: 'Fevereiro'},
        {value: '3', label: 'Março'},
    ]
    
    return(
        <S.Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={months}/>
            </ContentHeader>
        </S.Container>
    );
}

export default List;