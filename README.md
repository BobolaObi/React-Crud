# Book Store Web App

<img src="https://github.com/BobolaObi/React-Crud/assets/91813831/0ee8bdc1-9727-47b8-9df1-56f49dbaa620" width="500" height="500">


A delightful online book store application built on the strength of React, MySQL, Node.js, and Express. This application provides a seamless interface for book enthusiasts to browse and manage their favorite reads.

## Key Features

* **Browsing**: Empowers users to effortlessly search for books and access comprehensive information about each book.
* **CRUD Operations**: Supports basic CRUD operations (Create, Read, Update, Delete) enabling users to effectively manage their book inventory.
* **Dynamic Components**: Leverages the power of React to create dynamic and interactive components, offering an enhanced user experience.
* **Database Management**: Utilizes MySQL as the database for storing critical book information such as titles, authors, and prices.
* **Backend Support**: Utilizes the power of Node.js and Express for efficient data management and routing on the backend.

## Installation

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd book-store-web-app`
3. Install the dependencies: `npm install`

## Local Database Setup

1. Install MySQL using Homebrew (if not installed): `brew install mysql`
2. Start MySQL server: `brew services start mysql`
3. Log into MySQL as root user: `mysql -uroot -p`
4. Create the `test` database: `CREATE DATABASE IF NOT EXISTS test;`
5. Use the `test` database: `USE test;`
6. Create the `books` table (Modify the columns as per your needs):
```sql
CREATE TABLE IF NOT EXISTS books(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    price DECIMAL(10,2)
);
```

## Local Database Management with MySQL Workbench
![Screenshot 2023-05-22 at 5 25 26 PM](https://github.com/BobolaObi/React-Crud/assets/91813831/741aff36-8b7c-4cb2-9a79-e8a63793f904)

For visual database management, we recommend using [MySQL Workbench](https://dev.mysql.com/downloads/workbench/), an integrated tools environment for MySQL database design, SQL development, administration, and migration.

## Commands to View Tables

Use the following commands in your terminal to view your databases and tables:

1. Log into MySQL as root user: `mysql -uroot -p`
2. To see all your databases: `SHOW DATABASES;`
3. To use a specific database: `USE <database_name>;`
4. To see all the tables in the current database: `SHOW TABLES;`

Please replace `<database_name>` with the name of your database when using it.

![Screenshot 2023-05-22 at 5 25 54 PM](https://github.com/BobolaObi/React-Crud/assets/91813831/c81e8402-f5e2-4b5c-84a0-c5334d2492bb)


## Usage

1. Start the server: `npm start`
2. Access the web application in your browser at: http://localhost:3000

## Contributing

Your contributions are always welcome! If you encounter any issues or have suggestions for enhancements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

Please replace `<repository_url>` with your repository's URL during installation.
