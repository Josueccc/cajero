# Cajero Automático

Esta es una aplicación de cajero automático que permite a los usuarios realizar operaciones bancarias básicas como depósitos y retiros.

## Usuarios disponibles

Los siguientes son los usuarios disponibles en la aplicación:

- Elsa pato
  - Username: elsa
  - Password: 123

- Fernanda
  - Username: fernanda
  - Password: 123

- Juan
  - Username: juan
  - Password: 123

- Pablo
  - Username: pablo
  - Password: 123

- Monica
  - Username: monica
  - Password: 123

## Cómo usar

Para usar la aplicación, simplemente inicie sesión con uno de los usuarios disponibles y podrá realizar operaciones bancarias.

# Desarrollo

Esta aplicación fue desarrollada en JavaScript y utiliza localStorage para almacenar los datos de los usuarios.


## Intentandado ser SPA
El archivo js/utils.js contiene la funcion changeComponent(), que realiza una llamada fetch para obtener el correspondiente archivo html de components/ y regresa una promesa.

La funcion tambien recibe un array de objetos que indican los eventos especificos de ese componente, permitiendo tener control sobre la funcionalidad del mismo.

En la ruta js/components he declarado los modulos que contienen la funcionalida de los componentes.
Estos modulos exportan un objeto con las funciones necesarias para suscribirse a los eventos.
Tambien incluyen una funcion load() que hace uso de changeComponent(), lo que hace que al llamar a esta funcion se muestre el componente y se suscriba a los eventos necesarios


## Modelo
Para simular una base de datos, he creado el archivo js/data.js donde se accede a localStorage para almacenar el objeto de datos en forma de string.
El archivo exporta un objeto que contiene las operaciones basicas del cajero y de login (ej. makeDeposit).

## app.js
Este es el archivo principal que se incluye en el index.html y es la entrada para la logica.

Se suscribe a evento de carga del DOM y ejecuta la logica de obtencion de sesiom: si hay sesion, accede a operaciones; si no la hay, accede al login