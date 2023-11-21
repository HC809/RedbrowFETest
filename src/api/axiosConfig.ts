import axios from "axios";

const axiosRequest = axios.create();
axiosRequest.defaults.baseURL = "https://redbrow-be-test.azurewebsites.net/api";

axiosRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (axios.isAxiosError(error)) {
      if (!error.response) return Promise.reject("Error de conexión. ");
      else {
        const errorMessage =
          (error.response && (error.response.data.message as string)) ||
          "Error desconocido.";
        return Promise.reject(errorMessage);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosRequest;
