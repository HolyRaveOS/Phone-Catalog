import { useRef } from 'react';
import { HeaderNav } from '../HeaderNav';
import { ShoppingTools } from '../ShoppingTools';
import { CSSTransition } from 'react-transition-group';

import styles from './MobileMenu.module.scss';

interface Props {
  isMenuOpen: boolean;
}

export const MobileMenu: React.FC<Props> = ({ isMenuOpen }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isMenuOpen}
      timeout={300}
      classNames={{
        enter: styles.itemEnter,
        enterActive: styles.itemEnterActive,
        exit: styles.itemExit,
        exitActive: styles.itemExitActive,
      }}
      unmountOnExit
    >
      <div ref={nodeRef} className={styles.mobileMenu}>
        <HeaderNav />
        <ShoppingTools />
      </div>
    </CSSTransition>
  );
};
