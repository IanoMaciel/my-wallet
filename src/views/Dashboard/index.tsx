import React, { useMemo, useState } from "react"

// components
import ContentHeader from "../../components/ContentHeader"
import SelectInput from "../../components/SelectInput"
// files
import expenses from "../../repositories/expenses"
import gains from "../../repositories/gains"
import listOfMonths from "../../utils/months"
//styles
import * as S from './styles'

interface IRoutesProps {
    match: {
        params: {
            type: string;
        }
    }
}


const Dashboard: React.FC<IRoutesProps> = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear())

    const years = useMemo(() => {
        let uniqueYears: number[] = []; // variável de temporária
        
        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)) uniqueYears.push(year);
        });
        
        return uniqueYears.map(year => {
            return { 
                value: year,
                label: year
            }
        });
    },[])
    
    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        }) 
        
    },[])


    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth)
        } catch(error) {
            throw new Error('Invalid month value. Is accept  between 0 and 24')
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear)
        } catch(error) {
            throw new Error('Invalid yaer value. Only numbers are accepted')
        }
    }

    return(
        <S.Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
            <SelectInput
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={years}
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
            </ContentHeader>
        </S.Container>
    );
}

export default Dashboard;