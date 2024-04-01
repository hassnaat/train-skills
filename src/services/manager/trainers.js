import axiosInstance from "../axiosInstance";

export const getTrainersForManager = async (page, perPage) => {
  try {
    const response = await axiosInstance.get(
      `/manager/trainers/set?orderBy=firstname&page=${page ?? 1}&itemsPerPage=${
        perPage ?? 5
      }&direction=asc`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getSingleTrainerForManager = async (id) => {
  try {
    const response = await axiosInstance.get(`/manager/trainer/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
