import GlobalStyles from '../../src/components/GlobalStyles';
import Separator from '../../src/components/Separator';


export default {
    title: "SeparatorComponent",
    component: Separator
};

export const SeparatorComponent = () => (
    <>
        <GlobalStyles />
        <Separator />
    </>
);

SeparatorComponent.test = async (browser, { component }) => {
    browser.expect(component).to.be.visible;
    browser.click(component);
};