import { NavLink } from 'react-router-dom';

import styles from './HeaderNav.module.scss';
import classNames from 'classnames';

enum Pages {
  Home = '',
  Phones = '/phones',
  Tablets = '/tablets',
  Accessories = '/accessories',
}

export const HeaderNav: React.FC = () => {
  const setIsActive = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.link, {
      [styles.linkActive]: isActive,
    });

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {Object.entries(Pages).map(([key, path]) => (
          <li className={styles.item} key={key}>
            <NavLink to={path} className={setIsActive}>
              {key}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
