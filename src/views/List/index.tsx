import React, {useMemo, useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import listOfMonths from "../../utils/months";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

import * as S from './styles';


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

const List: React.FC<IRoutesProps> = ({ match }) => {

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

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


    const years = useMemo(() => {
        let uniqueYears: number[] = []; // variável de temporária
        
        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year))
                uniqueYears.push(year);
        });
        
        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
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


    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);

        if(alreadySelected >= 0) {
            const filttered = selectedFrequency.filter(item => item != frequency);
            setSelectedFrequency(filttered);
        } else {
            setSelectedFrequency((prev) => [... prev, frequency])
        }
    }

    useEffect(() => {
        const filteredData = listData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
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
    },[listData, monthSelected, yearSelected, data.length, selectedFrequency]);

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
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent
                    ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual
                    ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}

                >
                    Eventuais
                </button>
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