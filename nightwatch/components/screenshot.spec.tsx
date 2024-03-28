import GlobalStyles from '../../src/components/GlobalStyles';
import Screenshot from '../../src/components/Screenshot';

export default {
    title: "ScreenshotComponent",
    component: Screenshot
};


export const ScreenshotComponent = () => (
    <>
        <GlobalStyles />
        <Screenshot />
    </>
);

ScreenshotComponent.test = async (browser,{component}) => {
  
    browser.expect(component).to.be.present.before(1000);

    
    browser.getCssProperty(component, 'height', function(result) {
        this.assert.ok(result.value !== '0px', 'Check if Screenshot height is not zero');
    });

};
