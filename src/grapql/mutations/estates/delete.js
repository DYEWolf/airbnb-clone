import {GraphQLNonNull, GraphQLID} from 'graphql'

import {EstatesType} from '../../types/estates';
import Estates from '../../../models/estates';

export default {
    type: EstatesType,
    args:{
        data:{
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteEstate = Estates.findByIdAndRemove(params.id).exec()
        if (!deleteEstate) throw Error("Error al borrar la propiedad");
        return deleteEstate;
    }
}