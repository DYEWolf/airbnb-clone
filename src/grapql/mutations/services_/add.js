import {GraphQLNonNull} from 'graphql'

import {ServicesType, ServicesInputType} from '../../types/services';
import Services from '../../../models/services';

export default {
    type: ServicesType,
    args:{
        data:{
            type: new GraphQLNonNull(ServicesInputType)
        }
    },
    resolve(root,params){
        const service = new Services(params.data);
        const newService = service.save();
        if (!newService) throw Error("Error al crear el servicio");
        return newService;
    }
}