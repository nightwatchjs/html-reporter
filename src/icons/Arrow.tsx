import React from 'react';

interface Arrow {
  type: 'up' | 'down';
}

const Up = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="-8 0 23 6">
      <path fill="#787878" d="m0 5.5 5-5 5 5H0Z" />
    </svg>
  );
};

const Down = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
      <path fill="#787878" d="M3.5 4.75 6 7.25l2.5-2.5h-5Z" />
    </svg>
  );
};

export const Arrow: React.FC<Arrow> = ({ type }) => {
  let component: React.ReactNode = null;

  switch (type) {
    case 'up':
      component = Up();
      break;
    case 'down':
      component = Down();
      break;
  }

  return component;
};
