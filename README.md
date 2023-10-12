# Features:

- CRUD system.
- Audio stream with Cloudinary service.
- Passport-discord login.
- Roles.
- Sessions on server side.
- Everything is modularized for re-use in other projects.
- Prisma ORM
- PostgreSQL.
- Redis as cache db
- Project dockerized.

### Status Development:

- 50%

## More details:

### Users:

- users can register, login and logout
- users can be ADMIN or not
- users can upload song files and play

### Middlewares:

- endpoints protected by validations login, author, and/or roles with no database request.

### Songs:

- users can get de audio list from the home page.
- users can upload, update or delete their songs.

### Genres:

- songs are agrouped by genres.

### Suscriptions:

- users can subscribe to authors.
- users can get all their suscriptions

### Likes:

- users can use a like button.

### Admin and Morderator

- Moderator is allowed to update and delete some registers.
- Admin has all permissions.

## How to install

1.  Type `npm i ` in root path to get all dependencies from package.json. you can also dockerize it using `docker compose up`

2.  Create a cluster in your [MongoDB Atlas](https://www.mongodb.com/atlas/database) project.

3.  Create an account in [Cloudinary](https://cloudinary.com/) service.

4.  Enviroments variables:

    create a .env file in the root path and inside define 9 variables:

        DOCKER_PORT = docker port backend server.
        LOCAL_PORT = local port backend server.
        DATABASE_URL = your mongodb atlas connection string(remember replace your password user inside of this string)
        SECRET_KEY = secret key token for JWT middleware.
        CLOUD_NAME = from your cloudinary account.
        API_KEY = from your cloudinary account.
        API_SECRET = from your cloudinary account.
        REDIS_HOST = db name
        REDIS_DOCKER_PORT = redis port 6379 as default.
        REDIS_LOCAL_PORT = redis local port
        REDIS_PASSWORD = create a new one here

5.  Type `npm run dev` in root path or if you use docker, just run the container.

note:
endpoints were tested with [Thunder Client VSC](https://www.thunderclient.com/) extension
tests done with jest and supertest

## Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit it using the issues tab above. If you would like to submit a PR with with a fix, reference the issue you created.
