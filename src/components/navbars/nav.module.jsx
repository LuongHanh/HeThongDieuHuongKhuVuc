import styles from './nav.module.css'
import SearchBar from '../search.module'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div id={styles.nav}>  
        <div className={styles.info}>
          <div className={`${styles.navItem} ${styles.icon}`}>
            <img src="/favicon.png" alt="" />
          </div>
          <div className={`${styles.navItem} ${styles.title}`}>
            <p>Hệ thống điều hướng khu vực</p>
          </div>
        </div>
        <SearchBar placeholder="Tìm kiếm..." />
        <div className={styles.navItems}>
          <div className={styles.navItem}>
            <a href="/">Trang Chủ</a>
          </div>
          <div className={styles.navItem}>
            <a href="/ChooseMap">Chọn bản đồ</a>
          </div>
          <div className={styles.navItem}>
            <a href="/Map">Bản Đồ</a>
          </div>
          <div className={styles.navItem}>
            <a href="/Admin">Admin</a>
          </div>
        </div>
    </div>
  )
}
export default Nav