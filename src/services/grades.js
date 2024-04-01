import axiosInstance from "./axiosInstance";

export const fetchGrades = async () => {
  try {
    const response = await axiosInstance.get("/grade/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchSingleGrade = async (id) => {
  try {
    const response = await axiosInstance.get(`/grade/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchGradeMasteries = async (id, page, perPage) => {
  try {
    const response = await axiosInstance.get(
      `mastery/grade/${id}/set?orderBy=order&page=${page ?? 1}&itemsPerPage=${
        perPage ?? 5
      }&direction=asc`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
