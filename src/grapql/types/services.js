import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLInputObjectType} from 'graphql';

export const ServicesType = new GraphQLObjectType({
    name: 'Services',
    description: 'Services from the house/department',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
    })
});

export const ServicesInputType = new GraphQLInputObjectType({
    name: 'addServices',
    description: 'add services',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
    })
});