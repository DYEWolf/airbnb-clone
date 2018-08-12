import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID} from 'graphql';

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