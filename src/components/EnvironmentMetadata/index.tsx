import React from 'react';
import Tags from '../Tags';
import Timer from '../Timer';
import { Wrapper } from './style';
import { DesktopWindowsOutlined } from '@mui/icons-material';
import ChipWithIcon from '../ChipWithIcon';
import Browser from '../../icons/Browser';
import OperatingSystem from '../../icons/OperatingSystem';

type MetaDataProps = {
  meta: {
    device: 'desktop' | 'mobile';
    browserName: string;
    browserVersion: number;
    operatingSystemName: string;
    tags: string[];
    time: {
      hour?: number;
      min?: number;
      sec?: number;
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
        icon={<Browser name="firefox" />}>{`${browserName} ${browserVersion}`}</ChipWithIcon>
      <ChipWithIcon
        icon={<OperatingSystem name="windows" />}>{`${operatingSystemName}`}</ChipWithIcon>
      {tags.map((label, index) => {
        return <Tags key={index}>{label}</Tags>;
      })}
      <Timer time={time} color="--color-grey-100" fontSize="--font-size-12" gap={4} />
    </Wrapper>
  );
};

export default EnvironmentMetadata;
