import React, {useMemo, useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";
import * as S from './styles';

import listOfMonths from "../../utils/months";
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

    const [data, setData] = useState<IData[]>([]);

    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

    const {type} = match.params; 

    const title = useMemo(() => {
        return type === 'balance-entry' ? 'Entradas' :'Saídas'
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'balance-entry' ? "#4E41F0" :"#E44C4E"
    }, [type]);

    const listData = useMemo(() => {
       return type === 'balance-entry' ? gains : expenses;
    }, [type]);

<<<<<<< HEAD
    const months = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
    ]
    
    const years = [
        {value: 2020, label: 2020},
        {value: 2021, label: 2021},
    ]
=======
    const years = useMemo(() => {
        let uniqueYears: number[] = []; // variável de temporária
        
        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
>>>>>>> develop

            if(!uniqueYears.includes(year))
                uniqueYears.push(year);
        });
        
        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        });
    },[listData])
    
    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        }) 
        
    },[])

    useEffect(() => {
        const filteredData = listData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;
        });


        const formattedData = filteredData.map(item => {
            return{
                id: uuidv4(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? "#4E41F0" : "#E44C4E"
            }
        })
        setData(formattedData);
    }, [listData, monthSelected, yearSelected]);

    return(
        <S.Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput
                    options={months}
                    onChange={(e) => setMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={years}
                    onChange={(e) => setYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
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