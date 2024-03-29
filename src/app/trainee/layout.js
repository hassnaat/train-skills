"use client";
import Navbar from "../Components/Navbar/Navbar";
import ScreenLoader from "../Components/ScreenLoader/ScreenLoader";
import { useRoleAuth } from "../hooks/useRoleAuth";
import styles from "./page.module.css";

export default function RootLayout({ children }) {
  const isLoading = useRoleAuth(["trainee"]);

  if (isLoading) {
    return <ScreenLoader />;
  }
  return (
    <html lang="en">
      <body>
        <div className={styles.layoutWrap}>
          <div className={styles.navbarWrap}>
            <Navbar />
          </div>
          <div className={styles.contentWrap}>{children}</div>
        </div>
      </body>
    </html>
  );
}
