const firebaseConfig = {
    apiKey: "AIzaSyDdZWAnrL7QIeDBdqNUbJ44nw-XzGcsnZQ",
    authDomain: "ing-software-f4bd1.firebaseapp.com",
    projectId: "ing-software-f4bd1",
    storageBucket: "ing-software-f4bd1.appspot.com",
    messagingSenderId: "767531691582",
    appId: "1:767531691582:web:7ecd59c340b451ca56ab6f"
  };
      
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  const SaveAdmin = (user) =>{

    db.collection("Admins").add({
      user
    })
  .then((docRef) => {
    MJSOK();
    })
  .catch((error) => {
    MJSERROR();
    });
  }


  const MJSOK =()=>{
    Swal.fire(
      'Buen trabajo!',
      'Datos guardados correctamente!',
      'success'
    )
  }

  const MSJERROR =()=>{
    Swal.fire(
      'ops!',
      'Los Datos no fueron guardados!',
      'error'
    )
  }

  $("#btnsave").on('click',()=>{
    let nombre = $("#nombre").val();
    let correo = $("#correo").val();
    let contraseña = $("#contraseña").val();
    let repcontraseña = $("#repcontraseña").val();

    const user = {
      nombre,
      correo,
      contraseña,
      repcontraseña
    }

    SaveAdmin(user);
  })