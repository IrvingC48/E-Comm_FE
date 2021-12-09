# E-Comm FE: Una aplicación de Comercio Electrónico para comprar zapatos.

## Proyecto 5

- [E-Comm FE: Una aplicación de Comercio Electrónico para comprar zapatos.](#e-comm-fe-una-aplicación-de-comercio-electrónico-para-comprar-zapatos)
  - [Proyecto 5](#proyecto-5)
  - [Contexto](#contexto)
  - [Procesamiento del proyecto](#procesamiento-del-proyecto)
    - [Proximos pasos](#proximos-pasos)
  - [Acotación.](#acotación)
  - [Colaborador](#colaborador)

***

## Contexto

Proyecto 5 de UCamp. E-Comm.

Para este proyecto se generó unna App de comercio electrónico para comprar zapatos, desarrollado con JS y componentes de React.

Se utilizaron componentes de React para el desarrollo de la aplicación. Entre los hooks empleados, para el almacenado, render y transferencia de datos se usaron `localStorage`, `useEffect`, `useState`, `useContext` y `useReducer`.

Dentro del backend, se genera un almacenamiento en `MongoDB`.

En este repositorio se encuentra distribuido el desarrollo de la aplicación, en un segmentos principal (Front-End), usando `HTML`, `CSS`, `JS`, `JSX`, [SASS](https://sass-lang.com/) como Preprocesador de CSS y [Evergreen](https://evergreen.segment.com/) como Framework de componentes React. Para el router de las páginas principales, se empleó [React-Router-Dom-V5](https://reactrouter.com/web/guides/quick-start)

El repositorio que contiene el [Backend](https://github.com/IrvingC48/E-Comm_BE), además de utilizar nodeJs, se emplearon las librerías de [Express](https://expressjs.com/es/), [Axios](https://github.com/axios/axios), [Mongoose](https://mongoosejs.com/) y [dotenv](https://www.npmjs.com/package/dotenv), para el entorno del servidor y consumo de los datos, respectivamente.

Adicional, se empleó la libreria [Bcrypt](https://www.npmjs.com/package/bcrypt) para hasheo de contraseñas, en el caso de la generación de tokens para autorización, se utilizó la libreria [jwt-sinple](https://www.npmjs.com/package/jwt-simple) y como complemento [dayjs](https://day.js.org/) para controlar la vigencia del mismo.

Por último, se requirió paginar los productos a recibir de nuestra base no relacional, y fue de utilidad la librería [mongoose-paginate-v2](https://www.npmjs.com/package/mongoose-paginate-v2) para lograr el objetivo.

***
## Procesamiento del proyecto
1. [Main Index - FrontEnd](https://github.com/IrvingC48/E-Comm_FE/blob/main/src/index.js)
1. [Components React - FrontEnd](https://github.com/IrvingC48/E-Comm_FE/tree/main/src/components)
1. [App JS - FrontEnd](https://github.com/IrvingC48/E-Comm_FE/blob/main/src/App.js)
1. [Index SCSS - FrontEnd](https://github.com/IrvingC48/E-Comm_FE/tree/main/src/styles)
1. [Axios Connection - FrontEnd](https://github.com/IrvingC48/E-Comm_FE/blob/main/src/axios/config.axios.js)
1. [UseContext / UseReducer - FrontEnd (CartContext)](https://github.com/IrvingC48/E-Comm_FE/tree/main/src/context/Cart)
1. [UseContext / UseReducer - FrontEnd (ProfileContext)](https://github.com/IrvingC48/E-Comm_FE/tree/main/src/context/Profile)
1. [Package JSON - General](https://github.com/IrvingC48/E-Comm_FE/blob/main/package.json)


### Proximos pasos
- Agregar validaciones totales finitas para prevenir falta de datos en el Form de SignUp y SignIn.
- Agregar apartado de Newsletter y Promesas de Servicio.
- Ampliar los apartados de AboutUs, ContactUs y Blog.
- Agregar filtro de productos, para seleccionar entre los mostrados dentro del contenedor de Productos.
- Agregar búsqueda por Categoría y Marca
- Realizar pagos a través del procesador de Stripe.
- Ampliar el apartado de My Profile
- Generar la creación, almacenamiento y confirmación de la compra.
- Notificar por email la confirmación de la compra.
- Habilitar el botón de Mis Favoritos.
- Habilitar el botón de búsqueda por texto.
- Adaptar el diseño para First Mobile (Responsive).

***
## Acotación.
Este repositorio, se encuentra desplegado funcionando en [Netlify](https://peaceful-minsky-12c968.netlify.app/)

***

## Colaborador

- Irving Cisneros Castillo