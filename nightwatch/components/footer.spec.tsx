import Footer from '../../src/components/Footer';
import GlobalStyles from '../../src/components/GlobalStyles';

export default {
  title: 'Footer Component',
  component: Footer
};

export const FooterComponent = () => (
  <>
    <GlobalStyles />
    <Footer />
  </>
);

FooterComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
};
