import styled from 'styled-components';

interface IContainerProps {
    color: string
}

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 200px;

    margin: 10px 0;

    background-color: ${props => props.color}; 
    color: ${props => props.theme.colors.with};
    
    border-radius: 7px;
    padding: 10px 20px;

    position: relative;
    overflow: hidden;

    > img {
        height: 110%;
        
        position: absolute;
        
        top: -10px;
        right: -30px;

        opacity: .3;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

`
