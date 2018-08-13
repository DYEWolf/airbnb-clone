import {GraphQLNonNull, GraphQLID} from 'graphql'

import {FeaturesType, FeaturesInputType} from '../../types/features';
import Features from '../../../models/features';

export default {
    type:FeaturesType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            type: new GraphQLNonNull(FeaturesInputType)
        }
    },
    resolve(root,params){
        return Features.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
        .then(feature => feature)
        .catch(erre =>  Error('Error al hacer el update'))
    }
}