type MongoDbDocument = { _id: string } & Record<string, any>;

export enum Actions {
  findOne = "findOne",
  findMany = "find",
  insertOne = "insertOne",
  insertMany = "insertMany",
  updateOne = "updateOne",
  updateMany = "updateMany",
  replaceOne = "replaceOne",
  deleteOne = "deleteOne",
  deleteMany = "deleteMany",
  aggregate = "aggregate",
}

type ResponseUpdateType = {
  matchedCount: number;
  modifiedCount: number;
  upsertedId?: string;
};

export interface Responses {
  [Actions.findOne]: { document: MongoDbDocument | null };
  [Actions.findMany]: { documents: MongoDbDocument[] };
  [Actions.insertOne]: { insertedId: string };
  [Actions.insertMany]: { insertedIds: string[] };
  [Actions.updateOne]: ResponseUpdateType;
  [Actions.updateMany]: ResponseUpdateType;
  [Actions.replaceOne]: ResponseUpdateType;
  [Actions.deleteOne]: { deletedCount: 1 };
  [Actions.deleteMany]: { deletedCount: number };
  [Actions.aggregate]: { documents: MongoDbDocument[] };
}

type Filter = { filter: Record<string, any> };
type Projection = { projection: Record<string, any> };
type Sort = { sort: Record<string, any> };
type Limit = { limit: number };
type Skip = { skip: number };
type ExtraDataDocument = { document: Record<string, any> };
type Documents = { documents: ExtraDataDocument[] };
type Update = { update: Record<string, any> };
type Upsert = { upsert: boolean };
type Replacement = { replacement: Record<string, any> };
type Pipeline = { pipeline: Record<string, any>[] };

export interface ExtraData {
  [Actions.findOne]: Partial<Filter> & Partial<Projection>;
  [Actions.findMany]: Partial<Filter> &
    Partial<Projection> &
    Partial<Sort> &
    Partial<Limit> &
    Partial<Skip>;
  [Actions.insertOne]: ExtraDataDocument;
  [Actions.insertMany]: Documents;
  [Actions.updateOne]: Filter & Update & Partial<Upsert>;
  [Actions.updateMany]: Filter & Update & Partial<Upsert>;
  [Actions.replaceOne]: Filter & Replacement & Partial<Upsert>;
  [Actions.deleteOne]: Filter;
  [Actions.deleteMany]: Filter;
  [Actions.aggregate]: Pipeline;
}
