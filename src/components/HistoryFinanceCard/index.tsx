import React from 'react'
import * as S from './styles'

interface IHistoryFinanceCardProps {
    tagColor: string;
    title: string;
    subTitle: string;
    amount: string;

}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
    tagColor,
    title,
    subTitle,
    amount
}) => {
    return(
        <S.Container>
            <S.Tag color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subTitle}</small>
            </div>
            <h3>{amount}</h3>
        </S.Container>
    );
}

export default HistoryFinanceCard;