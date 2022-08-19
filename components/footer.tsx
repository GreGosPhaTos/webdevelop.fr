import React, { ReactElement } from 'react';

const Footer = (): ReactElement => (
  <footer id="contact" className="pt3 ph3 ph5-ns tc">
    <a className="link dim gray dib h2 w3 br-100 mr3 " href="https://github.com/GreGosPhaTos" title="Github">
      <img src='./github.svg' />
    </a>
    <a className="link dim gray dib h2 w3 br-100 mr3 " href="https://www.linkedin.com/in/adrien-petitjean-10916255" title="linkedin">
      <img src='./linkedin.svg' />
    </a>
    <a className="link dim gray dib h2 w3 br-100 mr3 " href="https://twitter.com/adPetitjean" title="Twitter">
      <img src='./twitter.svg' />
    </a>
  </footer>
);

export default Footer;
