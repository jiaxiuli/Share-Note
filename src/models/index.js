// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Posts, User } = initSchema(schema);

export {
  Posts,
  User
};