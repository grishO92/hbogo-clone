// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from './banner.jpg';

export const Home = () => {
  return (
    <Wrapper>
      <Banner>
        <img src={banner} alt="banner" />
      </Banner>
      <Offers>
        <h1 className="main-title">ТВОИТЕ СЕРИАЛИ ОНЛАЙН</h1>
        <p className="main-desc">Без обвързване, откажи се по всяко време</p>
        <button className="reg-now">РЕГИСТРИРАЙ СЕ СЕГА</button>
        <section className="included-offers">
          <article className="included-offer">
            <h2 className="offer-title">Сериали. Филми. Детско съдържание.</h2>
            <p className="offer-desc">
              Хитови сериали и касови блокбъстъри със субтитри и семейно
              съдържание с дублаж на български.
            </p>
          </article>
          <article className="included-offer center">
            <h2 className="offer-title">Гледай на любимото си устройство</h2>
            <p className="offer-desc">
              Активирай на до 5 устройства и стриймвай на до 2 устройства
              едновременно. Само 3,99 EUR/мес. Можеш да се откажеш от абонамента
              по всяко време.
            </p>
          </article>
          <article className="included-offer">
            <h2 className="offer-title">
              Услугата е достъпна и в избрани оператори.
            </h2>
            <p className="offer-desc">
              Може да се абонирате за HBO GO през оператор. Регистрирайте се,
              ако вече имате HBO GO абонамент, и гледайте сега.
            </p>
          </article>
        </section>
      </Offers>
      <Content>
        <article className="popular-tv-shows">
          <h3 className="title">Популярни сериали</h3>
        </article>
        <article className="popular-movies">
          <h3 className="title">Популярни филми</h3>
        </article>
        <article className="lotr">
          <h3 className="title">
            Гандалф, Фродо, Ам-гъл, Арагорн, Арвен, Билбо и много други от
            любимите ти герои те очакват за приключение в HBO GO
          </h3>
        </article>
        <article className="harry-potter">
          <h3 className="title">СТАНИ ЧАСТ ОТ МАГИЧЕСКИЯ СВЯТ</h3>
        </article>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

const Banner = styled.header`
  margin-top: 53px;
  img {
    width: 100%;
  }
`;

const Offers = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  .main-title {
    font-size: 35px;
    font-weight: 200;
    color: white;
  }
  .main-desc {
    color: white;
    font-size: 17px;
  }
  .reg-now {
    box-shadow: 0 0 0 1px #e1981a inset;
    font-size: 20px;
    color: white;
    background: #e1981a;
    border-style: none;
    padding: 13px 30px;
    border-radius: 6px;
    &:hover {
      background: #ffb93f;
      cursor: pointer;
    }
  }

  .included-offers {
    display: flex;
    flex-direction: row;
    color: white;
    margin-top: 20px;
    align-items: center;
    padding: 0 20px;

    .included-offer {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 0 15px;
      text-align: center;

      .offer-title {
        font-weight: lighter;
        font-size: 22px;
      }
      .offer-desc {
        font-size: 13px;
      }
    }
    .center {
      border-right: 1px solid gray;
      border-left: 1px solid gray;
      padding: 20px 10px;
    }
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  .title {
    font-weight: lighter;
    font-size: 25px;
  }
`;
