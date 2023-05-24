import React, { ReactElement } from 'react';
import { useLink } from '../hooks/useLink';

const TopMenuError = (): ReactElement => {
  const { href } = useLink();
  const handleOnClickBack = (): void => href('https://webdevelop.fr');

  return (
    <>
      <div id='top-menu'>
        <button id="back" onClick={handleOnClickBack}>back</button>
      </div >
    </>
  );
};

export default TopMenuError;
