import { useState } from 'react';
import FilterDropdown from '../../src/components/FilterDropdown';
import GlobalStyles from '../../src/components/GlobalStyles';
import { GlobalContextProvider } from '../utils/TestGlobalContextProvider';

export default {
  title: 'FilterDropdown Component',
  component: FilterDropdown
};

export const FilterDropdownComponent = () => {
  const [filterContext, setFilterContext] = useState('All Tests');

  return (
    <>
      <GlobalContextProvider
        value={{
          metadata: { date: '2022-12-21T09:07:54.770Z' }
        }}>
        <GlobalStyles />
        <FilterDropdown filterContext={filterContext} setFilterContext={setFilterContext}/>
      </GlobalContextProvider>
    </>
  );
};

FilterDropdownComponent.test = async (browser,{component}) => {
  const filterDropdownButton = element('button[aria-label="Customize options"]');
  // const filterDropDownOptions=element('div[data-radix-collection-item]');
  browser.expect(component).to.be.visible;
  browser.element.find('button[aria-label="Customize options"]').click();
  browser.expect(filterDropdownButton).text.to.equal('All Tests');
  browser.waitForElementVisible('div[data-radix-collection-item]', 1000, 'Dropdown options are visible');

// Retrieve all dropdown options with the specified role
browser.elements('css selector', 'div[role="menuitemradio"]', function(result) {
  const allOptions = result.value;
  const expectedOptions = ['All Tests', 'Passed', 'Failed', 'Skipped']; // Your expected options

  // Assert that the number of found options matches the number of expected options
  browser.assert.equal(allOptions.length, expectedOptions.length, 'The number of dropdown options matches expected.');

  allOptions.forEach(function(element) {
    // Extract the web element ID using the W3C WebDriver standard key
    const webElementId = element['element-6066-11e4-a52e-4f735466cecf'];

    // Use the web element ID to retrieve the text of the element
    browser.elementIdText(webElementId, function(textResult) {
      const optionText = textResult.value.trim();
      console.log('Option text:', optionText); // Logging option text for debugging

      // Assert that the option text is as expected
      // Note: This assumes the order in expectedOptions matches the order in the dropdown
      const expectedText = expectedOptions[allOptions.indexOf(element)];
      browser.assert.equal(optionText, expectedText, `Option text "${optionText}" matches expected: "${expectedText}"`);
    });
  });
});

};
