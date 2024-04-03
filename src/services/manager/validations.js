import axiosInstance from "../axiosInstance";

export const getPendingValidations = async (page, perPage) => {
  try {
    const response = await axiosInstance.get(
      `/manager/validations/pending/set?orderBy=upload_time&page=${
        page ?? 1
      }&itemsPerPage=${perPage ?? 5}&direction=asc`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
