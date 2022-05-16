import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Post {
  readonly id: string;
  readonly message?: string | null;
  readonly Note?: Note | null;
  readonly User?: User | null;
  readonly liked_users: (string | null)[];
  readonly collected_users: (string | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postNoteId?: string | null;
  readonly postUserId?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Note {
  readonly id: string;
  readonly title: string;
  readonly content?: string | null;
  readonly author?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly noteAuthorId?: string | null;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly user_sub_id: string;
  readonly user_pool_id: string;
  readonly username?: string | null;
  readonly collected_post: (string | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}