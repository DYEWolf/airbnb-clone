import {GraphQLNonNull, GraphQLID} from 'graphql';

import {UserType} from '../../types/users';

import User from '../../../models/user';

const querySingleUser = {
    type: UserType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const user = User.findById(params.id).exec();
        
        return user;
    }
}

export default querySingleUser;