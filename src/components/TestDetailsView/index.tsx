import React, { useEffect, useState } from 'react';
import ErrorTestStep from '../ErrorTestStep';
import PassTestStep from '../PassTestStep';
import Search from '../Search';
import { ITestSteps } from '../SpecMetaData/types';
import Trace from '../Trace';
import { SearchWrapper, TestSteps, TestStepWrapper, Wrapper } from './style';
import { filterTestSteps, joinArgs, validTestArgs } from './utils';

type TestDetailsViewProps = {
  testStepsData: ITestSteps[];
  tracePresent: boolean;
};

const TestDetailsView: React.FC<TestDetailsViewProps> = ({ testStepsData, tracePresent }) => {
  const [query, setQuery] = useState<string>('');
  const [trace, setTrace] = useState<{ url?: string; snapshotPath?: string } | undefined>();

  const filteredTestsSteps = filterTestSteps(testStepsData, query);

  useEffect(() => {
    const firstTestWithTrace = filteredTestsSteps.find((test) => test.trace);
    const traceObject = firstTestWithTrace?.trace;
    if (traceObject) {
      const { traceSnapshot, traceUrl } = traceObject;
      setTrace({ url: traceUrl, snapshotPath: traceSnapshot });
    }
  }, [filterTestSteps]);

  return (
    <Wrapper>
      <SearchWrapper>
        <Search
          placeholder="Search test steps"
          onChange={(event) => setQuery((event.target as HTMLInputElement).value)}
        />
      </SearchWrapper>
      <TestStepWrapper>
        <TestSteps>
          {filteredTestsSteps.map((test, index) => {
            if (test.status === 'pass') {
              return (
                <PassTestStep
                  key={index}
                  time={test.time}
                  traceData={test.trace ?? {}}
                  setTrace={setTrace}
                >
                  {`${test.name}${validTestArgs(test.args) ? `('${joinArgs(test.args!)}')` : ''}`}
                </PassTestStep>
              );
            }
            if (test.status === 'fail') {
              // FIXME: Replace NightwatchAssertError to dynamic value
              return (
                <ErrorTestStep
                  key={index}
                  time={test.time}
                  errorName={'NightwatchAssertError'}
                  shortMessage={test.shortMessage ?? ['']}
                  stacktrace={test.stacktrace}
                  screenshot={test.screenshot}
                  tracePresent={tracePresent}
                >
                  {`${test.name}${validTestArgs(test.args) ? `('${joinArgs(test.args!)}')` : ''}`}
                </ErrorTestStep>
              );
            }
          })}
        </TestSteps>
        {tracePresent && <Trace url={trace?.url} src={trace?.snapshotPath} />}
      </TestStepWrapper>
    </Wrapper>
  );
};

export default TestDetailsView;
