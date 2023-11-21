import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { User } from "@/models/User";

interface FormProps {
  onCreateUser: (user: User) => void;
  closeModal: () => void;
}

interface UserFormValues {
  nombre: string;
  correo: string;
  edad: number;
}

const UserSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es obligatorio."),
  correo: Yup.string()
    .email("Correo inválido.")
    .required("El correo es obligatorio."),
  edad: Yup.number()
    .min(18, "La edad debe ser mayor a 18.")
    .integer("La edad debe ser un número entero.")
    .required("La edad es obligatoria."),
});

const UserForm = ({ onCreateUser, closeModal }: FormProps) => {
  const handleSubmit = (
    values: UserFormValues,
    { setSubmitting, resetForm }: FormikHelpers<UserFormValues>
  ) => {
    console.log(values);
    const user: User = {
      id: 0,
      nombre: values.nombre,
      correo: values.correo,
      edad: values.edad,
    };
    onCreateUser(user);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        nombre: "",
        correo: "",
        edad: 0,
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div className="text-lg font-semibold text-gray-900 border-b pb-2">
            Nuevo Usuario
            <button
              onClick={closeModal}
              className="float-right text-gray-600 hover:text-gray-900"
            >
              <span className="sr-only">Cerrar</span>
              &#10005;
            </button>
          </div>

          <div>
            <label
              htmlFor="nombre"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nombre
            </label>
            <Field
              type="text"
              name="nombre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <ErrorMessage
              name="nombre"
              component="div"
              className="mt-1 text-sm text-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="correo"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Correo
            </label>
            <Field
              type="email"
              name="correo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <ErrorMessage
              name="correo"
              component="div"
              className="mt-1 text-sm text-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="edad"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Edad
            </label>
            <Field
              type="number"
              name="edad"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <ErrorMessage
              name="edad"
              component="div"
              className="mt-1 text-sm text-red-600"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300"
          >
            Crear Usuario
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
