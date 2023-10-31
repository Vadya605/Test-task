import { Component, ErrorInfo } from 'react';

import { IErrorBoundaryProps, IErrorBoundaryState } from './interfaces';


class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log('Ошибка', error, errorInfo);
        this.setState({ hasError: true });
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error)
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback
        }
        
        return this.props.children;
    }
}

export default ErrorBoundary;