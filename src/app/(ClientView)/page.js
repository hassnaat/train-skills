"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Home() {
  const user = useSelector((state) => state.user);
  return (
    <main className={styles.homeSection}>
      <div className={styles.homeSectionLeft}>
        <div className={styles.homeSectionTitle}>
          FIND YOUR MARTIAL ARTS JOURNEY
        </div>
        <div className={styles.homeSectionH1}>Start Your Martial Arts </div>
        <div className={styles.homeSectionH2}>Adventure Today!</div>
        <div className={styles.homeSectionDetails}>
          <div className={styles.DetailsLeft}>
            Explore the world of martial arts with our platform. Connect with
            trainers, master new skills, and achieve your goals.
          </div>
          {!user?.name && (
            <div className={styles.DetailsRight}>
              <Link href="/auth/login" className={styles.DetailsRightBtn}>
                Login Now
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className={styles.homeSectionRight}>
        <Image
          src="/images/client/girl.png"
          alt=""
          width={500}
          height={650}
          className={styles.homeSectionRightImg}
        />
      </div>
    </main>
  );
}
