import Tag from '../../src/components/Tags';
import GlobalStyles from '../../src/components/GlobalStyles';

export default {
  title: 'Tag Component',
  component: Tag
};

export const TagComponent = () => (
  <>
      <GlobalStyles />
      <Tag>
        H1 Tag
      </Tag>
  </>
);

TagComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
};
