import Footer from '../../src/components/Footer';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalStyles from '../../src/components/GlobalStyles';
import { GlobalContext } from '../../src/contexts/GlobalContext';

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

FooterComponent.test = async (browser) => {
  browser.pause(1000);
  // expect(FooterComponent).to.be.visible;
};
