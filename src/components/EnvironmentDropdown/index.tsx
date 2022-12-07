import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { ReactNode, useEffect, useState } from 'react';
import { ArrowDropDown, ArrowDropUp } from '../../icons';
import Search from '../Search';
import EnvironmentContent from './EnvironmentContent';
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownRadioItem,
  EnvironmentSelectorWrapper,
  FilterWrapper
} from './style';
import { EnvironmentData, EnvironmentDropdownProps } from './types';
import { filterData } from './utils';

const EnvironmentDropdown: React.FC<EnvironmentDropdownProps> = ({ data }) => {
  const [query, setQuery] = useState<string>('');
  const filteredData = filterData(data, query);
  const [isDropDownOpen, setDropdownOpen] = useState(false);
  const [context, setContext] = useState(filteredData[0].name);
  const [envData, setEnvData] = useState<Partial<EnvironmentData>>({});

  useEffect(() => {
    data.forEach((data) => {
      if (data.name == context) {
        setEnvData(data);
      }
    });
  }, [context]);

  return (
    <DropdownMenu.Root onOpenChange={(open) => setDropdownOpen(open)}>
      <DropdownMenuTrigger asChild>
        <EnvironmentSelectorWrapper>
          <EnvironmentContent
            name={envData.name || filteredData[0]['name']}
            meta={envData.meta || filteredData[0]['meta']}
            testResult={envData.testResult || filteredData[0]['testResult']}
          />
          {isDropDownOpen ? <ArrowDropUp /> : <ArrowDropDown />}
        </EnvironmentSelectorWrapper>
      </DropdownMenuTrigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent>
          <FilterWrapper>
            <Search
              placeholder="Search for Environments, OS, Browser, Device"
              width={100}
              onChange={(event) => setQuery((event.target as HTMLInputElement).value)}
            />
          </FilterWrapper>
          <DropdownMenu.RadioGroup value={context} onValueChange={setContext}>
            {filteredData.map(({ name, meta, testResult }, index) => (
              <DropdownRadioItemContent key={index} value={name}>
                <EnvironmentContent name={name} meta={meta} testResult={testResult} />
              </DropdownRadioItemContent>
            ))}
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
