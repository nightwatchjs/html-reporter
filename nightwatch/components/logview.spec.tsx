import LogView from '../../src/components/LogView';
import GlobalStyles from '../../src/components/GlobalStyles';


export default {
    title: 'LogView Component',
    component: LogView
};

export const LogViewComponent = (args) => (
    <>
        <GlobalStyles />
        <LogView log={args.log} />
    </>
);

LogViewComponent.args = {
    log: [
        ['2024-03-10T10:00:00', 'GET /api/data', '{ "data": "example" }'],
        ['2024-03-10T10:01:00', 'POST /api/update', '{ "status": "success" }']
    ]
};


LogViewComponent.test = async (browser, { component }) => {
    browser.expect(component).to.be.visible;
    browser.expect(component).text.to.contain('GET /api/data');
};
