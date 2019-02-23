import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      console.log('the actions are', action);
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case GET_QUESTIONS_SUCCESS:
        console.log('the action.payload', action.payload);
        return {...state, chatList: action.payload};
    default:
      return state;
  }
}
