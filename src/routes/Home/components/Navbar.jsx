import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Navbar.scss';

const Navbar = ({ toggle, active }) =>
  (
    <section className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.brand}>
          <a href="#!">Logo</a>
        </div>
        <nav>
          <div className={styles.navMobile}>
            <a
              id={styles.navToggle}
              onClick={toggle}
              className={active ? styles.active : ''}
              href="#"
            > <span />
            </a>
          </div>
          <ul id={active ? styles.displayList : ''} className={styles.navList}>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  );

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Navbar;
