"use client";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import RiseModal from "../../(ClientView)/components/RiseModal/RiseModal";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";

const GradeModal = ({ role, setCollapsed }) => {
  return (
    <div className={styles.gradeModal}>
      <Link
        onClick={() => setCollapsed(true)}
        href={`/${role}/grades/yellow`}
        className={styles.gradeModalItem}
      >
        Yellow
      </Link>
      <Link
        onClick={() => setCollapsed(true)}
        href={`/${role}/grades/orange`}
        className={`${styles.gradeModalItem} ${styles.gradeModalItemBordered}`}
      >
        Orange
      </Link>
      <Link
        onClick={() => setCollapsed(true)}
        href={`/${role}/grades/blue`}
        className={styles.gradeModalItem}
      >
        Blue
      </Link>
    </div>
  );
};

const profileLinks = {
  trainee: "/trainee/profile",
  trainer: "/trainer/profile",
  manager: "/manager/profile",
};

const ProfileModal = ({ user, setCollapsed }) => {
  const { logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <div className={styles.profileModal}>
      <Link
        // onClick={() => setCollapsed(true)}
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
  const pathname = usePathname();

  return (
    <div className={styles.navbarOuterWrap}>
      <div className={styles.navbarPlaceholder}>
        <nav
          className={`${styles.navbarWrapper} ${
            collapsed ? styles.navbarCollapsed : styles.navbarExpanded
          }`}
        >
          <Link onClick={() => setCollapsed(true)} href="/">
            <Image
              src="/images/logos/logo.png"
              className={styles.navbarBrand}
              alt=""
              width={215}
              height={32}
            />
          </Link>
          {user?.type === "trainee" && (
            <div className={styles.navbarItems}>
              <Link
                onClick={() => setCollapsed(true)}
                href="/"
                className={`${styles.navbarItem} ${
                  pathname === "/" ? styles.navbarItemActive : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="#"
                className={`${styles.navbarItem} ${
                  pathname.startsWith("/trainee/grades")
                    ? styles.navbarItemActive
                    : ""
                }`}
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
                  <GradeModal role="trainee" setCollapsed={setCollapsed} />
                </RiseModal>
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href="/contact"
                className={`${styles.navbarItem} ${
                  pathname === "/contact" ? styles.navbarItemActive : ""
                }`}
              >
                Contact
              </Link>
            </div>
          )}
          {user?.type === "trainer" && (
            <div className={styles.navbarItems}>
              <Link
                onClick={() => setCollapsed(true)}
                href="/"
                className={`${styles.navbarItem} ${
                  pathname === "/" ? styles.navbarItemActive : ""
                }`}
              >
                Home
              </Link>

              <Link
                onClick={() => setCollapsed(true)}
                href="/trainer/all-trainees"
                className={`${styles.navbarItem} ${
                  pathname === "/trainer/all-trainees"
                    ? styles.navbarItemActive
                    : ""
                }`}
              >
                Trainees
              </Link>
              <Link
                href="#"
                className={`${styles.navbarItem} ${
                  pathname.startsWith("/trainer/grades")
                    ? styles.navbarItemActive
                    : ""
                }`}
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
                  <GradeModal role="trainer" setCollapsed={setCollapsed} />
                </RiseModal>
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href="/contact"
                className={`${styles.navbarItem} ${
                  pathname === "/contact" ? styles.navbarItemActive : ""
                }`}
              >
                Contact
              </Link>
            </div>
          )}
          {user?.type === "manager" && (
            <div className={styles.navbarItems}>
              <Link
                onClick={() => setCollapsed(true)}
                href="/"
                className={`${styles.navbarItem} ${
                  pathname === "/" ? styles.navbarItemActive : ""
                }`}
              >
                Home
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href="/manager/all-trainers"
                className={`${styles.navbarItem} ${
                  pathname === "/manager/all-trainers"
                    ? styles.navbarItemActive
                    : ""
                }`}
              >
                Trainers
              </Link>
              <Link
                href="#"
                className={`${styles.navbarItem} ${
                  pathname.startsWith("/manager/grades")
                    ? styles.navbarItemActive
                    : ""
                }`}
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
                  <GradeModal role="manager" setCollapsed={setCollapsed} />
                </RiseModal>
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href="/manager/pending-validations"
                className={`${styles.navbarItem} ${
                  pathname === "/manager/pending-validations"
                    ? styles.navbarItemActive
                    : ""
                }`}
              >
                Pending Validations
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href="/contact"
                className={`${styles.navbarItem} ${
                  pathname === "/contact" ? styles.navbarItemActive : ""
                }`}
              >
                Contact
              </Link>
            </div>
          )}
          {!user?.type && (
            <div className={styles.navbarItems}>
              <Link
                onClick={() => setCollapsed(true)}
                href="/"
                className={`${styles.navbarItem} ${
                  pathname === "/" ? styles.navbarItemActive : ""
                }`}
              >
                Home
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href="/contact"
                className={`${styles.navbarItem} ${
                  pathname === "/contact" ? styles.navbarItemActive : ""
                }`}
              >
                Contact
              </Link>
            </div>
          )}

          {!user?.type && (
            <Link
              onClick={() => setCollapsed(true)}
              href="/auth/login"
              className={styles.navbarLoginBtn}
            >
              Login
            </Link>
          )}
          {user?.type && (
            <div
              className={styles.navbarProfileWrap}
              onClick={() => setModal(modal === "profile" ? "" : "profile")}
              onMouseEnter={() => setModal("profile")}
              onMouseLeave={() => setModal("")}
            >
              <RiseModal
                open={modal === "profile"}
                setOpen={setModal}
                onClose={() => {}}
                style={{ left: "-30px", top: "48px" }}
              >
                <ProfileModal user={user} setCollapsed={setCollapsed} />
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
                <div className={styles.navbarProfileGrade}>
                  {user.grade} Grade
                </div>
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
      </div>
    </div>
  );
}
