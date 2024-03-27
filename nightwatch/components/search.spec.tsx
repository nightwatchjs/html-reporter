import GlobalStyles from '../../src/components/GlobalStyles';
import Search from '../../src/components/Search';


export default {
    title: "Search Component",
    component: Search
};

export const SearchComponent = () => (
    <>
        <GlobalStyles />
        <Search />
    </>
);

SearchComponent.test = async (browser, { component }) => {
    browser.expect(component).to.be.visible;
    browser.click(component);
};