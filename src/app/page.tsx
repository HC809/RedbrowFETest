"use client";
import React, { useEffect, useState } from "react";
import { apiRequest } from "@/api/apiConfig";
import UserTable from "@/components/UserTable";
import { UserPaged } from "@/models/UserPaged";
import PaginationControls from "@/components/PaginationControls";

export default function Home() {
  const [userPaged, setUserPaged] = useState<UserPaged | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchUsers = async (pageNumber: number, pageSize: number) => {
    try {
      var response: UserPaged = await apiRequest.getAllUsers(
        pageNumber,
        pageSize
      );
      setUserPaged(response);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage, 5);
  }, [currentPage]);

  const goToNextPage = () => {
    if (userPaged && currentPage < userPaged.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (userPaged && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-4">
      <UserTable users={userPaged?.items || []} />
      <PaginationControls
        page={userPaged?.pageNumber || 0}
        totalPages={userPaged?.totalPages || 0}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
      />
    </main>
  );
}
