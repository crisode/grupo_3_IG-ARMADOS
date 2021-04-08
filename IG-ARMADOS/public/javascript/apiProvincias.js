console.log("Vinculado")

let $provinciaSelect = document.querySelector("#provinciaSelect"),
    $localidadSelect = document.querySelector("#localidadSelect")

    $provinciaSelect.addEventListener("focus", () => {
        fetch("https://apis.datos.gob.ar/georef/api/provincias")
          .then((response) => response.json())
          .then((result) => {
            result.provincias.sort((prev, next) =>
              prev.nombre > next.nombre ? 1 : prev.nombre < next.nombre ? -1 : 0
            );
            result.provincias.forEach((provincia) => {
              $provinciaSelect.innerHTML += `<option value=${provincia.nombre}>${provincia.nombre}</option>`;
            });
          });
      });


      $provinciaSelect.addEventListener("change", () => {
        fetch(
          "https://apis.datos.gob.ar/georef/api/localidades?max=1000&provincia=" +
            $provinciaSelect.value
        )
          .then((response) => response.json())
          .then((result) => {
              $localidadSelect.innerHTML = `<option value="${result.localidad}" hidden selected>Seleccione la localidad</option>`;
              result.localidades.forEach((localidad) => {
              $localidadSelect.innerHTML += `<option value=${localidad.nombre}>${localidad.nombre}</option>`;
            });
          });
      });