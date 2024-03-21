"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useAuth } from "@/app/hooks/useAuth";

const profileLinks = {
  trainee: "/trainee/profile",
  trainer: "/trainer/profile",
  manager: "/manager/profile",
};

const MobileNav = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [submenu, setSubmenu] = useState(true);
  const [modal, setModal] = useState("");
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const pathname = usePathname();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <nav className={styles.mobnavWrap}>
      <div className={styles.mobnavHeader}>
        <Link onClick={() => setCollapsed(true)} href="/">
          <Image
            src="/images/logos/logo.png"
            className={styles.navbarBrand}
            alt=""
            width={150}
            height={22}
          />
        </Link>

        <div
          className={`${styles.navbarToggle}`}
          onClick={() => setCollapsed(!collapsed)}
        >
          <div className={styles.navbarToggleBar}></div>
          <div className={styles.navbarToggleBar}></div>
          <div className={styles.navbarToggleBar}></div>
        </div>
      </div>
      <div
        className={`${styles.mobnav_menu} ${
          !collapsed ? styles.mobnavExpanded : ""
        }`}
      >
        {" "}
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
              onClick={() =>
                setSubmenu(submenu === "grades" ? false : "grades")
              }
            >
              Grade
            </Link>
            <div
              className={`${styles.submenuWrap} ${
                submenu === "grades" ? styles.expandedSubmenu : ""
              }`}
            >
              <Link
                onClick={() => setCollapsed(true)}
                href={`/trainee/grades/yellow`}
                className={styles.navbarItem}
              >
                Yellow
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href={`/trainee/grades/orange`}
                className={`${styles.navbarItem} `}
              >
                Orange
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href={`/trainee/grades/blue`}
                className={styles.navbarItem}
              >
                Blue
              </Link>
            </div>
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
              onClick={() =>
                setSubmenu(submenu === "grades" ? false : "grades")
              }
            >
              Grade
            </Link>
            <div
              className={`${styles.submenuWrap} ${
                submenu === "grades" ? styles.expandedSubmenu : ""
              }`}
            >
              <Link
                onClick={() => setCollapsed(true)}
                href={`/trainer/grades/yellow`}
                className={styles.navbarItem}
              >
                Yellow
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href={`/trainer/grades/orange`}
                className={`${styles.navbarItem} `}
              >
                Orange
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href={`/trainer/grades/blue`}
                className={styles.navbarItem}
              >
                Blue
              </Link>
            </div>
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
              onClick={() =>
                setSubmenu(submenu === "grades" ? false : "grades")
              }
            >
              Grade
            </Link>
            <div
              className={`${styles.submenuWrap} ${
                submenu === "grades" ? styles.expandedSubmenu : ""
              }`}
            >
              <Link
                onClick={() => setCollapsed(true)}
                href={`/manager/grades/yellow`}
                className={styles.navbarItem}
              >
                Yellow
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href={`/manager/grades/orange`}
                className={`${styles.navbarItem} `}
              >
                Orange
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href={`/manager/grades/blue`}
                className={styles.navbarItem}
              >
                Blue
              </Link>
            </div>
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
              href="#"
              className={`${styles.navbarItem} ${
                pathname.startsWith("/grades") ? styles.navbarItemActive : ""
              }`}
              onClick={() =>
                setSubmenu(submenu === "grades" ? false : "grades")
              }
            >
              Grade
            </Link>
            <div
              className={`${styles.submenuWrap} ${
                submenu === "grades" ? styles.expandedSubmenu : ""
              }`}
            >
              <Link
                onClick={() => setCollapsed(true)}
                href={`/grades/yellow`}
                className={styles.navbarItem}
              >
                Yellow
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href={`/grades/orange`}
                className={`${styles.navbarItem} `}
              >
                Orange
              </Link>
              <Link
                onClick={() => setCollapsed(true)}
                href={`/grades/blue`}
                className={styles.navbarItem}
              >
                Blue
              </Link>
            </div>
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
          <div className={styles.navbarProfileOuterWrap}>
            <div
              className={styles.navbarProfileWrap}
              onClick={() =>
                setSubmenu(submenu === "profile" ? false : "profile")
              }
            >
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
            <div
              className={`${styles.submenuWrap} ${
                submenu === "profile" ? styles.expandedSubmenu : ""
              }`}
            >
              <Link
                onClick={() => setCollapsed(true)}
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
                {
                  <div className={styles.profileModalItemRight}>
                    Profile Settings
                  </div>
                }
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
