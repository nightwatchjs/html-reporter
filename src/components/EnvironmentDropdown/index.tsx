import React, { ReactNode, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownRadioItem,
  EnvironmentSelectorWrapper,
  FilterWrapper
} from './style';
import { ArrowDropDown, ArrowDropUp } from '../../icons';
import { MetaDataProps } from '../EnvironmentMetadata';
import EnvironmentContent from './EnvironmentContent';
import Search from '../Search';

type EnvironmentDropdownProps = {
  data: {
    name: string;
    meta: MetaDataProps['meta'];
    testResult: {
      passed: number;
      failed: number;
      skipped: number;
    };
  }[];
};

const EnvironmentDropdown: React.FC<EnvironmentDropdownProps> = ({ data }) => {
  const [isDropDownOpen, setDropdownOpen] = useState(false);
  const [context, setContext] = useState('Environment1');

  return (
    <DropdownMenu.Root onOpenChange={(open) => setDropdownOpen(open)}>
      <DropdownMenuTrigger asChild>
        <EnvironmentSelectorWrapper>
          {/* TODO: Filter using context. Sample value of context is Environment1, Environment2 */}
          <EnvironmentContent
            name={data[0]['name']}
            meta={data[0]['meta']}
            testResult={data[0]['testResult']}
          />
          {isDropDownOpen ? <ArrowDropUp /> : <ArrowDropDown />}
        </EnvironmentSelectorWrapper>
      </DropdownMenuTrigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent>
          <FilterWrapper>
            <Search placeholder="Search for Environments, OS, Browser, Device" width={100} />
          </FilterWrapper>
          <DropdownMenu.RadioGroup value={context} onValueChange={setContext}>
            <DropdownRadioItemContent value={data[0]['name']}>
              <EnvironmentContent
                name={data[0]['name']}
                meta={data[0]['meta']}
                testResult={data[0]['testResult']}
              />
            </DropdownRadioItemContent>
            <DropdownRadioItemContent value={data[1]['name']}>
              <EnvironmentContent
                name={data[1]['name']}
                meta={data[1]['meta']}
                testResult={data[0]['testResult']}
              />
            </DropdownRadioItemContent>
          </DropdownMenu.RadioGroup>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

type Props = {
  children: ReactNode;
  value: string;
};

const DropdownRadioItemContent = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, forwardedRef) => (
    <DropdownRadioItem {...props} ref={forwardedRef}>
      {children}
    </DropdownRadioItem>
  )
);
DropdownRadioItemContent.displayName = 'DropdownRadioItemContent';

export default EnvironmentDropdown;
