import { GET_STORE_NAME, DELETE_PRODUCT, ADD_PRODUCT } from "../actions/types";
import axios from "axios";
import { get } from "@11ty/eleventy/src/TemplateCache";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
}

export function getStoreName() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/store")
      .then((response) => console.log(response));
    /*Aquí es donde agregas tu código*/
    return dispatch({ type: GET_STORE_NAME, payload: null });
  };
}
