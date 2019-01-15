import Navigation from './navigation';
import Header from './head';
import Footer from './footer';

// Global layout
export default ({ children }) => (
  <div>
    <Header />
    <Navigation />
    {children}
    <Footer />
  </div>
);
