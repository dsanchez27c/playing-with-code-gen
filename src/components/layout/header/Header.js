import React from 'react';
import logoIpsum from './../../images/placeholders/logoipsum-220.svg';

export const Header = () => {
  return (
    <header>
      <div>
        <img src={logoIpsum} alt="logo-ipsum" />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Catalogue</li>
          <li>About</li>
          <li>FAQS</li>
        </ul>
      </div>
      <div>
        <button type="button">Iniciar Sesión</button>
        <button type="button">Registrarse</button>
      </div>
    </header>
  );
};
