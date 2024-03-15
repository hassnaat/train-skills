"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import FormGroup from "@/app/(ClientView)/components/CustomTextField/FormGroup";

const Profile = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
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
              <FormGroup required="true" label="Name" placeholder="Mathew" />
            </div>
            <div className={styles.profilePageFormCol}>
              {" "}
              <FormGroup
                required="true"
                label="Surname"
                placeholder="Anderson"
              />
            </div>
          </div>
          <div className={styles.profilePageFormRow}>
            <div className={styles.profilePageFormCol}>
              <FormGroup required="true" label="Age" placeholder="32 Years" />
            </div>
            <div className={styles.profilePageFormCol}>
              {" "}
              <FormGroup
                required="true"
                label="Email"
                placeholder="mathewanderson@gmail.com"
              />
            </div>
          </div>
          <div className={styles.profileBtnWrap}>
            {" "}
            <div className={styles.logoutBtn}>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
