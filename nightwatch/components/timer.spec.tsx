
import GlobalStyles from '../../src/components/GlobalStyles';
import Timer from '../../src/components/Timer';

export default {
  title: 'Timer Component',
  component: Timer
};

export const TimerComponent = () => (
  <>
    <GlobalStyles />
    <Timer
        color={"#000"}
        time={{
          seconds: 3,
          hours: 1,
          minutes: 5 
        }}
        fontSize={"10"}     
        gap={1}  
      />
  </>
);

TimerComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
  browser.expect(component).text.to.equals('1hr 5mins 3secs')
};
