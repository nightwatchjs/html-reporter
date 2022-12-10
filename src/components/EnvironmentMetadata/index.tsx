import React from 'react';
import { DesktopWindowsOutlined } from '../../icons';
import Browser from '../../icons/Browser';
import OperatingSystem from '../../icons/OperatingSystem';
import ChipWithIcon from '../ChipWithIcon';
import Tags from '../Tags';
import Timer from '../Timer';
import { Wrapper } from './style';

export type MetaDataProps = {
  meta: {
    device: 'desktop' | 'mobile';
    browserName: 'chrome' | 'firefox' | 'safari' | 'edge';
    browserVersion: number;
    operatingSystemName: 'windows' | 'linux' | 'macos';
    tags: string[];
    time: {
      hours?: number;
      minutes?: number;
      seconds?: number;
    };
  };
};

const EnvironmentMetadata: React.FC<MetaDataProps> = ({
  meta: { device, browserName, browserVersion, operatingSystemName, tags, time }
}) => {
  return (
    <Wrapper>
      <ChipWithIcon icon={<DesktopWindowsOutlined />}>{device}</ChipWithIcon>
      <ChipWithIcon
        icon={<Browser name={browserName} />}>{`${browserName} ${browserVersion}`}</ChipWithIcon>
      <ChipWithIcon
        icon={
          <OperatingSystem name={operatingSystemName} />
        }>{`${operatingSystemName}`}</ChipWithIcon>
      {tags.map((label, index) => {
        return <Tags key={index}>{label}</Tags>;
      })}
      <Timer time={time} color="--color-grey-100" fontSize="--font-size-12" gap={4} />
    </Wrapper>
  );
};

export default EnvironmentMetadata;
