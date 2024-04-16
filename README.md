A Flight Service System is a API designed to facilitate the management of flight-related operations, enabling users to perform Create, Read, Update, and Delete (CRUD) operations . Here's a detailed description of the key features:

1. **Flight Database Management:**
   - CRUD functionality for managing flight details such as schedules, destinations, and available seats.
   - Real-time updates to ensure accurate and up-to-date flight information.

2. **Admin Dashboard:**
    - CRUD operations for adding, modifying, or canceling flights as needed.

3. **Search and Filtering Capabilities:**
   - Advanced search and filtering options to streamline the ticket booking process.
   - Sorting options based on price, duration, and other relevant criteria.

A well-implemented Flight Service System with CRUD functionality and ticket booking capabilities provides a seamless and efficient experience for both users and administrators, enhancing the overall efficiency of flight operations.

### Setup the project

 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```
    ex: 
    ```
        PORT=3000
    ```
 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

 - To run the server execute
 ```
 npm run dev
```
- To migrate Databases

```
npm sequelize db:migrate
```
