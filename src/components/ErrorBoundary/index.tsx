import { Component, ErrorInfo, ReactNode, cloneElement } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log('Ошибка', error, errorInfo);
        this.setState({ hasError: true });
    }

    handleRetry = () => {
        console.log('Retry');
        
        this.setState({
            hasError: false,
        });
    }

    render() {
        if (this.state.hasError) {
            // return this.props.fallback
            return cloneElement(this.props.fallback as React.ReactElement, this.handleRetry);
        }
        return this.props.children;
    }
}

export default ErrorBoundary;