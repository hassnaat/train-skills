"use client";
import Image from "next/image";
import styles from "./page.module.css";
import FormGroup from "@/app/(ClientView)/components/CustomTextField/FormGroup";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser } from "@/services/user";
import { useAuth } from "@/app/hooks/useAuth";

const TrainerCard = ({ name, image, address }) => {
  return (
    <div className={styles.trainerCardWrap}>
      <Image
        src={image}
        alt=""
        width={40}
        height={40}
        className={styles.trainerCardImage}
      />
      <div className={styles.trainerCardRight}>
        <div className={styles.trainerCardName}>{name}</div>
        <div className={styles.trainerCardLocation}>
          <Image
            src="/images/client/location.png"
            alt=""
            width={16}
            height={16}
            className={styles.trainerCardLocationIcon}
          />
          <div className={styles.trainerCardLocationText}>{address}</div>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const [data, setData] = useState();
  const { logout } = useAuth();
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
                placeholder={data?.name}
              />
            </div>
            <div className={styles.profilePageFormCol}>
              {" "}
              <FormGroup
                required="true"
                label="Surname"
                placeholder={data?.firstname}
              />
            </div>
          </div>
          <div className={styles.profilePageFormRow}>
            <div className={styles.profilePageFormCol}>
              <FormGroup
                required="true"
                label="License Number"
                placeholder={data?.licence_number}
              />
            </div>
            <div className={styles.profilePageFormCol}>
              {" "}
              <FormGroup
                required="true"
                label="Phone Number"
                placeholder="+202 111 222 99"
              />
            </div>
          </div>
          <div className={styles.profilePageFormRow}>
            {" "}
            <div className={styles.profilePageFormCol}>
              {" "}
              <FormGroup
                required="true"
                label="Email"
                placeholder={data?.email}
              />
            </div>
          </div>
          <div className={styles.profilePageFormRow}>
            <div className={styles.profilePageFormCol}>
              <FormGroup
                required="true"
                label="Date Of Birth"
                placeholder="13 Jan, 2001"
              />
            </div>
            <div className={styles.profilePageFormCol}>
              {" "}
              <FormGroup
                required="true"
                label="Current Grade"
                placeholder={data?.grade}
              />
            </div>
          </div>
          {/* <div className={styles.profileCardSubheading}>Trainers</div>
          <div className={styles.profilePageFormRow}>
            <div className={styles.profilePageFormCol}>
              <TrainerCard
                image="/images/client/trainer.png"
                name="Barbara McCoy"
                address="St. Kitts & Nevis"
              />
            </div>
            <div className={styles.profilePageFormCol}>
              {" "}
              <TrainerCard
                image="/images/client/trainer.png"
                name="Barbara McCoy"
                address="St. Kitts & Nevis"
              />
            </div>
          </div> */}
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
