"use client";
import Navbar from "../(ClientView)/components/Navbar/Navbar";
import ScreenLoader from "../Components/ScreenLoader/ScreenLoader";
import { useRoleAuth } from "../hooks/useRoleAuth";
import styles from "./page.module.css";

export default function RootLayout({ children }) {
  const isLoading = useRoleAuth(["manager"]);

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
