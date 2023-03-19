import React from 'react'

// styles
import * as S from './styles'

interface IMessageBoxProps {
    title: string;
    desciption: string;
    footerText: string;
    icon: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({ title, desciption, footerText, icon }) => {
    return(
        <S.Container>
            <header>
                <h1>{ title }<img src={ icon } alt={ title }/></h1>
                <p>{ desciption }</p>
            </header>
            <footer>
                <span>{ footerText }</span>
            </footer>
        </S.Container>
    )
}

export default MessageBox