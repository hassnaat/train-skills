"use client";
import CustomTextField from "@/app/(ClientView)/components/CustomTextField/CustomTextField";
import styles from "./trainees.module.css";
import Image from "next/image";
import CustomTable from "@/app/Components/CustomTable/CustomTable";
import { useRouter } from "next/navigation";

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

const AllTrainees = () => {
  const router = useRouter();
  const columns = [
    {
      id: "image",
      label: "",
      align: "center",
      type: "custom",
      sortable: false,
      customRender: (item) => {
        return (
          <div
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "32px",
              height: "32px",
              margin: "auto",
              cursor: "pointer",
            }}
            onClick={() => router.push(`/trainer/trainee-profile/${item.id}`)}
          >
            <Image src={item.image} alt="" width={32} height={32} />
          </div>
        );
      },
    },
    {
      id: "name",
      label: "Trainee Name",
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
      id: "latestGrade",
      label: "Latest Grade",
      align: "left",
      type: "text",
      sortable: true,
    },
    {
      id: "action",
      label: "Action",
      align: "center",
      type: "custom",
      sortable: false,
      customRender: (item) => {
        return (
          <div className={styles.redCrossIconWrap}>
            {" "}
            <Image
              src="/images/client/red-cross.png"
              alt=""
              width={20}
              height={20}
              className={styles.redCrossIcon}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles.traineesSection}>
      <div className={styles.tableWrap}>
        <div className={styles.tableWrapHeader}>
          <div className={styles.tableWrapHeaderLeft}>
            <div className={styles.tableWrapHeaderLeftTop}>
              {"All Trainee's Profiles"}
            </div>
            <div className={styles.tableWrapHeaderLeftBottom}>
              {"Showing the list of Trainee's"}
            </div>
          </div>
          <div className={styles.tableWrapHeaderRight}>
            <div className={styles.tableWrapHeaderSearchWrap}>
              <input
                className={styles.tableWrapHeaderSearch}
                placeholder="Search Trainee"
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
        <CustomTable columns={columns} data={trainees} />
      </div>
      <div className={styles.addTrainee}>
        <div className={styles.addTraineeText}>Add A Trainee</div>
        <div className={styles.addTraineeForm}>
          <CustomTextField
            style={{ flex: 1, minWidth: "260px" }}
            fieldClassName={styles.addTraineeField}
            icon={
              <Image
                src="/images/client/envelop.png"
                alt=""
                width={24}
                height={24}
              />
            }
            placeholder="mathewanderson@gmail.com"
          />
          <div className={styles.addTraineeBtn}>Add Trainee</div>
        </div>
      </div>
    </div>
  );
};

export default AllTrainees;
