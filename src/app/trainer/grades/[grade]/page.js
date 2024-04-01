"use client";
import CustomTable from "@/app/Components/CustomTable/CustomTable";
import styles from "../grades.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchGradeMasteries, fetchSingleGrade } from "@/services/grades";
const columns = [
  {
    id: "title",
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
  const [masteries, setMasteries] = useState([]);
  const [grade, setGrade] = useState({});
  const getGrade = async () => {
    try {
      const response = await fetchSingleGrade(params.grade);
      setGrade(response?.data);
    } catch (error) {}
  };
  const getMasteries = async (page, perPage) => {
    try {
      const response = await fetchGradeMasteries(params.grade, page, perPage);
      setMasteries(response?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getGrade();
    getMasteries();
  }, []);
  return (
    <div className={styles.gradeSection}>
      <div className={styles.gradeSectionHeading}>Grade {grade.title}</div>
      <div className={styles.gradeSectionDesc}>
        Explore the list of masteries and validate your grade. Track your
        progress and achievements on your martial arts journey.
      </div>
      <div className={styles.gradeSectionTableWrap}>
        <CustomTable
          columns={columns}
          data={masteries?.masteryList}
          onRowClick={(row, rowIndex) => {
            router.push(`/trainer/mastery/${params?.grade}/${row.id}`);
          }}
          totalCount={masteries.totalCount}
          getData={getMasteries}
        />
      </div>
    </div>
  );
};

export default Grade;
