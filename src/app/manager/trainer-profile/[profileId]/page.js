"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CustomTable from "@/app/Components/CustomTable/CustomTable";
import ReportIcon from "@mui/icons-material/Report";
const data = [
  { name: "Martery 1", status: "Completed" },
  { name: "Martery 2", status: "Pending" },
  { name: "Martery 3", status: "Pending" },
  { name: "Martery 4", status: "Pending" },
  { name: "Martery 5", status: "Pending" },
  { name: "Martery 6", status: "Pending" },
];
const columns = [
  {
    id: "name",
    label: "Mastery",
    align: "left",
    type: "text",
    sortable: true,
  },
  {
    id: "status",
    label: "Status",
    align: "center",
    type: "custom",
    sortable: false,
    customRender: (item) => {
      return (
        <div
          className={
            item?.status?.toLowerCase() === "completed"
              ? styles.completedStatus
              : styles.pendingStatus
          }
        >
          {item?.status}
        </div>
      );
    },
  },
];
const trainers = [
  {
    id: 1,
    image: "/images/client/profile.png",
    name: "Wade",
    surname: "Warren",
    latestGrade: "orange",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=",
    name: "John",
    surname: "Doe",
    latestGrade: "blue",
  },
  {
    id: 3,
    image: "/images/client/profile.png",
    name: "Wade",
    surname: "Warren",
    latestGrade: "yellow",
  },
  {
    id: 4,
    image: "/images/client/profile.png",
    name: "Wade",
    surname: "Warren",
    latestGrade: "yellow",
  },
  {
    id: 5,
    image: "/images/client/profile.png",
    name: "Wade",
    surname: "Warren",
    latestGrade: "blue",
  },
  {
    id: 6,
    image: "/images/client/profile.png",
    name: "Wade",
    surname: "Warren",
    latestGrade: "orange",
  },
  {
    id: 7,
    image: "/images/client/profile.png",
    name: "Wade",
    surname: "Warren",
    latestGrade: "yellow",
  },
  {
    id: 8,
    image: "/images/client/profile.png",
    name: "Wade",
    surname: "Warren",
    latestGrade: "blue",
  },
];
const Profile = ({ params }) => {
  const router = useRouter();
  const [trainer, setTrainer] = useState({});
  const handleBack = () => {
    router.back();
  };
  useEffect(() => {
    setTrainer(trainers.find((item) => item.id === parseInt(params.profileId)));
  }, [params.profileId]);
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
          {trainer?.name} {trainer?.surname}
        </div>
        <div className={styles.profileGradeWrap}>
          Garde:{" "}
          <span className={styles.profileGrade}>{trainer?.latestGrade}</span>
        </div>
        <div className={styles.profileLabel}>Phone: +1 1235478925</div>
        <div className={styles.profileLabel}>email: user@test.com</div>
      </div>
    </div>
  );
};

export default Profile;
