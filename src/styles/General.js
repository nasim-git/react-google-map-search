import styled from 'styled-components'

export const Input = styled.input`
	padding: 10px;
	height: 35px;
	box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #ddd;
	font-size: 14px;
	margin-right:20px;
	width: 300px;

`
export const Button = styled.button`
	border-radius: 5px;
	background: #4038a7;
	color:#fff;
	border:0;
	border-radius: 20px;
	padding: 10px 30px; 
	font-size: 14px;
	cursor:pointer;
`
export const Link = styled.a`
	color: #4038a7;
`
export const Table = styled.div`
    display :table;
    background :#fff;
    margin:20px 0;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`
export const Row = styled.div`
    display :table-row;
`
export const Column = styled.div`
    background:  #${props => props.bg || "fff"};
    display :table-cell;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
`