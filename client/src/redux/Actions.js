import {
    FILTER_CONTINENT,
    GET_ACTIVITY,
    GET_ALLCOUNTRY,
    GET_BYNAME,
    GET_ID,
    ORDER_COUNTRY,
    ORDER_POPULATION,
    CREATE_ACTIVITY,
  } from "./ActionTypes";
  import axios from "axios";

  export const orderPopulation = (order) => {
    return {
      type: ORDER_POPULATION,
      payload: order,
    };
  };
  
  export const orderCountry = (order) => {
    return {
      type: ORDER_COUNTRY,
      payload: order,
    };
  };
  
  export const filterContinent = (continente) => {
    return {
      type: FILTER_CONTINENT,
      payload: continente,
    };
  };
  
  export const createActivity = (activityData) => {
    const endpoint = `http://localhost:3001/create`;
  
    return  (dispatch) => {
      try {
        const { data } = axios.post(endpoint, activityData)
        .then((response) =>
        dispatch({
          type: CREATE_ACTIVITY,
          payload: data, // Agrega "success" a la respuesta
        }))
      } catch (error) {
        console.error("Error al crear la actividad: ", error);
        
      }
    }
  } 
        
  
  export const getActivity = (activityFilter) => {
    const endpoint = `http://localhost:3001/activity?activityFilter=${activityFilter}`;
  
    return async (dispatch) => {
      try {
        const { data } = await axios(endpoint);
        return dispatch({
          type: GET_ACTIVITY,
          payload: data,
        });
      } catch (error) {
        console.error("Error al mostrar la actividad: ", error);
      }
    };
  };
  
  export const getId = (id) => {
    const endpoint = `http://localhost:3001/${id}`;
  
    return async (dispatch) => {
      try {
        const { data } = await axios(endpoint);
        return dispatch({
          type: GET_ID,
          payload: data,
        });
      } catch (error) {
        console.error("Error al obtener el país por ID: ", error);
        throw error; // Propaga el error para manejarlo en el componente Detail
      }
    };
  };
  
  export const getCountryByName = (payload) => {
    const endpoint = `http://localhost:3001/name?name=${payload}`;
  
    return async (dispatch) => {
      try {
        const { data } = await axios(endpoint);
  
        return dispatch({
          type: GET_BYNAME,
          payload: data,
        });
      } catch (error) {
        console.error("Error al obtener el país por nombre: ", error);
      }
    };
  };
  
  export const getAllCountry = () => {
    const endpoint = `http://localhost:3001/countries/`;
  
    return async (dispatch) => {
      try {
        const { data } = await axios(endpoint);
        return dispatch({
          type: GET_ALLCOUNTRY,
          payload: data,
        });
      } catch (error) {
        console.error("Error al obtener el país", error);
      }
    };
  };