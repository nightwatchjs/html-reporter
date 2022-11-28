import React from 'react';

interface State {
  state: 'open' | 'close';
}

const Plus = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none">
      <path fill="#333" d="M9.667 5.666h-4v4H4.333v-4h-4V4.333h4v-4h1.334v4h4v1.333Z" />
    </svg>
  );
};

const Minus = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none">
      <path fill="#333" d="M9.667 1.666H.333V.333h9.334v1.333Z" />
    </svg>
  );
};

export const AccordionIcon: React.FC<State> = ({ state }) => {
  let component: React.ReactNode = null;

  switch (state) {
    case 'open':
      component = Minus();
      break;
    case 'close':
      component = Plus();
      break;
  }

  return component;
};
