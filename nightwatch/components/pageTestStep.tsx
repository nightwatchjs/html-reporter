import PassTestStep from '../../src/components/PassTestStep';
import GlobalStyles from '../../src/components/GlobalStyles';

export default {
  title: 'PassTestStep Component',
  component: PassTestStep
};

export const PassTestStepComponent = () => (
  <>
    <GlobalStyles />
    <PassTestStep
      testStepKey={1}
      active={true}
      setActiveTestStep={(key) => console.log(`Active test step key set to: ${key}`)}
      time={500}
      tracePresent={true}
      traceData={{ snapshotUrl: 'example.com', snapshotFilePath: 'examplePath' }}
      setTrace={() => {}}
    >
      Test Step Content
    </PassTestStep>
  </>
);

PassTestStepComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
  browser.expect(component).text.to.contain('Test Step Content');
  browser.expect(component).text.to.contain('500 ms');
};
