import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { ReactNode, useMemo, useState } from 'react';
import { findTestDetailsForEnv } from '../../helper/findFailedTestDetails';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import { ArrowDropDown, ArrowDropUp } from '../../icons';
import Search from '../Search';
import { getEnvironmentDropDownData } from '../Summary/utils';
import EnvironmentContent from './EnvironmentContent';
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownRadioItem,
  EnvironmentSelectorWrapper,
  FilterWrapper
} from './style';
import { EnvironmentData } from './types';
import { filterData } from './utils';

const EnvironmentDropdown: React.FC = () => {
  const { environments } = useGlobalContext();
  const { environmentName, setEnvironmentName, setFileId, setTestId } = useReportContext();
  const envDropdownData = getEnvironmentDropDownData(environments);

  // React States
  const [query, setQuery] = useState<string>('');
  const [isDropDownOpen, setDropdownOpen] = useState(false);
  const filteredData = filterData(envDropdownData, query);
  const [envData, setEnvData] = useState<EnvironmentData>({} as EnvironmentData);

  const defaultDropdownData = envDropdownData.find((data: any) => data.origName == environmentName);

  useMemo(() => {
    // FIXME: Replace any with it's datatype
    envDropdownData.find((data: any) => {
      if (data.name == environmentName) {
        setEnvData(data);
      }
    });
  }, [envDropdownData,environmentName]);

  return (
    <DropdownMenu.Root onOpenChange={(open) => setDropdownOpen(open)}>
      <DropdownMenuTrigger asChild>
        <EnvironmentSelectorWrapper>
          <EnvironmentContent
            name={envData.name || defaultDropdownData.name}
            meta={envData.meta || defaultDropdownData.meta}
            testResult={envData.testResult || defaultDropdownData.testResult}
            isDropdownTrigger
          />
          {isDropDownOpen ? <ArrowDropUp /> : <ArrowDropDown />}
        </EnvironmentSelectorWrapper>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <FilterWrapper>
          <Search
            placeholder="Search for Environments, OS, Browser, Device"
            width={100}
            onChange={(event) => setQuery((event.target as HTMLInputElement).value)}
          />
        </FilterWrapper>
        <DropdownMenu.RadioGroup
          value={environmentName}
          onValueChange={(envName) => {
            const { fileIndex, testIndex } = findTestDetailsForEnv(environments, envName);
            setFileId(fileIndex);
            setTestId(testIndex);
            setEnvironmentName(envName);
          }}>
          {filteredData.map(({ name, origName, meta, testResult }, index) => (
            <DropdownRadioItemContent key={index} value={origName}>
              <EnvironmentContent name={name} meta={meta} testResult={testResult} />
            </DropdownRadioItemContent>
          ))}
        </DropdownMenu.RadioGroup>
      </DropdownMenuContent>
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
