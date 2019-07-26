// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateUserList = `subscription OnCreateUserList {
  onCreateUserList {
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
export const onUpdateUserList = `subscription OnUpdateUserList {
  onUpdateUserList {
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
export const onDeleteUserList = `subscription OnDeleteUserList {
  onDeleteUserList {
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
