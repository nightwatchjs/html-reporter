import ProgressLine from '../../src/components/ProgressLine';
import GlobalStyles from '../../src/components/GlobalStyles';

export default {
  title: 'ProgressLine Component',
  component: ProgressLine
};

export const ProgressLineComponent = () => {
  // Define sample visualPartition props
  const visualPartition = [
    { percentage: 20, color: 'red' },
    { percentage: 30, color: 'blue' },
    { percentage: 50, color: 'green' }
  ];

  return (
    <>
      <GlobalStyles />
      <ProgressLine visualPartition={visualPartition} />
    </>
  );
};

ProgressLineComponent.test = async (browser, { component }) => {
  // Check if the ProgressLine component is visible
  browser.expect(component).to.be.visible;

  // Check if the correct number of Graph elements are present based on the visualPartition prop
  browser.expect.elements('div[class*="ProgressLine__Graph"]').count.to.equal(3); 
  browser.expect.element(`div[class*="ProgressLine__Graph"]:first-child`).to.have.css('background-color')
  browser.expect.element(`div[class*="ProgressLine__Graph"]:first-child`).to.have.css('width')
};