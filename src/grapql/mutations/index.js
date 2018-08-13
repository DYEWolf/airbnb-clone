import feature from './features';
import estate from './estates';
import reservation from './reservations';
import service from './services_';

export default {
    ...feature,
    ...estate,
    ...reservation,
    ...service
}