import './style.css'

const app = document.querySelector('#app');
const itemMenu = document.querySelectorAll('.navbarMenu');
let defaultActive = itemMenu[0];



const accionesMenu = (menu) => {
  app.innerHTML = `
    <h1>${menu.toUpperCase()}</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  `;
  switch (menu) {
    case 'Vehículos':
      seccionVehiculo();
      break;
    case 'Reporte':

      break;
    case 'Escritorio':

      break;
    case 'Ajustes':

      break;
    case 'Acerca de':

      break;

    default:
      break;
  }
}


const incializarComponente = () => {
  defaultActive.classList.add('active');

  itemMenu.forEach((item) => {
    item.addEventListener('click', (event) => {

      defaultActive.classList.remove('active');
      item.classList.add('active');
      defaultActive = item;


      const [, ...itemSeleccionado] = event.target.innerText.split(' ');
      if (itemSeleccionado == []) {
        return;
      }

      accionesMenu(itemSeleccionado.join(' '));

    });
  });
}



const seccionVehiculo = () => {
  const container = document.createElement('div');
  container.classList.add('container')
  container.innerHTML = `
    <div class="row">
        <div class="col">
          <button type="button" class="btn btn-success">Regisrar Vehiculo</button>
        </div>
      </div>

      <div class="row mt-3">

        <div class="col-4">
          <form action="#" class="form-control">
            <div class="input-group">
              <div class="mb-3 ms-2">
                <label for="dateStart" class="form-label">Inicio</label>
                <input type="date" id="dateStart" class="form-control">
              </div>
              <div class="mb-3 ms-2">
                <label for="dateStart" class="form-label">Fin</label>
                <input type="date" id="dateStart" class="form-control">
              </div>
            </div>
            <div id="emailHelp" class="form-text">Selecciona el rango de fechas para ver registros</div>
          </form>
        </div>

      </div>

      <div class="row mt-4">
        <div class="col">

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Descripción</th>
                <th scope="col">Placas</th>
                <th scope="col">Entrada</th>
                <th scope="col">Salida</th>
                <th scope="col">Imprimir ticket</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`;

  app.appendChild(container);
}


incializarComponente();