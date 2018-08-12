import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} from 'graphql';

export const UserType = new GraphQLObjectType({
    name: 'Users',
    description: 'Users from database',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        mail: {
            type: GraphQLString
        },
        birthdate: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        photo: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
        location: {
            type: GraphQLString
        },
        role: {
            type: GraphQLString
        }
    })
});