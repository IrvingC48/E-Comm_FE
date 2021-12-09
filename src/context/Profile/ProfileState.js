import React, { useReducer } from 'react'
import ProfileReducer from './ProfileReducer';
import ProfileContext from './ProfileContext';

const ProfileState = (props) => {
  const initialState = {
    profile: {},
    isAuth: false
  };

  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  const addProfile = (dataProfile) => {
    dispatch({
      type: 'ADD_PROFILE',
      payload: dataProfile
    })
  };

  const isThereAuth = () => {
    dispatch({
      type: 'IS_THERE_AUTH',
      payload: !(state.isAuth)
    })
  };

  const deleteProfile = () => {
    dispatch({
      type: 'DELETE_PROFILE',
      payload: {}
    })
  };

  return (
    <ProfileContext.Provider value={{
      profile: state.profile,
      isAuth: state.isAuth,
      addProfile,
      isThereAuth,
      deleteProfile
    }}>
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileState
