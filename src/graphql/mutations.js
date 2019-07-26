// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createUserList = `mutation CreateUserList($input: CreateUserListInput!) {
  createUserList(input: $input) {
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
export const updateUserList = `mutation UpdateUserList($input: UpdateUserListInput!) {
  updateUserList(input: $input) {
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
export const deleteUserList = `mutation DeleteUserList($input: DeleteUserListInput!) {
  deleteUserList(input: $input) {
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
