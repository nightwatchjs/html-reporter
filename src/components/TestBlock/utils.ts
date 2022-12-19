import { createElement } from 'react';
import { FailedIcon, PassedIcon, SkippedIcon } from './style';

export type TestStatus = 'pass' | 'fail' | 'skip';

export const statusIcon = (status: TestStatus) => {
  switch (status) {
    case 'pass':
      return createElement(PassedIcon);
    case 'fail':
      return createElement(FailedIcon);
    case 'skip':
      return createElement(SkippedIcon);
  }
};
