# API Desafío técnico MPD
## Pasos para levantar el api

### 1) Instalar la BD
<p>Descargar e instalar la base de datos <strong>postgreSQL</strong></p>

### 2) Crear la base de datos
<p>Crear la base de datos donde se guardarán los registros</p>

### 3) Configurar el .env.example
<p>Asignarle los valores de las variables de la BD y luego renombrar el fichero de <strong>.env.example</strong> a solamente <strong>.env</strong></p>
<p>El archivo <strong>.env</strong> debe quedar así:</p>

    DB_NAME=nombre_de_la_bd 
    DB_USER=usuario_de_la_bd
    DB_PASSWORD=password_de_la_bd
    DB_HOST=host_de_la_bd

<p>El usuario por defecto es postgres y el host local es localhost</p>

### 4) Reconstruir los modules de node
<p>Ejecutar el siguiente comando:</p>
    
    npm install 

### 5) Correr la aplicación
<p>Ejecutar el siguiente comando:</p>
    
    npm run start 