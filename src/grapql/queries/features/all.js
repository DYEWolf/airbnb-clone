import {GraphQLList} from 'graphql';

import {FeaturesType} from '../../types/features';

import Features from '../../../models/features';


const queryAllFeatures = {
    type: new GraphQLList(FeaturesType),
    resolve() {
        const features = Features.find().exec();

        return features;
    }
}

export default queryAllFeatures;