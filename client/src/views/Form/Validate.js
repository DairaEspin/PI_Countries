const regexActividad = /^[A-Za-zñÑ\s]+$/; //Solo letras y espacios
const regexDificultad = /^[1-5]$/; //Solo nums del 1 al 5
const regexDuracion = /^(?:[1-9]|1\d|2[0-4])$/; // Solo nums del 1 al 24

const validate = (formData) => {
  const errors = {};

  if (!formData.name)
    errors.name = "* Por favor, ingrese el tipo de actividad";
  else if (!regexActividad.test(formData.name))
    errors.name = "* El tipo de actividad no puede contener números";

  if (!formData.difficulty)
    errors.difficulty =
      "* Por favor, ingrese la dificultad como un número del 1 al 5";
  else if (!regexDificultad.test(formData.difficulty))
    errors.difficulty = "* La dificultad debe ser un número entre 1 y 5";

  if (!formData.duration)
    errors.duration = "* Por favor, ingrese la duración en horas";
  else if (!regexDuracion.test(formData.duration))
    errors.duration =
      "* La duración debe ser un número entre 1 y 24 horas";

  if (!formData.season)
    errors.season = "* Por favor, seleccione una temporada";

  if (!formData.pais)
    errors.pais = "* Por favor, seleccione al menos un pais de la lista";

  return errors;
};

export default validate;