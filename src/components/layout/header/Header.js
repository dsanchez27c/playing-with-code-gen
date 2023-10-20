import React from 'react';
import logoIpsum from './../../images/placeholders/logoipsum-220.svg';
import MoonIcon from './../../images/placeholders/moon.png';
import SunIcon from './../../images/placeholders/sun.png';

export const Header = () => {
  const navButtons = [
    {
      button: 'Home'
    },
    {
      button: 'Catalogue'
    },
    {
      button: 'About'
    },
    {
      button: 'FAQS'
    }
  ];

  const darkmode = true;

  return (
    <header className="px-3 py-2 fixed w-full z-10">
      <div className="flex justify-between items-center">
        <div className="flex">
          <div>
            <img src={logoIpsum} alt="logo-ipsum" />
          </div>
          <nav className="m-auto">
            <ul className="px-4 py-0 m-0 ml-2 list-none flex">
              {navButtons.map((item, idx) => {
                const { button } = item;
                return (
                  <li
                    key={idx}
                    className="px-4 py-1 mx-2 my-0 text-white cursor-pointer outline outline-2 outline-teal-600 rounded-lg hover:bg-teal-600"
                  >
                    {button}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <div className="px-2 flex">
            <div className={`w-6 ${darkmode ? 'grayscale-0' : 'grayscale'}`}>
              <img src={SunIcon} alt="sun" />
            </div>
            <div className="mx-2 my-0">Switch</div>
            <div className={`w-6 ${darkmode ? 'grayscale' : 'grayscale-0'}`}>
              <img src={MoonIcon} alt="moon" />
            </div>
          </div>
          <div className="px-2">
            <button
              className="border-2 border-teal-600 rounded-lg px-4 py-1 text-white hover:bg-teal-600"
              type="button"
            >
              Iniciar Sesión
            </button>
            <button
              className="border-2 border-teal-600 rounded-lg px-4 py-1 text-white ml-2 hover:bg-teal-600"
              type="button"
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
