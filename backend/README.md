## DB instructions

```sql
DROP DATABASE IF EXISTS cambridge;
CREATE DATABASE cambridge CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'itacademy'@'%' IDENTIFIED WITH mysql_native_password BY 'itacademy';
GRANT ALL PRIVILEGES ON *.* TO 'itacademy'@'%';
FLUSH PRIVILEGES;
```