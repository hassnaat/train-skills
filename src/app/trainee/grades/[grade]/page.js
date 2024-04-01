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
  {
    id: "grade",
    label: "Grade",
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
          {item?.grade?.title}
        </div>
      );
    },
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
        <CustomTable
          columns={columns}
          data={masteries?.masteryList}
          onRowClick={(row, rowIndex) => {
            router.push(`trainee/mastery/${params?.grade}/${row.id}`);
          }}
          totalCount={masteries.totalCount}
          getData={getMasteries}
        />
      </div>
    </div>
  );
};

export default Grade;
