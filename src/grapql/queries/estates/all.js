import {GraphQLList} from 'graphql';

import {EstatesType} from '../../types/estates';

import Estates from '../../../models/estates';


const queryAllEstates = {
    type: new GraphQLList(EstatesType),
    resolve() {
        const estates = Estates.find().exec();

        return estates;
    }
}

export default queryAllEstates;