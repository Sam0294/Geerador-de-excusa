window.onload = function() {
  //write your code here
  document.getElementById("excusa").innerHTML = generaExcusa();
};

const generaExcusa = () => {
  let persona = ["el perro", "mi mama", "mi papa", "mi abuelo"];
  let accion = ["se comio", "lo tiro", "se lo llevo"];
  let contexto = ["la tarea", "con la basura", "con sus papeles"];

  let personaIndex = Math.floor(Math.random() * persona.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let contextoIndex = Math.floor(Math.random() * contexto.length);

  return (
    persona[personaIndex] +
    " " +
    accion[accionIndex] +
    " " +
    contexto[contextoIndex]
  );
};
