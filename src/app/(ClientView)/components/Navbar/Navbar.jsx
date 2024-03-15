"use client";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import RiseModal from "../RiseModal/RiseModal";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";

const GradeModal = () => {
  return (
    <div className={styles.gradeModal}>
      <Link href="/trainee/grades/yellow" className={styles.gradeModalItem}>
        Yellow
      </Link>
      <Link
        href="/trainee/grades/orange"
        className={`${styles.gradeModalItem} ${styles.gradeModalItemBordered}`}
      >
        Orange
      </Link>
      <Link href="/trainee/grades/blue" className={styles.gradeModalItem}>
        Blue
      </Link>
    </div>
  );
};

const profileLinks = {
  trainee: "/trainee/profile",
  trainer: "/trainer/profile",
  manager: "#",
};

const ProfileModal = ({ user }) => {
  const { logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <div className={styles.profileModal}>
      <Link
        href={profileLinks[user?.type] ?? "#"}
        className={styles.profileModalItem}
      >
        <Image
          src="/images/client/profile-icon.png"
          className={styles.profileModalIcon}
          alt=""
          width={15}
          height={15}
        />
        {<div className={styles.profileModalItemRight}>Profile Settings</div>}
      </Link>
      <div className={styles.profileModalItem} onClick={handleLogout}>
        <Image
          src="/images/client/logout-icon.png"
          className={styles.profileModalIcon}
          alt=""
          width={15}
          height={15}
        />
        <div
          className={styles.profileModalItemRight}
          style={{ color: "rgba(213, 25, 57, 1)" }}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true);
  const [modal, setModal] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <nav
      className={`${styles.navbarWrapper} ${
        collapsed ? styles.navbarCollapsed : styles.navbarExpanded
      }`}
    >
      <Image
        src="/images/logos/logo.png"
        className={styles.navbarBrand}
        alt=""
        width={215}
        height={32}
      />
      {user?.type === "trainee" && (
        <div className={styles.navbarItems}>
          <Link href="/" className={styles.navbarItem}>
            Home
          </Link>
          <Link
            href="#"
            className={styles.navbarItem}
            onMouseEnter={() => setModal("grades")}
            onMouseLeave={() => setModal("")}
          >
            Grad
            <RiseModal
              open={modal === "grades"}
              setOpen={setModal}
              onClose={() => {}}
              style={{ left: "-50px" }}
            >
              <GradeModal />
            </RiseModal>
          </Link>
          <Link href="/trainee/mastery" className={styles.navbarItem}>
            Mastery
          </Link>
          <Link href="/contact" className={styles.navbarItem}>
            Contact
          </Link>
        </div>
      )}
      {user?.type === "trainer" && (
        <div className={styles.navbarItems}>
          <Link href="/" className={styles.navbarItem}>
            Home
          </Link>

          <Link href="/trainer/all-trainees" className={styles.navbarItem}>
            Trainees
          </Link>
          <Link href="/contact" className={styles.navbarItem}>
            Contact
          </Link>
        </div>
      )}
      {user?.type === "manager" && (
        <div className={styles.navbarItems}>
          <Link href="/" className={styles.navbarItem}>
            Home
          </Link>
          <Link href="/manager/all-trainers" className={styles.navbarItem}>
            Trainers
          </Link>
          <Link href="/contact" className={styles.navbarItem}>
            Contact
          </Link>
        </div>
      )}
      {!user?.type && (
        <div className={styles.navbarItems}>
          <Link href="/" className={styles.navbarItem}>
            Home
          </Link>
          <Link href="/contact" className={styles.navbarItem}>
            Contact
          </Link>
        </div>
      )}

      {!user?.type && (
        <Link href="/auth/login" className={styles.navbarLoginBtn}>
          Login
        </Link>
      )}
      {user?.type && (
        <div
          className={styles.navbarProfileWrap}
          onMouseEnter={() => setModal("profile")}
          onMouseLeave={() => setModal("")}
        >
          <RiseModal
            open={modal === "profile"}
            setOpen={setModal}
            onClose={() => {}}
            style={{ left: "-30px", top: "48px" }}
          >
            <ProfileModal user={user} />
          </RiseModal>

          <div className={styles.navbarProfileImageWrap}>
            <Image
              src="/images/client/profile.png"
              className={styles.navbarProfileImage}
              alt=""
              width={48}
              height={48}
            />
          </div>
          <div className={styles.navbarProfileRight}>
            <div className={styles.navbarProfileName}>
              {user.name}{" "}
              <Image
                src="/images/client/drop-down.png"
                className={styles.navbarProfiledrop}
                alt=""
                width={8}
                height={6}
              />
            </div>
            <div className={styles.navbarProfileGrade}>{user.grade} Grade</div>
          </div>
        </div>
      )}

      <div
        className={`${styles.navbarToggle}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className={styles.navbarToggleBar}></div>
        <div className={styles.navbarToggleBar}></div>
        <div className={styles.navbarToggleBar}></div>
      </div>
    </nav>
  );
}
