import React from 'react';
import { GitHub } from '../../icons';
import { Text } from '../Text';
import { Action, Button, ErrorAlert, ErrorContext, Wrapper } from './style';
import { makeLink } from './utils';

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Wrapper>
      <ErrorAlert role="alert">
        <Text fontSize={24} lineHight={36}>
          Something went wrong 🦉
        </Text>
        <ErrorContext style={{ fontFamily: 'monospace' }}>{error.stack}</ErrorContext>
        <Action>
          <Button onClick={resetErrorBoundary}>Try again</Button>
          <Button onClick={() => makeLink(error.stack)}>
            <GitHub />
            Report issue{' '}
          </Button>
        </Action>
      </ErrorAlert>
    </Wrapper>
  );
};

export default ErrorFallback;
