/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      message
      Note {
        id
        title
        content
        author {
          id
          email
          user_sub_id
          user_pool_id
          username
          collected_post
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        noteAuthorId
      }
      User {
        id
        email
        user_sub_id
        user_pool_id
        username
        collected_post
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      liked_users
      collected_users
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postNoteId
      postUserId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        Note {
          id
          title
          content
          author {
            id
            email
            user_sub_id
            user_pool_id
            username
            collected_post
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          noteAuthorId
        }
        User {
          id
          email
          user_sub_id
          user_pool_id
          username
          collected_post
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        liked_users
        collected_users
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postNoteId
        postUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        message
        Note {
          id
          title
          content
          author {
            id
            email
            user_sub_id
            user_pool_id
            username
            collected_post
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          noteAuthorId
        }
        User {
          id
          email
          user_sub_id
          user_pool_id
          username
          collected_post
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        liked_users
        collected_users
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postNoteId
        postUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      title
      content
      author {
        id
        email
        user_sub_id
        user_pool_id
        username
        collected_post
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      noteAuthorId
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        author {
          id
          email
          user_sub_id
          user_pool_id
          username
          collected_post
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        noteAuthorId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        content
        author {
          id
          email
          user_sub_id
          user_pool_id
          username
          collected_post
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        noteAuthorId
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      user_sub_id
      user_pool_id
      username
      collected_post
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        user_sub_id
        user_pool_id
        username
        collected_post
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        user_sub_id
        user_pool_id
        username
        collected_post
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
