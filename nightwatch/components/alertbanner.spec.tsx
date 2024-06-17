import AlertBanner from '../../src/components/AlertBanner';
import GlobalStyles from '../../src/components/GlobalStyles';
import { GlobalContextProvider } from '../utils/TestGlobalContextProvider';
import { Error } from '/Users/piyush/html-reporter/src/icons';

export default {
  title: 'AlertBanner Component',
  component: AlertBanner
};

export const AlertBannerComponent = () => (
  <>
    <GlobalContextProvider
      value={{
        // Any global context values needed for your test
      }}>
      <GlobalStyles />
      <AlertBanner icon={<Error />} children= {"error"}></AlertBanner>
      
    </GlobalContextProvider>
  </>
);

AlertBannerComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible
  browser.expect(component).text.to.equal("error");
};
