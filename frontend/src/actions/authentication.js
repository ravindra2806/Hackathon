import axios from "axios";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_ERROR
} from "./types";
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
      console.log("the res is", res);
      dispatch({ type: GET_QUESTIONS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: GET_QUESTIONS,
        payload: err.response
      });
    });
};

export const getIssues = user => dispatch => {
  axios
    .get(
      "http://localhost:5000/api/sessions?filter=%7B%20%22include%22%3A%20%5B%22responses%22%2C%20%22issueType%22%5D%20%7D"
    )
    // .get("http://localhost:5000/api/questions")
    .then(res => {
      console.log(res);

      dispatch({ type: GET_ISSUES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: GET_ISSUES_ERROR,
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
