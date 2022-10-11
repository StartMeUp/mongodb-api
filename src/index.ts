import * as dotenv from "dotenv";
dotenv.config();

import { Actions, Responses, ExtraData } from "./types";
import { postRequest } from "./axios";

// requests Promises
export const findMany = postRequest<
  ExtraData[Actions.findMany],
  Responses[Actions.findMany]
>(Actions.findMany);

export const findOne = postRequest<
  ExtraData[Actions.findOne],
  Responses[Actions.findOne]
>(Actions.findOne);

export const insertOne = postRequest<
  ExtraData[Actions.insertOne],
  Responses[Actions.insertOne]
>(Actions.insertOne);

export const insertMany = postRequest<
  ExtraData[Actions.insertMany],
  Responses[Actions.insertMany]
>(Actions.insertMany);

export const updateOne = postRequest<
  ExtraData[Actions.updateOne],
  Responses[Actions.updateOne]
>(Actions.updateOne);

export const updateMany = postRequest<
  ExtraData[Actions.updateMany],
  Responses[Actions.updateMany]
>(Actions.updateMany);

export const replaceOne = postRequest<
  ExtraData[Actions.replaceOne],
  Responses[Actions.replaceOne]
>(Actions.replaceOne);

export const deleteOne = postRequest<
  ExtraData[Actions.deleteOne],
  Responses[Actions.deleteOne]
>(Actions.deleteOne);

export const deleteMany = postRequest<
  ExtraData[Actions.deleteMany],
  Responses[Actions.deleteMany]
>(Actions.deleteMany);

export const aggregate = postRequest<
  ExtraData[Actions.aggregate],
  Responses[Actions.aggregate]
>(Actions.aggregate);
