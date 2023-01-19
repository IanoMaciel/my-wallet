import React, {useMemo, useState, useEffect} from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import * as S from './styles';


import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";


interface IRoutesProps {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC<IRoutesProps> = ({match}) => {

    const [data, setData] = useState<IData[]>([])
    
    const {type} = match.params; 

    const title = useMemo(() => {
        return type === 'balance-entry' ? 'Entradas' :'Saídas'
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'balance-entry' ? "#4E41F0" :'#E44C4E'
    }, [type]);

    const listData = useMemo(() => {
       return type === 'balance-entry' ? gains : expenses;
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

    
    useEffect(() => {
        const response = listData.map(item => {
           return{
            id: String(Math.random()*data.length),
            description: item.description,
            amountFormatted: formatCurrency(Number(item.amount)),
            frequency: item.frequency,
            dateFormatted: formatDate(item.date),
            tagColor: item.frequency === 'recorrente' ? "#4E41F0" : "#E44C4E"
           }
        })
        setData(response)
    }, []);

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
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subTitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </S.Content>
        </S.Container>
    );
}

export default List;