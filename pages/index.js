import { API, graphqlOperation } from "aws-amplify";
import config from "../src/aws-exports";
API.configure(config);
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import {
    createUser,
    updateUser,
    deleteUser,
    createUserList,
    deleteUserList,
    updateUserList,
} from "../src/graphql/mutations";
import {getUserList, getUser, listUsers} from "../src/graphql/queries";

import {
    onCreateUser,
    onUpdateUser,
    onDeleteUser,
    onCreateUserList,
    onUpdateUserList,
    onDeleteUserList,
} from "../src/graphql/subscriptions";


const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to Elucid</h1>
            <p>Currently registered users</p>
            <ul className="list-group">
                <li className="list-group-item">Yamama</li>
                <li className="list-group-item">{props.users}</li>
            </ul>
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    let result; /*: { data: GetTodoListQuery; errors: {}[] };*/
    try {
        // Fetch our list from the server
        result = await API.graphql(graphqlOperation(getUserList(), { id: "global" }));
        console.log(result);
        return result;
    } catch (err) {
        console.warn(err);
        return { users: [] };
    }
    // if (result.errors) {
    //     console.warn("Failed to fetch getUserList. ", result.errors);
    //     return { users: [] };
    // }
    // if (result.data !== null) {
    //     return { users: result.data.users.name };
    // }
    // try {
    //     await API.graphql(
    //         graphqlOperation(createUserList, {
    //             input: {
    //                 id: "global",
    //                 createdAt: `${Date.now()}`
    //             }
    //         })
    //     );
    // } catch (err) {
    //     console.warn(err);
    // }
    // return { users: [] };
}

export default Index;
