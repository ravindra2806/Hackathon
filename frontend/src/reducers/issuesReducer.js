import { GET_ISSUES, GET_ISSUES_SUCCESS } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUES:
      console.log("the actions are", action);
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case GET_ISSUES_SUCCESS:
      console.log("the action.payload", action.payload);
      return { ...state, issues: action.payload };
    default:
      return state;
  }
}
