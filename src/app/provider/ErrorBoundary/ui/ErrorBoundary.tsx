import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import {PageError} from '@widgets/PageError';

interface Props {
  children: ReactNode;
}

interface ErrorBoundaryState {
hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, ErrorBoundaryState> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return <Suspense fallback={''}><PageError /></Suspense>;
    }

    return children;
  }
}
