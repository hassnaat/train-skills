import Navbar from "../Components/Navbar/Navbar";
import styles from "./page.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.clientWrap}>
          <div className={styles.navbarWrap}>
            <Navbar />
          </div>
          <div className={styles.contentWrap}>{children}</div>
        </div>
      </body>
    </html>
  );
}
