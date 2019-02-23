import { createStore } from 'redux'
import rootReducer from './reducers'
import rootEpics from './epics'

const store = createStore(rootReducer, {}, window.devToolsExtension && window.devToolsExtension())

export default store