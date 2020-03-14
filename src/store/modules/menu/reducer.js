import produce from 'immer';

const INITIAL_STATE = {
  stateMenu: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.stateMenu = action.payload.menu;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.stateMenu = action.payload.menu;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.stateMenu = null;
        break;
      }
      default:
    }
  });
}
