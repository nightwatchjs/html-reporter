import ErrorFallback from '../../src/components/ErrorFallback';
import GlobalStyles from '../../src/components/GlobalStyles';

export default {
  title: 'ErrorFallback Component',
  component: ErrorFallback,
};

export const ErrorFallbackComponent = () => (
  <>
    <GlobalStyles />
    <ErrorFallback error={new Error("Test error")} resetErrorBoundary={() => {}} />
  </>
);

ErrorFallbackComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
};