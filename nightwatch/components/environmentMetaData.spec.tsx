import EnvironmentMetadata from '../../src/components/EnvironmentMetadata';
import GlobalStyles from '../../src/components/GlobalStyles';

export default {
    title: 'EnvironmentMetadata Component',
    component: EnvironmentMetadata
};

export const EnvironmentMetadataComponent = (args) => (
    <>
        <GlobalStyles />
        <EnvironmentMetadata meta={args.meta} />
    </>
);

EnvironmentMetadataComponent.args = {
    meta: {
        device: 'desktop',
        browserName: 'chrome',
        browserVersion: '90.0.1234.5678', // Adjusted to a more detailed version number for testing
        operatingSystemName: 'Windows',
        tags: ['tag1', 'tag2'],
        time: {
            hours: 1,
            minutes: 30,
            seconds: 0
        },
        diff: '10'
    }
};

EnvironmentMetadataComponent.test = async (browser, { component }) => {
    browser.expect(component).to.be.visible;
    browser.expect(component).text.to.contain('desktop');
    browser.expect(component).text.to.contain('chrome');
    browser.expect(component).text.to.contain('90');
    browser.expect(component).text.to.contain('Tag1');
    browser.expect(component).text.to.contain('Tag2');
    browser.expect(component).text.to.contain('1 hr 30 min 0 sec');
    browser.expect(component).text.to.contain('10% diff');
};