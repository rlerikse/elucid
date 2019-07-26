// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    createdAt
    completed
    userList {
      id
      createdAt
      users {
        nextToken
      }
    }
    userId
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      completed
      userList {
        id
        createdAt
      }
      userId
    }
    nextToken
  }
}
`;
export const getUserList = `query GetUserList($id: ID!) {
  getUserList(id: $id) {
    id
    createdAt
    users {
      items {
        id
        name
        createdAt
        completed
        userId
      }
      nextToken
    }
  }
}
`;
export const listUserLists = `query ListUserLists(
  $filter: ModelUserListFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      users {
        nextToken
      }
    }
    nextToken
  }
}
`;
