import { AxiosResponse } from "axios";
import axiosRequest from "./axiosConfig";
import { UserPaged } from "@/models/UserPaged";

const responseBody = (response: AxiosResponse) => response.data;

const apiRequest = {
  getAllUsers: (pageNumber: number, pageSize: number): Promise<UserPaged> =>
    axiosRequest.get(`/user/${pageNumber}/${pageSize}`).then(responseBody),
};

export { apiRequest };
