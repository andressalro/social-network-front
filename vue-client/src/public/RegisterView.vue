<template>
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Registrese</h1>

      <label for="firstName" class="sr-only">Nombre </label>
      <input type="text" id="firstName" class="form-control" placeholder="Nombre" required>

      <label for="lastName" class="sr-only">Apellido </label>
      <input type="text" id="lastName" class="form-control" placeholder="Apellido" required>

      <label for="inputEmail" class="sr-only">Correo</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required>

      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>

      <label for="inputPasswordConfirm" class="sr-only">Password Confirm</label>
      <input type="password" id="passwordConfnirm" class="form-control" placeholder="Password Confirm" required>
      
      <button class="btn btn-lg btn-primary btn-block" type="submit">Registrar</button>
    </form>
</template>

<script>
export default {
    name: "RegisterView"
}
</script>

<style scoped>
  html,
  body {
    height: 100%;
  }

  body {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>