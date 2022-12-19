import styled from 'styled-components';


interface TitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;

    margin-bottom: 25px;
`;

export const TitleContainer = styled.div<TitleContainerProps>`
    >h2 {
        color: ${props => props.theme.colors.with};
        
        &::after{
            content: '';
            display: block;
            width: 60px;
            border-bottom: 10px solid ${props => props.lineColor};
        }
    }
`;

export const Controllers = styled.div`
    display: flex;
    
`;