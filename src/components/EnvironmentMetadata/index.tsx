import React from 'react';
import { PLATFORM_NAME, isVRT } from '../../constants';
import { DesktopWindowsOutlined } from '../../icons';
import Browser from '../../icons/Browser';
import OperatingSystem from '../../icons/OperatingSystem';
import ChipWithIcon from '../ChipWithIcon';
import Tags from '../Tags';
import Timer from '../Timer';
import { Wrapper } from './style';
import { Text } from '../Text';

export type MetaDataProps = {
  meta: {
    device: 'desktop' | 'mobile';
    browserName: 'chrome' | 'firefox' | 'safari' | 'edge';
    browserVersion: string;
    operatingSystemName: string;
    tags: string[];
    time: {
      hours?: number;
      minutes?: number;
      seconds?: number;
    };
    diff?: string;
  };
};

const EnvironmentMetadata: React.FC<MetaDataProps> = ({
  meta: { device, browserName, browserVersion, operatingSystemName, tags, time, diff }
}) => {
  const majorBrowserVersion = browserVersion?.split('.')[0];

  return (
    <Wrapper>
      {device && (
        <ChipWithIcon icon={<DesktopWindowsOutlined />} transformText>
          {device}
        </ChipWithIcon>
      )}
      {browserName && (
        <ChipWithIcon
          title={browserVersion}
          icon={<Browser name={browserName} />}
          transformText>{`${browserName} ${majorBrowserVersion ?? ''}`}</ChipWithIcon>
      )}
      {operatingSystemName && (
        <ChipWithIcon icon={<OperatingSystem name={operatingSystemName} />}>{`${
          PLATFORM_NAME[operatingSystemName] ?? ''
        }`}</ChipWithIcon>
      )}
      {!isVRT &&
        tags &&
        tags?.map((label, index) => {
          return label && <Tags key={`${label}-${index}`}>{label}</Tags>;
        })}
      {!isVRT && <Timer time={time} color="--color-grey-100" fontSize="--font-size-12" gap={4} />}
      {diff && (
        <Text fontSize={12} lineHight={20} color="grey-100" transformText>
          {diff} diff
        </Text>
      )}
    </Wrapper>
  );
};

export default EnvironmentMetadata;
