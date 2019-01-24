import DesktopNavigation from './desktopNavigation';
import MobileNavigation from './mobileNavigation';
import Links from './links';
import Header from './head';
import Footer from './footer';

// Global layout
export default props => (
  <div>
    <Header />
    <DesktopNavigation />
    <Links />
    <MobileNavigation />
    {props.children}
    {/* Footer color fills transparent space above rocks. 
    This color will depend on page content*/}
    <Footer color={props.color} />
  </div>
);
