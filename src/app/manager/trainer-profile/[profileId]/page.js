"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CustomTable from "@/app/Components/CustomTable/CustomTable";
import ReportIcon from "@mui/icons-material/Report";
import { getSingleTrainerForManager } from "@/services/manager/trainers";

const Profile = ({ params }) => {
  const router = useRouter();
  const [trainer, setTrainer] = useState({});
  const handleBack = () => {
    router.back();
  };
  const getTrainer = async () => {
    try {
      const response = await getSingleTrainerForManager(params?.profileId);
      setTrainer(response?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getTrainer();
  }, [params]);
  return (
    <div className={styles.profileWrap}>
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
          {/* <Image
            src="/images/client/add-image.png"
            alt=""
            width={36}
            height={36}
            className={styles.addImage}
          /> */}
        </div>
        <div className={styles.profileHeading}>
          {trainer?.firstname} {trainer?.name}
        </div>
        <div className={styles.profileGradeWrap}>Age:{trainer?.age}</div>
        <div className={styles.profileLabel}>
          Licence No: {trainer?.licence_number}
        </div>
      </div>
    </div>
  );
};

export default Profile;
