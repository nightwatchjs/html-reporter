import Header from '../../src/components/Header';
import GlobalStyles from '../../src/components/GlobalStyles';
import { GlobalContextProvider } from '../utils/TestGlobalContextProvider';

export default {
  title: 'Header Component',
  component: Header
};

export const HeaderComponent = () => (
  <>
    <GlobalContextProvider
      value={{
        metadata: { date: '2022-12-21T09:07:54.770Z' }
      }}>
      <GlobalStyles />
      <Header />
    </GlobalContextProvider>
  </>
);

HeaderComponent.test = async (browser) => {
  browser.pause(1000);
  // expect(HeaderComponent).to.be.visible;
};
