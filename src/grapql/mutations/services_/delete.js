import {GraphQLNonNull, GraphQLID} from 'graphql'

import {ServicesType} from '../../types/services';
import Services from '../../../models/services';

export default {
    type:ServicesType,
    args:{
        data:{
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteService = Services.findByIdAndRemove(params.id).exec()
        if (!deleteService) throw Error("Error al borrar el servicio");
        return deleteService;
    }
}