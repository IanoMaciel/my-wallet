import React from 'react'
import CountUp from 'react-countup';

//icons
import arrowDownImg from  '../../assets/arrow-down.svg'
import arrowUpImg from  '../../assets/arrow-up.svg'
import dollarImga from '../../assets/dollar.svg'
// styles
import * as S from './styles'

interface IWalletBoxProps {
    title: string;
    amount: number;  
    footerLabel: string;
    icon: 'dollar' | 'arrow-up' | 'arrow-down';
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title, 
    amount,
    footerLabel,
    icon,
    color
}) => {

    const iconSelected = ():string => {
        if (icon === 'dollar')
            return dollarImga
        else if (icon === 'arrow-up')
            return arrowUpImg
        else return arrowDownImg
    }

    return(
        <S.Container color={color}>
            <span>{ title }</span>
            <h1>
                <CountUp
                    end={amount}
                    prefix={"R$ "}
                    separator="."
                    decimal=','
                    decimals={2}
                    preserveValue={true}
                    duration={3}
                />
            </h1>
            <small>{ footerLabel }</small>
            <img src={ iconSelected() } alt={icon}/>
        </S.Container>
    )
}

export default WalletBox