## Database commands

```mysql
create database cbsocialmediadb;
create user cbsocialuser identified with mysql_native_password by 'cbsocialpass';
grant all privileges on cbsocialmedia.* to cbsocialuser;
flush privileges;
```

## Project Structure

### Front end

```shell
./src/public/
├── app                         # our frontend js code
│   └── social-common.js
├── components                  # our own html snippets
│   └── navbar.html
├── css                         # css libraries in use
│   └── bootstrap.css
├── fonts                       # fonts being used
├── index.html                  # homepage 
└── js                          # js frameworks in use
    ├── bootsrap.js
    ├── jquery.js
    └── popper.js
```
### Back end

```shell
Src
|-> controllers    # functions to connect routes to db operations
|-> db             # db connection and model definitions
|-> public         # html, css for static part of site.
|-> routes         # express middlewares (route wise)
```

## Business Logic

### Users

1. **create users**
    this will create a new user with random username

### Posts

1. **create posts**
    this will create a new post, required fields are
    - username (the author of this post)
    - title
    - body

2. **show all posts**
    list all existing posts, we should have following filtering support


    - filter by username
    - filter by query contained in title (search by title)

3. **edit posts** 'TBD'

4. **delete posts**  'TBD'

### Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**


## API Documentation

### `users`

1. `POST /users`

Creates a new user with random username and user id.]

2. `GET /users/{userid}`

Get an user with a given user id

3. `GET /users/{username}`

Get and user with a given username

### `posts`

1. `GET /posts`

Get all posts by everyone

2. `POST /posts`

Create a new post.
Required fields in body - 

```
userId=
title=
body=

```
