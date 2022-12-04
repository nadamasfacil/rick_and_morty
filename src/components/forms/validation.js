export default function validation({username, password}) {
  const regExUserName = /\S+@\S+\.\S+/;
  const regExPassword = '1234567890';
  const errors = {};
  let isError = true;

  if (username === '') errors.name = '" El Usuario no debe ser vacio "';
  else if (username.length >= 36) errors.name ='" El Usuario no debe tener más de 35 caracteres "'; 
  else if (!regExUserName.test(username)) errors.name = '" El Usuario debe ser un email "'; 

  if (password.length <= 5) errors.password = '" El Password no debe tener menos de 6 caracteres "'; 
  else if (password.length >= 11) errors.password = '" El Password no debe tener más de 10 caracteres "';   
  else {
    console.log('entre');
    for (let i=0; i<10; i++){
      console.log(i,'  ',regExPassword[i],'  ',password);
      if (password.includes(regExPassword[i])) {
        isError = false;
        i = 10;
      }
    }
    console.log('iserror  ',isError);
    if (isError) errors.password = '" El Password debe tener al menos un digito "';
  }

  return errors;
}

//   const regExName = ^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$;