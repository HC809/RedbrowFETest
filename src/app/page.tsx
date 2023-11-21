"use client";
import React, { useCallback, useEffect, useState } from "react";
import { apiRequest } from "@/api/apiConfig";
import UserTable from "@/components/UserTable";
import { UserPaged } from "@/models/UserPaged";
import PaginationControls from "@/components/PaginationControls";
import UserForm from "@/components/UserForm";
import { UserCircleIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Modal from "@/components/ui/Modal";
import { User } from "@/models/User";

export default function Home() {
  const [userPaged, setUserPaged] = useState<UserPaged | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    return () => {
      setUserPaged(null);
      setCurrentPage(0);
      setIsModalOpen(false);
      setLoading(false);
    };
  }, []);

  const fetchUsers = async (pageNumber: number, pageSize: number) => {
    setLoading(true);
    try {
      var response: UserPaged = await apiRequest.getAllUsers(
        pageNumber,
        pageSize
      );
      setUserPaged(response);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    } finally {
      setLoading(false);
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateUser = useCallback(async (user: User) => {
    try {
      await apiRequest.postUser(user);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            <UserCircleIcon className="inline-block w-6 h-6 text-purple-500 mr-2" />
            Hector Caballero
          </h2>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/HC809/RedbrowFETest"
            className="text-purple-500 hover:text-purple-600 transition duration-300 ease-in-out mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeBracketIcon className="inline-block w-6 h-6 mr-2" />
            <span className="hidden md:inline">Repositorio GitHub</span>
          </a>
          <button
            onClick={openModal}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Agregar Usuario
          </button>
        </div>
      </div>

      <UserTable users={userPaged?.items || []} />
      <PaginationControls
        page={userPaged?.pageNumber || 0}
        totalPages={userPaged?.totalPages || 0}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
      />

      <Modal isOpen={isModalOpen}>
        <UserForm onCreateUser={handleCreateUser} closeModal={closeModal} />
      </Modal>
    </main>
  );
}
