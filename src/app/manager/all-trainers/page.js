"use client";
import CustomTextField from "@/app/(ClientView)/components/CustomTextField/CustomTextField";
import styles from "./trainers.module.css";
import Image from "next/image";
import CustomTable from "@/app/Components/CustomTable/CustomTable";
import { useRouter } from "next/navigation";

const columns = [
  {
    id: "image",
    label: "",
    align: "center",
    type: "image",
    sortable: false,
  },
  {
    id: "name",
    label: "Trainer Name",
    align: "left",
    type: "text",
    sortable: true,
  },
  {
    id: "surname",
    label: "Surname",
    align: "left",
    type: "text",
    sortable: true,
  },
  {
    id: "view",
    label: "View Profile",
    align: "center",
    type: "custom",
    sortable: false,
    customRender: (item) => {
      return (
        <div className={styles.eyeIconWrap}>
          {" "}
          <Image
            src="/images/client/eye.png"
            alt=""
            width={16.5}
            height={12}
            className={styles.eyeIcon}
          />
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

const AllTrainers = () => {
  const router = useRouter();
  return (
    <div className={styles.trainersSection}>
      <div className={styles.tableWrap}>
        <div className={styles.tableWrapHeader}>
          <div className={styles.tableWrapHeaderLeft}>
            <div className={styles.tableWrapHeaderLeftTop}>
              {"All Trainers Profiles"}
            </div>
            <div className={styles.tableWrapHeaderLeftBottom}>
              {"Showing the list of Trainers"}
            </div>
          </div>
          <div className={styles.tableWrapHeaderRight}>
            <div className={styles.tableWrapHeaderSearchWrap}>
              <input
                className={styles.tableWrapHeaderSearch}
                placeholder="Search Trainer"
              />
              <Image
                src="/images/client/search.png"
                alt=""
                width={20}
                height={20}
                className={styles.searchIcon}
              />
            </div>
            <div className={styles.tableWrapHeaderSort}>
              Sorting{" "}
              <Image
                src="/images/client/sort.png"
                alt=""
                width={20}
                height={20}
                className={styles.sortIcon}
              />
            </div>
          </div>
        </div>

        <CustomTable
          columns={columns}
          data={trainers}
          onRowClick={(row, rowIndex) =>
            router.push(`/manager/trainer-profile/${row.id}`)
          }
        />
      </div>
    </div>
  );
};

export default AllTrainers;
