# CRUD-Facturacion
Proyecto de un sistema de facturación, este proyecto está realizado en [Nest.js](https://github.com/nestjs) para la creación e implementación de un CRUD por la parte del backend, la creación y modelamiento de la Base de Datos esta hecho con [TypeORM](https://github.com/typeorm) y para la parte del frontend estará realizado en [Angular](https://github.com/angular).

## TypeORM
El uso de [TypeORM](https://github.com/typeorm) para el proyecto sirvió para crear las tablas de la Base de Datos a utilizar, donde se puede generar los objetos y consultas de manera directa a nuestro SQL, eliminando la necesidad de escribir consultas SQL manualmente. Se mostrará una imagen del uso del [TypeORM](https://github.com/typeorm) en nuestro proyecto, la cual se ejecutará cuando iniciamos el proyecto de [Nest.js](https://github.com/nestjs).

<img width="902" alt="demo" src="https://github.com/PaulSV123/CRUD-Facturacion/blob/main/img/BD.png?raw=true">

## Nest.js
El uso de [Nest.js](https://github.com/nestjs) sirvió para definir y configurar diferentes elementos de la aplicación, como controladores, servicios y módulos de tal manera que nos permita modificar el comportamiento de la aplicación, se usó el sistema de inyección para definir las dependencias requeridas en los constructores de clases, en este caso nuestras clases para crear el sistema de facturación. Otro punto importante fue el enrutamiento para definir las rutas de la API y asociarlas con los controladores correspondientes.

<img width="902" alt="demo" src="https://github.com/PaulSV123/CRUD-Facturacion/blob/main/img/ejecucionNest.png?raw=true">

## Angular
El uso de [Angular](https://github.com/angular) fue por su arquitectura sólida y herramientas para crear aplicaciones web interactivas, escalables y de alto rendimiento. Ya que los componentes encapsulan la lógica y la presentación de una parte específica de la aplicación y se pueden reutilizar en diferentes lugares, [Angular](https://github.com/angular) también permite realizar solicitudes HTTP utilizando el módulo HttpClient,para  establecer conexiones en tiempo real mediante WebSockets o interactuar con API RESTful, lo cual es importante para la realización de un CRUD con las APIS locales generadas en [Nest.js](https://github.com/nestjs).

<img width="902" alt="demo" src="https://github.com/PaulSV123/CRUD-Facturacion/blob/main/img/angularservice.png?raw=true">

## Ejecucion del Proyecto

<img width="902" alt="demo" src="https://github.com/PaulSV123/CRUD-Facturacion/blob/main/img/facturas.png?raw=true">

<img width="902" alt="demo" src="https://github.com/PaulSV123/CRUD-Facturacion/blob/main/img/facturas2.png?raw=truee">

<img width="902" alt="demo" src="https://github.com/PaulSV123/CRUD-Facturacion/blob/main/img/detalles.png?raw=true">

<img width="902" alt="demo" src="https://github.com/PaulSV123/CRUD-Facturacion/blob/main/img/detalles2.png?raw=true">
