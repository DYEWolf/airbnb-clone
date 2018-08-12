import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLID} from 'graphql';

export const FeaturesType = new GraphQLObjectType({
    name: 'Features',
    description: 'Features from the houses/departments',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        descripton: {
            type: GraphQLString
        },
        number_people: {
            type: GraphQLInt
        }
    })
});