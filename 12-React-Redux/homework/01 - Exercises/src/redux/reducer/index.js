import { GET_STORE_NAME, DELETE_PRODUCT, ADD_PRODUCT } from "../actions/types";

const initialState = {
  list: [],
  storeName: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_PRODUCT:
      let filsterState = state.list.filter(
        (elem) => elem.id !== action.payload
      );
      return {
        ...state,
        list: filsterState,
      };
    case GET_STORE_NAME:
      return {
        ...state,
        storeName: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
