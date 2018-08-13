import {GraphQLNonNull, GraphQLID} from 'graphql'

import {FeaturesType} from '../../types/features';
import Features from '../../../models/features';

export default {
    type:FeaturesType,
    args:{
        data:{
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteFeature = Features.findByIdAndRemove(params.id).exec()
        if (!deleteFeature) throw Error("Error al borrar el servicio");
        return deleteFeature;
    }
}