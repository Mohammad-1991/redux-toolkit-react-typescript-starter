import React, { ReactNode } from "react";

// uses react calss componet to have access to component lifecycle in order to use componentDidCatch
// will return erro componet while erro happend otherwise Renders the children as normal
type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error or perform other actions here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ hasError: true });
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    // Reset the hasError state when the children prop changes
    if (this.state.hasError && prevProps.children !== this.props.children) {
      this.setState({ hasError: false });
    }
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      // replace this with real component / renders on error
      return <h2>Oops! we are under maintain</h2>;
    }

    // Render the children as normal
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
