import { createSelector } from 'reselect'
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { checkStatus, parseJSON } from '../util/util'
import { EMPTY } from 'rxjs'
// import head from 'lodash/fp/head'
// import map from 'lodash/fp/map'
// import filter from 'lodash/fp/filter'
// import groupBy from 'lodash/fp/groupBy'
// import sumBy from 'lodash/fp/sumBy'
// Constants
export const FETCH_DATA = 'Fetch.Data'
export const FETCH_DATA_SUCCESS = 'Fetch.Data.Success'

//Actions
export const fetchData = payload => ({ payload, type: FETCH_DATA })
export const fetchDataSuccess = payload => ({ payload, type: FETCH_DATA_SUCCESS })


//Epics
let adminData = {}
export const getAdminData = action$ => action$.pipe(
    ofType(FETCH_DATA),
    switchMap(({ payload }) => {
        fetch('http://localhost:3200/api/account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(checkStatus)
            .then(parseJSON)
            .then(data => adminData = data)

        return of(fetchDataSuccess(adminData))

    })
)

//Selector

// const itemsFromState = state => state.itemList
// export const SelectAllItems = createSelector(itemsFromState, items => items)

const initialAdmin = []
//reducer
export const adminReducer = (state = initialAdmin, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return [...state, action.payload]
        default:
            return state;
    }
}