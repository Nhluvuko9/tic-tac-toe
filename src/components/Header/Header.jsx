import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from './Header.styled';
import { ReactComponent as Logo } from '../../assets/tic-tac-toe-svgrepo-com.svg';
import { useNavigate } from 'react-router';

function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Logo className="logo" onClick={() => navigate("/")}/>
      <span onClick={() => toggleTheme()}>{theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}</span>
    </HeaderWrapper>
  )
}

export default Header;
