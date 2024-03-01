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

const initialState = {
  allCountry: [],
  oneCountry: [],
  id: {},
  activity: [],
  activities: [],
  continentFilter: "",
  orderFilter: "",
  populationOrder: "",
  activityFilter: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BYNAME:
      return {
        ...state,
        oneCountry: action.payload,
      };
    case GET_ALLCOUNTRY:
      return {
        ...state,
        allCountry: action.payload,
      };
    case GET_ID:
      return {
        ...state,
        id: action.payload,
      };

    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case FILTER_CONTINENT:
      return {
        ...state,
        continentFilter: {
          ...state.continentFilter,
          continent: action.payload,
        },
      };
    case ORDER_COUNTRY:
      let orderCountries = [...state.allCountry]; // Hacer una copia de los países
      state.allCountry.sort((a, b) => {
        if (action.payload === "A-Z") {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        } else {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        }
      });
      return {
        ...state,
        allCountry: orderCountries,
        orderFilter: action.payload,
      };

    case ORDER_POPULATION:
      let sortedCountries = [...state.allCountry]; // Hacer una copia de los países

      state.allCountry.sort((a, b) => {
        if (action.payload === "A-Z") {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        } else {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        }
      });

      return {
        ...state,
        allCountry: sortedCountries,
        populationOrder: action.payload, // Actualiza la opción de ordenamiento por población
      };

    default:
      return state;
  }
}