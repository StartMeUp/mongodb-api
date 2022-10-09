export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_APP_ID: string;
      MONGO_API_KEY: string;
      MONGO_CLUSTER_NAME: string;
      MONGO_DATABASE: string;
    }
  }
}
