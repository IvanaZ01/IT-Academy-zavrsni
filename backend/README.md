## DB instructions

First run this sql in order to create admin user in mysql.

```sql
CREATE USER 'itacademy'@'%' IDENTIFIED WITH mysql_native_password BY 'itacademy';
GRANT ALL PRIVILEGES ON *.* TO 'itacademy'@'%';
FLUSH PRIVILEGES;
```

Then you can run the sql script from the root folder for creating database structure with one admin user with username `ivana` and password `12345678` that can be used for first login and creation of other users. 

## Environment variables

Create `.env` file in backend root.
In `.env.example` file can be found all environment variables needed.

## Starting the app

To start the app use `npm start` command for the backend folder and `ng serve` for the frontend folder.