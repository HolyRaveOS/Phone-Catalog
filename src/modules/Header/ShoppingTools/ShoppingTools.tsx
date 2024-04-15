import { NavLink } from 'react-router-dom';
import { SpriteIcon } from '../../Shared/SpriteIcon';
import { ShoppingCounter } from '../ShoppingCounter';

import styles from './ShoppingTools.module.scss';
import classNames from 'classnames';

export const ShoppingTools: React.FC = () => {
  const getLinkClassNames = ({
    isActive,
    isFavorite = false,
  }: {
    isActive: boolean;
    isFavorite?: boolean;
  }) =>
    classNames(styles.link, {
      [styles.linkActive]: isActive,
      [styles.linkFavorite]: isFavorite,
    });

  return (
    <div className={styles.wrapper}>
      <NavLink
        to="/favorites"
        className={(props) => getLinkClassNames({ ...props, isFavorite: true })}
      >
        <div className={styles.iconWrapper}>
          <SpriteIcon iconName="icon-Favourites" className={styles.icon} />
          <ShoppingCounter
            productsAmount={10}
            className={styles.shoppingCounter}
          />
        </div>
      </NavLink>

      <NavLink to="/cart" className={getLinkClassNames}>
        <div className={styles.iconWrapper}>
          <SpriteIcon iconName="icon-Shopping-bag" className={styles.icon} />
          <ShoppingCounter
            className={styles.shoppingCounter}
            productsAmount={1}
          />
        </div>
      </NavLink>
    </div>
  );
};
