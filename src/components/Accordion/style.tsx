import * as Accordion from '@radix-ui/react-accordion';
import styled from 'styled-components';
import { Add, Cancel, Remove, CheckCircle } from '../../icons/index';

export const AccordionRoot = styled(Accordion.Root)`
  background: var(--color-grey-20);
  display: flex;
  flex-direction: column;
  gap: 2px;
  gap: 8px;
`;

export const AccordionItem = styled(Accordion.Item)`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-50);
  &:focus-within {
    position: relative;
    box-shadow: 0 0 0 2px var(--color-primary-50);
  }
`;

export const AccordionHeader = styled(Accordion.Header)`
  display: flex;
  padding: 8px;
  background: var(--color-grey-20);
  border-bottom: 1px solid var(--color-grey-50);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
`;

export const StyledAccordionTrigger = styled(Accordion.Trigger)`
  all: unset;
  display: flex;
  align-items: center;
  flex: 0 0 100%;
  font-family: inherit;
  background-color: transparent;
`;

export const AccordionHeaderContent = styled.div`
  display: flex;
  gap: 5px;
  margin-right: auto;
  align-items: center;
`;

export const StyledAccordionContent = styled(Accordion.Content)`
  background: var(--color-grey-10);
`;

export const CancelIcon = styled(Cancel)`
  font-size: var(--font-size-16);
  color: var(--color-red-50);
`;

export const RemoveIcon = styled(Remove)`
  font-size: var(--font-size-16);
  color: var(--color-grey-100);
`;

export const AddIcon = styled(Add)`
  font-size: var(--font-size-16);
  color: var(--color-grey-100);
`;

export const CheckCircleIcon = styled(CheckCircle)`
  font-size: var(--font-size-16);
  color: var(--color-green-50);
`;
