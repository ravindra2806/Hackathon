import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, GET_QUESTIONS, GET_QUESTIONS_SUCCESS } from "./types";
import setAuthToken from "../setAuthToken";

export const registerUser = (user, history) => dispatch => {
  axios
    .post("/api/users/register", user)
    .then(res => history.push("/login"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const loginUser = user => dispatch => {
  axios
    .post("http://localhost:5000/api/teamMembers/login", user)
    .then(res => {
      const { id } = res.data;
      localStorage.setItem("jwtToken", id);
      setAuthToken(id);
      //const decoded = jwt_decode(id);
      dispatch(setCurrentUser(res.data));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getQuestions = user => dispatch => {
  axios
    .get("http://localhost:5000/api/questions")
    .then(res => {
      console.log('the res is', res);
      dispatch({ type: GET_QUESTIONS_SUCCESS, payload:res.data});
    })
    .catch(err => {
      dispatch({
        type: GET_QUESTIONS,
        payload: err.response
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push("/login");
};
