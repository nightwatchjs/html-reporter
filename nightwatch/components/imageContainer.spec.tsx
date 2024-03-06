import ImageContainer from "../../src/components/ImageContainer";
import GlobalStyles from '../../src/components/GlobalStyles';

export default {
  title: 'ImageContainer Component',
  component: ImageContainer
};

export const ImageContainerComponent = () => (
  <>
      <GlobalStyles />
      <ImageContainer imageType="Baseline" imgPath={"imageUrl"} />
  </>
);

ImageContainerComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
};
