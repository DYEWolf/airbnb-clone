import {GraphQLNonNull, GraphQLID} from 'graphql'

import {EstatesType, EstatesInputType} from '../../types/estates';
import Estates from '../../../models/estates';

export default {
    type:EstatesType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            type: new GraphQLNonNull(EstatesInputType)
        }
    },
    resolve(root,params){
        return Estates.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
        .then(estate => estate)
        .catch(erre =>  Error('Error al hacer el update'))
    }
}