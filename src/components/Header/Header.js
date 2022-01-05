import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './hbogologo.svg';

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>
          <Link className="logo" to="/">
            HBO GO
          </Link>
        </Logo>
        <Link className="nav-btns" to="/tv-shows">
          СЕРИАЛИ
        </Link>
        <Link className="nav-btns" to="/movies">
          ФИЛМИ
        </Link>
        <Link className="nav-btns" to="/kids">
          KIDS
        </Link>
        <Link className="nav-btns" to="/tv-schedule">
          ТВ ПРОГРАМА
        </Link>
        <Link className="nav-btns" to="/search">
          Search
        </Link>
      </Nav>
      <NavAuth>
        <Link className="nav-auth-reg" to="/register">
          Регистрация
        </Link>
        <Link className="nav-auth-login" to="/login">
          Вход
        </Link>
      </NavAuth>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  padding: 0px 75px;
  justify-content: space-between;
  box-shadow: 0px -7px 20px 4px black;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  .nav-btns {
    text-decoration: none;
    color: white;
    padding: 17px 20px;

    &:hover {
      background: #0091ea;
    }
  }
`;

const Logo = styled.section`
  .logo {
    margin-right: 15px;
    color: transparent;
    font-size: 23px;
    width: 111px;
    height: 25px;
    background: transparent url(${logo}) no-repeat 50% 50%;
  }
`;

const NavAuth = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;

  .nav-auth-reg {
    text-decoration: none;
    color: white;
    padding: 5px 12px;
    border-radius: 4px;
    border: 1px solid #059;
    background: #059;

    &:hover {
      background: #0091ea;
      border: 1px solid #0091ea;
    }
  }
  .nav-auth-login {
    text-decoration: none;
    color: white;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px 12px;

    &:hover {
      border: 1px solid #0091ea;
    }
  }
`;
