# Features:

- CRUD system.
- Audio stream with Cloudinary service.
- Passport-discord integration.
- Roles.
- Schema validators with zod.
- Sessions on server side.
- Everything is modularized for re-use in other projects.
- Prisma ORM
- PostgreSQL.

### Status Development:

- 70%

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

### Likes:

- users can use a like button.

### Admin and Morderator

- Moderator is allowed to update and delete some registers.
- Admin has all permissions.

## How to install

1.  Type `npm i ` in root path to get all dependencies from package.json. you can also dockerize it using `docker compose up`

3.  Create an account in [Cloudinary](https://cloudinary.com/) service.

4.  Enviroments variables:

    create a .env file in the root path and inside define these variables:

        LOCAL_PORT = local port backend server.
        DATABASE_URL = PostgreSQL url
        DISCORD_CLIENT_ID = from discord developer portal
        DISCORD_CLIENT_SECRET = from discord developer portal
        SECRET_KEY = from discord developer portal.
        CLOUD_NAME = from your cloudinary account.
        API_KEY = from your cloudinary account.
        API_SECRET = from your cloudinary account.

5.  Type `npm run dev` in root path or if you use docker, just run the container.

note:
I used [Thunder Client VSC](https://www.thunderclient.com/) extension as client.

## Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit it using the issues tab above. If you would like to submit a PR with with a fix, reference the issue you created.
