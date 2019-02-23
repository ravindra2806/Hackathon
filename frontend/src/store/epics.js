import { getAdminData } from '../state/admin'
import { combineEpics } from 'redux-observable';

const rootEpic = combineEpics(getAdminData);

export default rootEpic
