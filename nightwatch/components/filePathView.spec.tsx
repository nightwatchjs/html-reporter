import FilePathView from '../../src/components/FilePathView';
import GlobalStyles from '../../src/components/GlobalStyles';

export default {
    title: "FilePathView Component",
    component: FilePathView
};

export const FilePathViewComponent = () => (
    <>
        <GlobalStyles />
        <FilePathView />
    </>
);

FilePathViewComponent.test = async (browser, { component }) => {
    browser.expect(component).to.be.visible;
  };
  