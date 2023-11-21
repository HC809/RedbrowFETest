import { AxiosResponse } from "axios";
import axiosRequest from "./axiosConfig";
import { UserPaged } from "@/models/UserPaged";
import { User } from "@/models/User";

const responseBody = (response: AxiosResponse) => response.data;

const apiRequest = {
  getAllUsers: (pageNumber: number, pageSize: number): Promise<UserPaged> =>
    axiosRequest.get(`/user/${pageNumber}/${pageSize}`).then(responseBody),
  postUser: (user: User) => axiosRequest.post("/user", user).then(responseBody),
};

export { apiRequest };
