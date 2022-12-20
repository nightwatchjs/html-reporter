import { createElement } from 'react';
import { Status } from '../../transform';
import { FailedIcon, PassedIcon, SkippedIcon } from './style';

export const statusIcon = (status: Status) => {
  switch (status) {
    case 'pass':
      return createElement(PassedIcon);
    case 'fail':
      return createElement(FailedIcon);
    case 'skip':
      return createElement(SkippedIcon);
  }
};
