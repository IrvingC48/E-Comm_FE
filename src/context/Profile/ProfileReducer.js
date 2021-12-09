import { ADD_PROFILE, DELETE_PROFILE, IS_THERE_AUTH } from '../types';

const ProfileReducer = ( state,action ) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_PROFILE:
      return {
        ...state,
        profile: payload
      }
    case DELETE_PROFILE:
      return {
        ...state,
        profile: payload
      }
    case IS_THERE_AUTH:
      return {
        ...state,
        isAuth: payload
      }
    default:
      return state;
  }
};

export default ProfileReducer;