import {GraphQLList} from 'graphql';

import {ServicesType} from '../../types/services';

import Services from '../../../models/services';


const queryAllServices = {
    type: new GraphQLList(ServicesType),
    resolve() {
        const services = Services.find().exec();

        return services;
    }
}

export default queryAllServices;