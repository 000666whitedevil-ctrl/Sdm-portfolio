import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class PortfolioErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio render failed:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{ minHeight: '100vh', padding: '48px 24px', background: '#11110f', color: '#eeece6', fontFamily: 'Arial, sans-serif' }}>
          <p style={{ color: '#f07845', letterSpacing: '0.16em', fontSize: 11 }}>PORTFOLIO · DIAGNOSTIC</p>
          <h1 style={{ fontSize: 'clamp(32px, 8vw, 64px)' }}>The page hit a rendering error.</h1>
          <p style={{ color: '#c7c2b8', lineHeight: 1.7 }}>The deployment is reachable, but the portfolio could not finish rendering. This message helps identify the exact browser-side failure.</p>
          <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', padding: 16, background: '#211d19', color: '#ffb08c', border: '1px solid #60402f', borderRadius: 8 }}>{String(this.state.error?.stack || this.state.error)}</pre>
          <a style={{ color: '#f07845' }} href="mailto:sdmishra1000@gmail.com">Contact Shiv</a>
        </main>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <PortfolioErrorBoundary>
        <App />
      </PortfolioErrorBoundary>
    </React.StrictMode>
  );
} else {
  document.body.innerHTML = '<main style="padding:32px;color:white;background:#111">Portfolio error: root element #root was not found.</main>';
}
