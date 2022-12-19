import React from "react";
import Content from "../../components/Content";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
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

            <S.Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                /><HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subTitle="19/12/2021"
                    amount="R$ 600"
                />
                
            </S.Content>
        </S.Container>
    );
}

export default List;