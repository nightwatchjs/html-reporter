import ChipWithIcon from '../../src/components/ChipWithIcon';
import { Error } from '../../src/icons';
import GlobalStyles from '../../src/components/GlobalStyles';

export default {
  title: 'Chip With Icon Component',
  component: ChipWithIcon
};

export const ChipWithIconComponent = () => (
  <>
    <GlobalStyles />
    <ChipWithIcon  icon={<Error data-testid="chip-icon" />}>
      Sample Chip
    </ChipWithIcon>
  </>
);

export const ChipWithIconComponentWithTransformText = () => (
  <>
    <GlobalStyles />
    <ChipWithIcon transformText icon={<Error data-testid="chip-icon" />}  >
      Sample Chip
    </ChipWithIcon>
  </>
);

ChipWithIconComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
  browser.expect(component).text.to.equal('Sample Chip');
  browser.expect.element('[data-testid="chip-icon"]').to.be.present;
};

ChipWithIconComponentWithTransformText.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
  browser.expect.element('[data-testid="chip-icon"]').to.be.present;
  browser.expect(component).text.to.equal('sample chip');
};
