# MongoDB data API

Some preconfigured utility functions to easily request the [MongoDB Data API](https://www.mongodb.com/docs/atlas/api/data-api/).

## Setup

First add the following variables and their values to your `.env` file

```
MONGO_APP_ID=
MONGO_API_KEY=
MONGO_CLUSTER_NAME=
MONGO_DATABASE=
```

## How to use

```javascript
// import the functions you need
import {
  findMany,
  findOne,
  updateMany,
  updateOne,
  replaceOne,
  deleteMany,
  deleteOne,
  aggregate,
} from "mongo-data-api";

// all functions take 2 arguments ("collectionName", {options object}) and return a promise
// Only the data of the response is returned, not the whole response
(async () => {
  const data = await findMany("collection", { limit: 3 });
  console.log(data); // { documents: [...] }
})();
```

## Details

Every function takes 2 arguments: the collection that is requested (mandatory), and an object with various options (optional, depending on the type of request). Check also [MongoDB documentation](https://www.mongodb.com/docs/atlas/api/data-api-resources/) for more details.

Examples:

```javascript
await findOne("tasks", { filter: { text: "Do the dishes" } });
await findMany("tasks"); // returns all documents in "tasks" collection
await insertOne("tasks", {
  document: { completed: false, text: "Go shopping" },
});
```

| Function     | Options     | Type             | Necessity | Response Data                                            |
| ------------ | ----------- | ---------------- | --------- | -------------------------------------------------------- |
| `findMany`   | filter      | object           | Optional  | { documents: [{ ... }, ...] }                            |
|              | projection  | object           | Optional  |
|              | sort        | object           | Optional  |
|              | limit       | number           | Optional  |
|              | skip        | number           | Optional  |
| `findOne`    | filter      | object           | Optional  | { document: {...} }                                      |
|              | projection  | object           | Optional  |
| `insertOne`  | document    | object           | Required  | { insertedId: "..." }                                    |
| `insertMany` | documents   | array of objects | Required  | { insertedIds: ["...", "...", ...] }                     |
| `updateOne`  | filter      | object           | Required  | { matchedCount: 0, modifiedCount: 0, upsertedId: "..." } |
|              | update      | object           | Required  |
|              | upsert      | boolean          | Optional  |
| `updateMany` | filter      | object           | Required  | { matchedCount: 0, modifiedCount: 0, upsertedId: "..." } |
|              | update      | object           | Required  |
|              | upsert      | boolean          | Optional  |
| `replaceOne` | filter      | object           | Required  | { matchedCount: 0, modifiedCount: 0, upsertedId: "..." } |
|              | replacement | object           | Required  |
|              | upsert      | boolean          | Optional  |
| `deleteOne`  | filter      | object           | Required  | { deletedCount: 1 }                                      |
| `deleteMany` | filter      | object           | Required  | { deletedCount: 26 }                                     |
| `aggregate`  | pipeline    | array of objects | Required  | { documents: [{ ... }, ...] }                            |
