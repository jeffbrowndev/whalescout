import DesktopNavigation from './desktopNavigation';
import MobileNavigation from './mobileNavigation';
import styles from '../scss/app.scss';

const Navigation = () => {
  return (
    <div>
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
};

export default Navigation;
