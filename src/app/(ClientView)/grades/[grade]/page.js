"use client";
import CustomTable from "@/app/Components/CustomTable/CustomTable";
import styles from "../grades.module.css";
import { useRouter } from "next/navigation";
import { fetchGradeMasteries, fetchSingleGrade } from "@/services/grades";
import { useEffect, useState } from "react";
const columns = [
  {
    id: "title",
    label: "Mastery",
    align: "left",
    type: "text",
    sortable: true,
  },
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

      <div className="customTableWrap">
        <CustomTable
          columns={columns}
          data={masteries?.masteryList}
          onRowClick={(row, rowIndex) => {
            router.push(`/mastery/${params?.grade}/${row.id}`);
          }}
          totalCount={masteries.totalCount}
          getData={getMasteries}
        />
      </div>
    </div>
  );
};

export default Grade;
