# Modile-login

Esta es una pequeña aplicación web hecha con javascript que constaa de una pantalla para iniciar sesion usando una direccion email y una contraseña.

Para este pequeño proyecto hemos usado las siguientes tecnologías:

- **Webpack** como empaquetador de módulos, ejecutor de tareas y servidor de desarrollo.

- **React**: como framework de javascript

- **Firebase** con la que hemos creado una base de datos para almacenar los usuarios y usado su servicio de autenticación para realizar el login.

## Comenzando

Necesitarás conexión a internet, tanto para los siguientes pasos, como para poder conectar con la base de datos de Firebase, donde se encuientran almacenados los distintos usuarios.


Descarga el repositorio de github a través del siguiente enlace:


```
https://github.com/hectorm21/Mobile-login.git
```
para poder ejecutar el proyecto deberás tener instalado **nodejs** en tu ordenador.
Puedes descargarlo en el siguiente enlace:
```
https://nodejs.org/es/download/
```

unna vez instalado, abre tu consola de comandos y desde el directorio raíz del proyecto,  teclea lo siguiente, yo uso la consola **git bash**.

```
npm install
```
Este comando usará el gestor de paquetes de nodejs para instalar las dependencias que necesita el proyecto para funcionar.

## Ejecución

Una vez que tengas instaladas las dependencias, ubicado en el directorio raiz del proyecto podrás probar realizar las siguientes tareas ustilizando los siguientes comandos:

```
npm run build
```
- Realizara la construcción del proyecto, creando el directorio dist, donde se encontrarán nuestros archivos .js y .css concatenados, asi como un index.html y las fuentes e imagenes que hemos utilizado.

```
npm start
```
- Hará lo mismo que el comando anterior, y además nos ejecutará un servidor de desarrollo y nos ejecutará la aplicación en el navegador para que podamos probarla.

## Usuarios de prueba

Usuario 1:

- email: prueba@prueba.com
- password: Prueba123

Usuario 2

- email: usuario@usuario.es
- password: 1uSuario5


## Autor
* **Héctor Espinosa Torres**