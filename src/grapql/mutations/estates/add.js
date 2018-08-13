import {GraphQLNonNull} from 'graphql'

import {EstatesType, EstatesInputType} from '../../types/estates';
import Estates from '../../../models/estates';

export default {
    type:EstatesType,
    args:{
        data:{
            type: new GraphQLNonNull(EstatesInputType)
        }
    },
    resolve(root,params){
        const estate = new Estates(params.data);
        const newEstate = estate.save();
        if (!newEstate) throw Error("Error al crear la propiedad");
        return newEstate;
    }
}