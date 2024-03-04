import Tags from '../../src/components/Tags';
import GlobalStyles from '../../src/components/GlobalStyles';

export default {
  title: 'Tag Component',
  component: Tags
};

export const TagsComponent = () => (
  <>
      <GlobalStyles />
      <Tags>
        Sample Tag
      </Tags>
  </>
);

TagsComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
  browser.expect(component).text.to.equal("Sample Tag");
};
