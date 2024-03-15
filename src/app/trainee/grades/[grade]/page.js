"use client";
import CustomTable from "@/app/Components/CustomTable/CustomTable";
import styles from "../grades.module.css";
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

const data = [
  { name: "Martery 1", status: "Completed" },
  { name: "Martery 2", status: "Pending" },
  { name: "Martery 3", status: "Pending" },
  { name: "Martery 4", status: "Pending" },
  { name: "Martery 5", status: "Pending" },
  { name: "Martery 6", status: "Pending" },
  { name: "Martery 7", status: "Completed" },
  { name: "Martery 8", status: "Pending" },
  { name: "Martery 9", status: "Completed" },
  { name: "Martery 10", status: "Pending" },
];

const grade = ({ params }) => {
  return (
    <div className={styles.gradeSection}>
      <div className={styles.gradeSectionHeading}>Grade {params.grade}</div>
      <div className={styles.gradeSectionDesc}>
        Explore the list of masteries and validate your grade. Track your
        progress and achievements on your martial arts journey.
      </div>
      {/*   <div className={styles.gradeSectiontable}>
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
        
      </div>*/}
      <div className={styles.gradeSectionTableWrap}>
        <CustomTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default grade;
