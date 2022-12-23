import React, {useMemo} from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import * as S from './styles';


interface IRoutesProps {
    match: {
        params: {
            type: string;
        }
    }
}

const List: React.FC<IRoutesProps> = ({match}) => {
    
    const {type} = match.params; 

    const title = useMemo(() => {
        return type === 'balance-entry' ? 'Entradas' :'Saídas'
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'balance-entry' ? "#4E41F0" :'#E44C4E'
    }, [type]);


    const months = [
        {value: 12, label: 'Dezembro'},
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
    ]
    
    const years = [
        {value: 1, label: 2022},
        {value: 2, label: 2023},
    ]

    return(
        <S.Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <S.Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
                <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
            </S.Filters>

            <S.Content>
                <HistoryFinanceCard
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