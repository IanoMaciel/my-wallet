import React, { Children } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import * as S from './styles'

const Dashboard: React.FC = () => {
    const months = [
        {value: '1', label: 'Janeiro'},
        {value: '2', label: 'Fevereiro'},
        {value: '3', label: 'Março'},
    ]
    return(
        <S.Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={months}/>
            </ContentHeader>
        </S.Container>
    );
}

export default Dashboard;