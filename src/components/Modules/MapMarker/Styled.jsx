import styled from 'styled-components'

export const Pin = styled.div`
    position: relative;
    width: 50px;
    height: 75px;
    z-index:3
    &:after
    {
        position: absolute;
        content: '';
        width: 0px;
        height: 0px;
        bottom: 0;
        left: 5px;
        z-index:1;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 35px solid ${props => props.backgroundColor};
    }

`
export const ImageWrapper = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 8px;
    box-sizing: border-box;
    border-size: 2px;
    border-style: solid;
    border-color: ${props => props.backgroundColor};
    background-color: #fff;
    z-index:2;
    img
    {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: relative;
    }
    
`



