import {GraphQLNonNull, GraphQLID} from 'graphql';

import {EstatesType} from '../../types/estates';

import Estates from '../../../models/estates';

const querySingleEstate = {
    type: EstatesType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const estate = Estates.findById(params.id).exec()
        
        return estate;
    }
}

export default querySingleEstate;