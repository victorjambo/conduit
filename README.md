### Conduit

# Description
Example Node (Express + Postgres) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the an API spec.

## Setup

### Dependencies

- [NodeJS](https://github.com/nodejs/node) - A JavaScript runtime environment
- [Express](https://github.com/expressjs/express) - A web application framework for NodeJS
- [PostgreSQL](https://github.com/postgres/postgres) - A relational database management system that extends SQL
- [Sequelize](https://github.com/sequelize/sequelize) - A promise-based ORM for NodeJS
- [Passport](https://github.com/jaredhanson/passport) - An authentication middleware for NodeJS

### Getting Started

Follow these steps to set up the project in development mode

- Install [Nodejs](https://nodejs.org/en/download/)
- Install and setup [PostgreSQL](https://www.postgresql.org/)
- Clone the repository by running the command
  ```
  git clone https://github.com/victorjambo/conduit.git
  ```
- Run `cd conduit` to enter the application's directory
- Install the application's dependencies by running the command
  ```
  yarn install
  ```
- Create a `.env` file in the root of your directory using the `.env.example` file in the repository
- Setup the database and migrations (**_see [database setup](#database-and-orm, 'setting up database')_**)
- Start the application by running
  ```
  yarn run start:dev
  ```
  The application should now be running at `http://127.0.0.1:5000`

#### Database and ORM

- Create a database in `PostgreSQL` and name it `conduit`
- Set the following environment variables in `.env`:

  - `DATABASE_USERNAME` - this is the database username
  - `DATABASE_PASSWORD` - this is the database password. Ignore if you don't have a database password
  - `DATABASE_NAME` - set this to `conduit`

- Run database migrations
  ```
  yarn run db:migrate
  ```
- Check the database and confirm that the `users` table has been created

### More about environmental variables

After setting up your `.env` from the template provided in the `.env.example` file,
to use these variables anywhere in the app;

- import the `dotenv` package

```
import dotenv from 'dotenv'
```

- Make it available for use as early as possible in that file

```
dotenv.config()
```

- Access any variable in the `.env`

```
process.env.MY_ENV_VARIABLE
```

## Testing

[Jest](https://jestjs.io) is used as the testing framework for both the unit tests and integration tests.
To execute all tests, run the command

```
  yarn test or make test
```

## Author
Victor Mutai (victor.mutai@andela.com)

## License
MIT License
