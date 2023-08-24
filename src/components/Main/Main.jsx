import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';
import Popup from '../Popup/Popup';

function Main({ loggedIn, isOpened, onClose, onClick }) {
  return (
    <div className='main'>
      {loggedIn ? <Header onClick={onClick} /> : <NavTab />}
      <main>
        <Popup isOpened={isOpened} onClose={onClose} />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default Main;