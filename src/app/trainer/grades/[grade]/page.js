"use client";
import CustomTable from "@/app/Components/CustomTable/CustomTable";
import styles from "../grades.module.css";
import { useRouter } from "next/navigation";
const columns = [
  {
    id: "name",
    label: "Mastery",
    align: "left",
    type: "text",
    sortable: true,
  },
];

const data = [
  { id: 1, name: "Martery 1", status: "Completed" },
  { id: 2, name: "Martery 2", status: "Pending" },
  { id: 3, name: "Martery 3", status: "Pending" },
  { id: 4, name: "Martery 4", status: "Pending" },
  { id: 5, name: "Martery 5", status: "Pending" },
  { id: 6, name: "Martery 6", status: "Pending" },
  { id: 7, name: "Martery 7", status: "Completed" },
  { id: 8, name: "Martery 8", status: "Pending" },
  { id: 9, name: "Martery 9", status: "Completed" },
  { id: 10, name: "Martery 10", status: "Pending" },
];

const Grade = ({ params }) => {
  const router = useRouter();
  return (
    <div className={styles.gradeSection}>
      <div className={styles.gradeSectionHeading}>Grade {params.grade}</div>
      <div className={styles.gradeSectionDesc}>
        Explore the list of masteries and validate your grade. Track your
        progress and achievements on your martial arts journey.
      </div>
      <div className={styles.gradeSectionTableWrap}>
        <CustomTable
          columns={columns}
          data={data}
          onRowClick={(row, rowIndex) => {
            router.push(`/trainer/mastery/${params?.grade}/${row.id}`);
          }}
        />
      </div>
    </div>
  );
};

export default Grade;
