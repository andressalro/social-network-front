<template>
    <form class="form-signin" @submit.prevent="submit">
      <h1 class="h3 mb-3 font-weight-normal">Registrese</h1>

      <label for="firstName" class="sr-only">Nombre </label>
      <input type="text" id="firstName" class="form-control" placeholder="Nombre" required v-model="firstName">

      <label for="lastName" class="sr-only">Apellido </label>
      <input type="text" id="lastName" class="form-control" placeholder="Apellido" required v-model="lastName">

      <label for="inputEmail" class="sr-only">Correo</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required v-model="email">

      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">

      <label for="inputPasswordConfirm" class="sr-only">Password Confirm</label>
      <input type="password" id="passwordConfirm" class="form-control" placeholder="Password Confirm" required v-model="passwordConfirm">
      
      <button class="btn btn-lg btn-primary btn-block" type="submit">Registrar</button>
    </form>
</template>

<script>
import {ref} from "vue";

export default {
    name: "RegisterView",
    setup() {
      const firstName = ref('');
      const lastName = ref('');
      const email = ref('');
      const password = ref('');
      const passwordConfirm = ref('');

      const submit = () => {
        console.log({
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
          passwordConfirm: passwordConfirm.value
        })
      }

      return {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
        submit
      }
    }
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