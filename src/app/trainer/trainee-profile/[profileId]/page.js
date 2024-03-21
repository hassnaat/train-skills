"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CustomTable from "@/app/Components/CustomTable/CustomTable";
import ReportIcon from "@mui/icons-material/Report";
const data = [
  { id: 1, name: "Martery 1", status: "Completed" },
  { id: 2, name: "Martery 2", status: "Pending" },
  { id: 3, name: "Martery 3", status: "Pending" },
  { id: 4, name: "Martery 4", status: "Pending" },
  { id: 5, name: "Martery 5", status: "Pending" },
  { id: 6, name: "Martery 6", status: "Pending" },
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
const trainees = [
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
  const [trainee, setTrainee] = useState({});
  const handleBack = () => {
    router.back();
  };
  useEffect(() => {
    setTrainee(trainees.find((item) => item.id === parseInt(params.profileId)));
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
          <Image
            src="/images/client/add-image.png"
            alt=""
            width={36}
            height={36}
            className={styles.addImage}
          />
        </div>
        <div className={styles.profileHeading}>{trainee?.name}</div>
        <div className={styles.profileSurname}>{trainee?.surname}</div>
        <div className={styles.profilelabel}>LE-12123321</div>
        <div className={styles.profileGradeWrap}>
          Latest Garde:{" "}
          <span className={styles.profileGrade}>{trainee?.latestGrade}</span>
        </div>
        <div className={styles.profileSubheading}>
          Masteries for {trainee?.latestGrade} Grade
        </div>
        {/* <div className={styles.gradeSectiontable}>
          <div className={styles.gradeSectiontableheading}>Mastery Name</div>
          <div className={styles.gradeSectiontableheading2}>Status</div>
          {data?.map((item) => (
            <>
              <div className={styles.gradeSectiontabledata}>{item?.name}</div>
              <div className={styles.gradeSectiontabledata2}>
                <div
                  className={
                    item?.status?.toLowerCase() === "completed"
                      ? styles.completedStatus
                      : styles.pendingStatus
                  }
                >
                  {item?.status}
                </div>
              </div>
            </>
          ))}
        </div> */}
        <div className={styles.gradeSectionTableWrap}>
          <CustomTable
            columns={columns}
            data={data}
            onRowClick={(row, rowIndex) => {
              router.push(`/trainer/mastery/${row.id}`);
            }}
          />
        </div>
        <div className={styles.masteryBtns}>
          {["orange", "yellow"].includes(trainee?.latestGrade) && (
            <div className={styles.masteryBtnOutlined}>
              Validate {trainee?.latestGrade} Grade
            </div>
          )}
          {["blue"].includes(trainee?.latestGrade) && (
            <>
              {trainee?.id === 8 && (
                <p className={styles.cautionText}>
                  <ReportIcon className={styles.cautionIcon} size="small" />{" "}
                  This is overwrite the previously uploaded video(uploaded at
                  12-12-2020).
                </p>
              )}
              <label className={styles.masteryBtnFilled} for="masteryVideo">
                Upload Video <input type="file" hidden id="masteryVideo" />
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
