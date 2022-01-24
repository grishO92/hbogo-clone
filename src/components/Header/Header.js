import { NavLink, Link } from 'react-router-dom';
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
        <NavLink className="nav-btns" to="/tv-shows">
          СЕРИАЛИ
          <section className="sub-menu">
            <article className="tv-shows-type">
              <Link className="content-link" to="tv-shows/recent">
                Последно добавени
              </Link>
              <Link className="content-link" to="tv-shows/popular">
                Популярни сериали
              </Link>
              <Link className="content-link" to="tv-shows/imdb-high-rating">
                IMDb 7+
              </Link>
              <Link className="content-link" to="tv-shows/original-hbo">
                Оригинални HBO продукции
              </Link>
              <Link className="content-link" to="tv-shows/europe">
                Продукции на HBO Европа
              </Link>
              <Link className="content-link" to="tv-shows/coming-soon">
                Очаквайте скоро
              </Link>
            </article>
            <article className="tv-shows-genres">
              <Link className="content-link" to="tv-shows/drama">
                Драма
              </Link>
              <Link className="content-link" to="tv-shows/comedy">
                Комедия
              </Link>
              <Link className="content-link" to="tv-shows/criminal-thriller">
                Криминален, трилър
              </Link>
              <Link className="content-link" to="tv-shows/sci-fi-fantasy">
                Научна фантастика, фентъзи
              </Link>
              <Link className="content-link" to="tv-shows/documentary">
                Документален
              </Link>
              <Link className="content-link" to="tv-shows/other">
                Други
              </Link>
            </article>
          </section>
        </NavLink>
        <NavLink className="nav-btns" to="/movies">
          ФИЛМИ
          <section className="sub-menu">
            <article className="movies-type">
              <Link className="content-link" to="tv-shows/recent">
                Последно добавени
              </Link>
              <Link className="content-link" to="tv-shows/popular">
                Популярни сериали
              </Link>
              <Link className="content-link" to="tv-shows/imdb-high-rating">
                IMDb 7+
              </Link>
              <Link className="content-link" to="tv-shows/original-hbo">
                Оригинални HBO продукции
              </Link>
              <Link className="content-link" to="tv-shows/europe">
                Предложения от България
              </Link>
              <Link className="content-link" to="tv-shows/coming-soon">
                Очаквайте скоро
              </Link>
            </article>
            <article className="movies-genres">
              <Link className="content-link" to="movies/action-adventure">
                Екшън, приключенски
              </Link>
              <Link className="content-link" to="movies/sci-fi-fantasy">
                Научна фантастика, фентъзи
              </Link>
              <Link className="content-link" to="movies/drama">
                Драма
              </Link>
              <Link className="content-link" to="movies/family">
                Семееен
              </Link>
              <Link className="content-link" to="movies/comedy">
                Комедия
              </Link>
              <Link className="content-link" to="movies/documentary">
                Документален
              </Link>
              <Link className="content-link" to="movies/criminal">
                Криминален
              </Link>
              <Link className="content-link" to="movies/musical">
                Музика
              </Link>
              <Link className="content-link" to="movies/romance">
                Романтичен
              </Link>
              <Link className="content-link" to="movies/other">
                Други
              </Link>
              <Link className="content-link" to="movies/thriller-horror">
                Трилър, ужаси
              </Link>
            </article>
          </section>
        </NavLink>
        <NavLink className="nav-btns round" to="/kids">
          KIDS
        </NavLink>
        <NavLink className="nav-btns round" to="/tv-schedule">
          ТВ ПРОГРАМА
        </NavLink>
        <NavLink className="nav-btns round" to="/search">
          <i class="fas fa-search"></i>
        </NavLink>
      </Nav>
      <NavAuth>
        <Link className="nav-auth-reg" to="/register">
          Регистрация
        </Link>
        <Link className="nav-auth-login" to="/login">
          Вход
        </Link>
      </NavAuth>
      <BlurLayer />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  width: 100vw;
  position: fixed;
  padding: 0px 75px;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px -7px 20px 4px black;

  z-index: 5;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  .nav-btns {
    position: relative;
    text-decoration: none;
    color: white;
    padding: 17px 20px;
    z-index: 7;

    .sub-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      width: max-content;
      background: rgba(0, 0, 0, 0.92);
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-top: 2px solid #0091ea;
      border-radius: 0 0 5px 5px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

      z-index: 10;

      .content-link {
        color: white;
        font-size: 16px;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        padding-bottom: 2px;

        &:hover {
          padding-bottom: 2px;
          border-bottom: 1px solid #0091ea;
          width: fit-content;
        }
      }
      .tv-shows-type,
      .movies-type {
        border-right: 1px solid rgba(255, 255, 255, 0.2);
      }

      .tv-shows-type,
      .tv-shows-genres,
      .movies-type {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 20px;
      }

      .movies-genres {
        margin: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      background: #0091ea;
      height: 0%;
      opacity: 60%;
      z-index: -1;
      inset: 0;
      transition: cubic-bezier(0.86, 0, 0.07, 1) 250ms;
    }

    &[aria-current] {
      &::after {
        content: '';
        width: 90%;
        height: 2px;
        margin: auto;
        background: #0091ea;
        position: absolute;
        inset: 75% 0 0 0;
      }
    }
    &:hover {
      &::before {
        transition: cubic-bezier(0.86, 0, 0.07, 1) 250ms;
        background: #0091ea;
        opacity: 100%;
        height: 100%;
      }
      .sub-menu {
        animation-delay: 500ms;
        animation: 700ms submenu ease-out;
        display: flex;
      }
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

const BlurLayer = styled.div`
  position: absolute;
  z-index: -1;
  inset: 0;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;
