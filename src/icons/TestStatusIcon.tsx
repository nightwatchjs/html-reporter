import React from 'react';

interface Status {
  status: 'passed' | 'failed' | 'skipped';
}

const Check = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" fill="none">
      <path fill="#4D8764" d="m3.863 7.584-2.78-2.78-.946.94L3.863 9.47l8-8-.94-.94-7.06 7.054Z" />
    </svg>
  );
};

const Failed = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none">
      <path
        fill="#B80D0D"
        d="m9.667 1.273-.94-.94L5 4.06 1.273.333l-.94.94L4.06 5 .333 8.726l.94.94L5 5.94l3.727 3.726.94-.94L5.94 5l3.727-3.727Z"
      />
    </svg>
  );
};

const Skipped = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
      <path
        fill="#DDA038"
        d="M3.667 6.333v1.333h6.666V6.333H3.667ZM7 .333A6.67 6.67 0 0 0 .333 7 6.669 6.669 0 0 0 7 13.666 6.67 6.67 0 0 0 13.667 7 6.67 6.67 0 0 0 7 .333Zm0 12A5.34 5.34 0 0 1 1.667 7 5.34 5.34 0 0 1 7 1.666 5.34 5.34 0 0 1 12.333 7 5.34 5.34 0 0 1 7 12.333Z"
      />
    </svg>
  );
};

export const TestStatusIcon: React.FC<Status> = ({ status }) => {
  let component: React.ReactNode = null;

  switch (status) {
    case 'passed':
      component = Check();
      break;
    case 'failed':
      component = Failed();
      break;
    case 'skipped':
      component = Skipped();
      break;
  }

  return component;
};
