## Database commands

```mysql
create database cbsocialmediadb;
create user cbsocialuser identified with mysql_native_password by 'cbsocialpass';
grant all privileges on cbsocialmedia.* to cbsocialuser;
flush privileges;
```

## Project Structure

```shell
Src
|-> controllers    # functions to connect routes to db operations
|-> db             # db connection and model definitions
|-> public         # html, css for static part of site.
|-> routes         # express middlewares (route wise)
```