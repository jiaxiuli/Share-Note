// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Note, User } = initSchema(schema);

export {
  Post,
  Note,
  User
};