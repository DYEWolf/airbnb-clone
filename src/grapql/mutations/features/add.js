import {GraphQLNonNull} from 'graphql'

import {FeaturesType,FeaturesInputType} from '../../types/features';
import Features from '../../../models/features';

export default {
    type:FeaturesType,
    args:{
        data:{
            type: new GraphQLNonNull(FeaturesInputType)
        }
    },
    resolve(root,params){
        const feature = new Features(params.data);
        const newFeature = feature.save();
        if (!newFeature) throw Error("Error al crear la caracteristica");
        return newFeature;
    }
}