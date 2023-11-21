"use client";
import React, { useEffect, useState } from "react";
import { apiRequest } from "@/api/apiConfig";
import UserTable from "@/components/UserTable";
import { UserPaged } from "@/models/UserPaged";

export default function Home() {
  const [userPaged, setUserPaged] = useState<UserPaged | null>(null);

  useEffect(() => {
    try {
      const getUsers = async () => {
        var response: UserPaged = await apiRequest.getAllUsers(1, 5);
        setUserPaged(response);
        return response;
      };
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-4">
      <UserTable users={userPaged?.items || []} />
    </main>
  );
}
