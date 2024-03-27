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
          seconds: 23,
          hours: 3,
          minutes: 15 
        }}
        fontSize={"10"}     
        gap={1}  
      />
  </>
);

TimerComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
  browser.expect(component).text.to.equals('3 hr 15 min 23 sec')
};