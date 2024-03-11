import { Component, useState } from 'react';
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

FilterDropdownComponent.test = async (browser, { component }) => {
  const filterDropdownButton = element('button[aria-label="Customize options"]');
  
  // Testing whether the button is visible
  browser.expect(filterDropdownButton).to.be.visible;
  // Testing whether the button is clickable
  browser.element('button[aria-label="Customize options"]').click();
  // Testing whether the button shows "All Tests" as default selection
  browser.expect(filterDropdownButton).text.to.equal('All Tests');
};
