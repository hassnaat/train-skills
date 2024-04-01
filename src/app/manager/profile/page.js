"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import FormGroup from "@/app/(ClientView)/components/CustomTextField/FormGroup";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/hooks/useAuth";
import { getUser } from "@/services/user";
import { calculateAge } from "@/helper/date";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const { logout } = useAuth();
  const handleBack = () => {
    router.back();
  };
  const getProfile = async () => {
    try {
      const response = await getUser();
      setData(response.data);
    } catch (error) {}
  };

  const handleLogout = () => {
    logout();
    router.replace("/");
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className={styles.profilePage}>
      <div className={styles.BackBtn} onClick={handleBack}>
        <Image
          src="/images/client/back-arrow.png"
          alt=""
          width={16}
          height={8}
          className={styles.backBtnIcon}
        />
        Back To Previous{" "}
      </div>
      <div className={styles.profileBox}>
        <div className={styles.profileImageGroup}>
          <div className={styles.profileImageWrap}>
            <Image
              src="/images/client/profile.png"
              alt=""
              width={100}
              height={100}
              className={styles.profileImage}
            />
          </div>
          <Image
            src="/images/client/add-image.png"
            alt=""
            width={36}
            height={36}
            className={styles.addImage}
          />
        </div>
        <div className={styles.profilePageForm}>
          <div className={styles.profilePageFormRow}>
            <div className={styles.profilePageFormCol}>
              <FormGroup
                required="true"
                label="Name"
                placeholder={data?.firstname}
              />
            </div>
            <div className={styles.profilePageFormCol}>
              {" "}
              <FormGroup
                required="true"
                label="Surname"
                placeholder={data?.name}
              />
            </div>
          </div>
          <div className={styles.profilePageFormRow}>
            <div className={styles.profilePageFormCol}>
              <FormGroup
                required="true"
                label="Age"
                placeholder={`${calculateAge(data?.birthdate)}`}
              />
            </div>
            <div className={styles.profilePageFormCol}>
              {" "}
              <FormGroup
                required="true"
                label="Email"
                placeholder={data?.email}
              />
            </div>
          </div>
          <div className={styles.profileBtnWrap}>
            {" "}
            <div className={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
