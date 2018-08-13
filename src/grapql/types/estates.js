import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInputObjectType
} from 'graphql'

import {UserType} from './users';
import {FeaturesType} from './features';
import {ServicesType} from './services';

import User from '../../models/user';
import Features from '../../models/features';
import Services from '../../models/services';

export const RatingsType = new GraphQLObjectType({
    name: 'Ratings',
    description: 'Rating array',
    fields: () => ({
        _id: {
            type:GraphQLNonNull(GraphQLID)
        },
        comments: {
            type: GraphQLString
        },
        stars: {
            type: GraphQLInt
        }
    })
});

export const EstatesType = new GraphQLObjectType({
    name: 'Estates',
    description: 'Estates from airbnb clone',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        short_description: {
            type: GraphQLString
        },
        long_description: {
            type: GraphQLString
        },
        location: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
        user: {
            type: UserType,
            resolve(estate){
                const {user} = estate;
                return User.findById(user).exec();
            }
        },
        types: {
            type: GraphQLInt
        },
        value: {
            type: GraphQLInt
        },
        rating: {
            type: new GraphQLList(RatingsType)
        },
        features: {
            type: new GraphQLList(FeaturesType),
            resolve(estate){
                const {features} = estate;
                return Features.find({_id:{$in:features}}).exec();
            }
        },
        services: {
            type: new GraphQLList(ServicesType),
            resolve(estate){
                const {services} = estate;
                return Services.find({_id:{$in:services}}).exec();
            }
        },
        photos: {
            type: GraphQLList(GraphQLString)
        },
        start_availability: {
            type: GraphQLString
        },
        end_availability: {
            type: GraphQLString
        }
    })
});

export const EstatesInputType = new GraphQLInputObjectType({
    name: 'addEstates',
    description: 'add estates',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        short_description: {
            type: GraphQLString
        },
        long_description: {
            type: GraphQLString
        },
        location: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
        user: {
            type: GraphQLNonNull(GraphQLID),
        },
        types: {
            type: GraphQLInt
        },
        value: {
            type: GraphQLInt
        },
        services: {
            type: new GraphQLList(GraphQLID)
        },
        photos: {
            type: GraphQLList(GraphQLString)
        },
        start_availability: {
            type: GraphQLString
        },
        end_availability: {
            type: GraphQLString
        }
    })
});