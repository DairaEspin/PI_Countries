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
  
  export const filterContinent = (continent) => {
    return {
      type: FILTER_CONTINENT,
      payload: continent,
    };
  };
  
  export const createActivity = (activityData) => {
    const endpoint = `http://localhost:3001/create`;

    let aux = activityData
    aux.difficulty = Number(aux.difficulty)
    aux.duration = Number(aux.duration)
  
    return (dispatch) => {
      axios
        .post(endpoint, aux)
        .then(({ data }) => {
          console.log(data);
          return dispatch({
            type: CREATE_ACTIVITY,
            payload: data,
          });
        })
        .catch((error) => {
          console.error("Error creating:", error);
        });
    };
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
        throw error; 
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