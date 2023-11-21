import React, { useState } from "react";
//import { EyeIcon } from "@heroicons/react/24/outline";
import { User } from "@/models/User";

interface TableProps {
  users: User[];
}

const UserTable = ({ users }: TableProps) => {
  //const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    N°
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Edad
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {user.id}
                    </td>
                    <td
                      className={
                        "px-6 py-4 whitespace-nowrap text-left capitalize text-gray-900"
                      }
                    >
                      {user.nombre}
                    </td>
                    <td
                      className={
                        "px-6 py-4 whitespace-nowrap text-left capitalize text-gray-900"
                      }
                    >
                      {user.edad}
                    </td>
                    <td
                      className={
                        "px-6 py-4 whitespace-nowrap text-left  text-gray-900"
                      }
                    >
                      {user.correo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
