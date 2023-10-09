import React from 'react';
import logoIpsum from './../../images/placeholders/logoipsum-220.svg';

export const Header = () => {
  return (
    <header className="px-3 py-2 bg-sky-300">
      <div className="flex items-center">
        <div>
          <img src={logoIpsum} alt="logo-ipsum" />
        </div>
        <nav className="m-auto">
          <ul className="p-0 m-0 list-none flex">
            <li>Home</li>
            <li>Catalogue</li>
            <li>About</li>
            <li>FAQS</li>
          </ul>
        </nav>
        <div>
          <button type="button">Iniciar Sesión</button>
          <button type="button">Registrarse</button>
        </div>
      </div>
    </header>
  );
};
