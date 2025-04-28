import React from 'react';
import Banner from '../components/banner.module.jsx';
import styles from './Home.module.css'; // Import styles từ CSS module
import { FaSearch, FaRoute, FaMapMarkedAlt } from 'react-icons/fa'; // Import icon

function Home() {
    return (
        <>
            <h1 id="header">Trang Chủ</h1>
            <div className={styles['home-container']}> {/* Dùng styles.home-container */}
                <Banner />
                <h3 className={styles['textinfo']}>Dữ liệu của hệ thống hiện tại</h3>
                <div className={styles['stats-container']}>
                  <div className={styles['stat-item']}>
                  <h4>Tỉnh</h4>
                  <p>1</p>
                </div>
                <div className={styles['divider']}></div>
                  <div className={styles['stat-item']}>
                  <h4>Khu vực</h4>
                  <p>1</p>
                </div>
                <div className={styles['divider']}></div>
                  <div className={styles['stat-item']}>
                  <h4>Địa điểm</h4>
                  <p>1083</p>
                </div>
                </div>
            </div>
            <section className={styles.features}>
              <h2 className={styles.title}>Tính năng nổi bật</h2>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <FaSearch className={styles.icon} />
                  <h3>Tìm kiếm địa điểm</h3>
                  <p>Tra cứu nhanh các phòng ban, công trình, khu vực bạn cần tìm.</p>
                </div>
                <div className={styles.featureItem}>
                  <FaRoute className={styles.icon} />
                  <h3>Xem đường đi nhanh nhất</h3>
                  <p>Xác định lộ trình ngắn nhất tới địa điểm mong muốn chỉ trong vài giây.</p>
                </div>
                <div className={styles.featureItem}>
                  <FaMapMarkedAlt className={styles.icon} />
                  <h3>Gợi ý địa điểm</h3>
                  <p>Đề xuất các địa điểm nổi bật, tiện ích, dịch vụ trong khu vực.</p>
                </div>
              </div>
            </section>
            <footer className={styles.footer}>
              <p>© 2025 - Nhóm đồ án hệ thống điều hướng khu vực nội bộ</p>
              <p>Liên hệ: luongvanhanh04042@gmail.com</p>
            </footer>
        </>
    );
}

export default Home;
