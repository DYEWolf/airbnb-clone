import user from './user';
import features from './features';
import services from './services_';
import estates from './estates';

//import reservations from './reservations';

export default {
    ...user,
    ...services,
    ...features,
    ...estates
}