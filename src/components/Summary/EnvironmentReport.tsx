import React from 'react';
import EnvironmentDropdown from '../EnvironmentDropdown';
import { Title, SubTitle, Wrapper } from './EnvironmentReport.style';

const EnvironmentReport: React.FC = () => {
  return (
    <Wrapper>
      <Title>Environment wise reports</Title>
      <SubTitle>Select an environment to view the report</SubTitle>
      <EnvironmentDropdown
        data={[
          {
            name: 'Environment 3',
            meta: {
              device: 'desktop',
              browserName: 'firefox',
              browserVersion: 83,
              operatingSystemName: 'windows',
              tags: ['local'],
              time: {
                min: 8,
                sec: 12
              }
            },
            testResult: {
              passed: 163,
              failed: 31,
              skipped: 22
            }
          },
          {
            name: 'Environment 2',
            meta: {
              device: 'desktop',
              browserName: 'chrome',
              browserVersion: 99,
              operatingSystemName: 'linux',
              tags: ['local'],
              time: {
                min: 8,
                sec: 12
              }
            },
            testResult: {
              passed: 163,
              failed: 31,
              skipped: 22
            }
          }
        ]}
      />
    </Wrapper>
  );
};

export default EnvironmentReport;
