# Firebase Functions API Example

This repository demonstrates the usage of [Firebase Cloud Functions](https://firebase.google.com/docs/functions/) in a simple [Express](https://expressjs.com) API with [Sequelize](http://docs.sequelizejs.com/) ORM to manage the data.
The implemented logic is a simple list of users.

## Demo

Check live example [here](https://goo.gl/b2fHJy)

## Starting App

```
cd functions/
npm install
npm start # to test locally
```
This example comes loaded with fake data so you can try the api more easily.

**Migrating database**

```
node_modules/.bin/sequelize db:migrate
npm start
```

This will start the application and create an sqlite database in your app dir.
Just open [http://localhost:3000](http://localhost:3000).

More info about Sequelize Migrations in [docs](http://docs.sequelizejs.com/manual/tutorial/migrations.html).

## API reference

The following endpoints are available

* Get all: `GET /api/users`

* Get one `GET /api/users/<user-id>`

* Create new: `POST /api/users`

* Destroy one: `POST /api/users/<user-id>`

* Search: `GET /api/users/search?name=john`

Users created with the command: `node_modules/.bin/sequelize model:create --name User --attributes name:string,address:string,country:string,username:string,email:string`

## Considerations

Because Firebase Cloud Functions does not allow calls to external sources, a SQLite database is used to persist the data internally. Sequelize is used to manage data due to the flexible api it offers.


## Deploy to Firebase


```bash
firebase login
firebase init functions
firebase deploy --only functions
```

Your api will be available in a url like `https://us-central1-<project-name>.cloudfunctions.net/api/`