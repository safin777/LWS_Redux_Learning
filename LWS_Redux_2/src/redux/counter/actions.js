//this is the action creator which create all the actions
//action creator is a function which return an action
//action is an object which has a type property

import { INCREMENT, DECREMENT } from "./actionTypes";

export const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
