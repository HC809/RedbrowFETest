# Redbrow Frontend Test App 🚀

Este proyecto es una Web App desarrollada con [Next.js](https://nextjs.org/) que permite listar usuarios y crear nuevos usuarios. La interfaz es intuitiva y utiliza una tabla paginada para una navegación eficiente.

## 📋 Características

- **Framework**: [Next.js](https://nextjs.org/) (v14)
- **Lenguaje de Programación**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Formularios**: [Formik](https://formik.org/) con validación de [Yup](https://github.com/jquense/yup)
- **HTTP Client**: [Axios](https://axios-http.com/)

## 🔍 Funcionalidad

- **Paginación de Usuarios**: Los usuarios se listan en una tabla con controles de paginación para una fácil navegación.
- **Modal de Creación**: Un formulario en un modal permite la creación de nuevos usuarios.
- **Integración API**: La Web App consume una API REST para obtener y enviar datos, utilizando Axios para las peticiones HTTP.

## 🌐 Enlaces Rápidos

- **Repositorio GitHub**: [RedbrowFETest en GitHub](https://github.com/HC809/RedbrowFETest)
- **Demostración en Vivo**: [RedbrowFETest en Vercel](https://redbrow-fe-test.vercel.app/)

## 🐳 Despliegue con Docker

Puedes ejecutar la aplicación localmente utilizando Docker. La imagen está disponible en Docker Hub.

- **Docker Hub**: [caballero809/redbrow-fe-test](https://hub.docker.com/r/caballero809/redbrow-fe-test)
- **Descargar la Imagen**:
  ```sh
  docker pull caballero809/redbrow-fe-test

O puedes descargar el proyecto y hacerlo de manera manual:
```sh
git clone https://github.com/HC809/RedbrowFETest.git
cd RedbrowFETest
docker build -t redbrow-fe-test .
docker run -p 3000:3000 redbrow-fe-test
