import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: ${(props) => props.columnBased ? "column" : "row" };
	justify-content: center;
	align-items: center;
  	height: 88.5vh;
	width: 100vw;
	padding: 0 2rem;
	text-align: center;
	background-color: ${(props) => props.theme.colors.primary};
`

export const Title = styled.h1`
	color: ${(props) => props.primary ? props.theme.colors.secondary : props.theme.colors.text};
	font-size: 4rem;
	font-family: 'Pacifico', cursive;
	background-color: transparent;
`
export const  Subtitle = styled.h2`
	color: ${(props) => props.primary ? props.theme.colors.secondary : props.theme.colors.text};
	font-size: 1.5rem;
	font-family: 'Poppins', sans-serif;
	font-weight: 200;
	background-color: transparent;
`