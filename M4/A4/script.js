const userCardElementsOriginal = document.querySelectorAll(
  ".user-card-original"
);
const userCardElementsTransformed = document.querySelectorAll(
  ".user-card-transformed"
);

// Obtener los datos del API y suscribirse al observable
const apiUrl = "https://randomuser.me/api/?results=1";
const usersObservable = rxjs.ajax.ajax.getJSON(apiUrl).pipe(
  rxjs.operators.map((response) => response.results),
  rxjs.operators.tap((users) => {
    showOriginalValues(users);
    showTransformedValues(users);
  })
);
  
// Mostrar valores originales por defecto
usersObservable.subscribe();

// Manejador de eventos para el botón de alternar entre valores originales y transformados
const reloadButton = document.querySelector("#reload-button");
reloadButton.addEventListener("click", () => {
  usersObservable.subscribe();
});

// Función para mostrar los valores originales en los campos
function showOriginalValues(users) {
  users.forEach((user, index) => {
    const userCard = userCardElementsOriginal[index];
    showValues(userCard, user);
  });
}

// Función para mostrar los valores transformados en los campos
function showTransformedValues(users) {
  users.map((user, index) => {
    const userCard = userCardElementsTransformed[index];
    const transformedUser = {
      ...user,
      login: {
        ...user.login,
        username: `${user.name.first[0].toLowerCase()}${user.name.last.toLowerCase()}`,
      },
      email: user.email.replace(/@.*/, "@gmail.com"),
    };
    showValues(userCard, transformedUser);
  });
}

function showValues(userCard, user) {
  document.getElementById(userCard.id.concat("-username")).innerHTML = user.login.username;
  document.getElementById(userCard.id.concat("-email")).innerHTML =  user.email;
  document.getElementById(
    userCard.id.concat("-name")
  ).innerHTML = `${user.name.first} ${user.name.last}`;
  document.getElementById(userCard.id.concat("-age")).innerHTML = user.dob.age;
  document.getElementById(userCard.id.concat("-city")).innerHTML =
    user.location.city;
  document.getElementById(userCard.id.concat("-country")).innerHTML =
    user.location.country;
}
