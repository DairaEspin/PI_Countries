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
  // Obtener el nombre del continente seleccionado del payload
  const selectedContinent = action.payload;
  
  // Filtrar los países por el continente seleccionado
  const filteredCountries = state.allCountry.filter(country => {
    // Si no se ha seleccionado ningún continente, mostrar todos los países
    if (selectedContinent === "") {
      return true;
    }
    // Si el país pertenece al continente seleccionado, incluirlo en el filtro
    return country.continent === selectedContinent;
  });
  return {
    ...state,
    allCountry: filteredCountries,
    continentFilter: selectedContinent, // Actualiza el filtro por continente
  };

    // case FILTER_CONTINENT:
    //   return {
    //     ...state,
    //     continentFilter: {
    //       ...state.continentFilter,
    //       orderFilter: action.payload,
    //     },
    //   };
    case ORDER_COUNTRY:
      let orderCountries = [...state.allCountry]; 
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
        let populationOrder = [...state.allCountry];
        populationOrder.sort((a, b) => {
          if (action.payload === "Ascendent-Descendent") {
            if (a.population > b.population) {
              return 1;
            }
            if (b.population > a.population) {
              return -1;
            }
            return 0;
          } else {
            if (a.population > b.population) {
              return -1;
            }
            if (b.population > a.population) {
              return 1;
            }
            return 0;
          }
        });
        return {
          ...state,
          allCountry: populationOrder,
          orderFilter: action.payload, // Actualiza la opción de ordenamiento por población
        };
      

    default:
      return state;
  }
}