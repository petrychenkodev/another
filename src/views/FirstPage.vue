<template>
  <div class="container mt-5">
    <form>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" class="form-control" v-model.trim="email" @blur="validateEmail" :class="{ 'is-invalid': emailError }" />
        <div class="invalid-feedback" v-if="emailError">{{ emailError }}</div>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="password" class="form-control" v-model.trim="password" @blur="validatePassword" :class="{ 'is-invalid': passwordError }" />
        <div class="invalid-feedback" v-if="passwordError">{{ passwordError }}</div>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    }
  },
  methods: {
    validateEmail() {
      const regex = /^\S+@\S+\.\S+$/
      if (!regex.test(this.email)) {
        this.emailError = 'Invalid email'
      } else {
        this.emailError = ''
      }
    },
    validatePassword() {
      if (this.password.length < 6) {
        this.passwordError = 'Password must be at least 6 characters'
      } else {
        this.passwordError = ''
      }
    },
    login() {
      this.validateEmail()
      this.validatePassword()

      if (!this.emailError && !this.passwordError) {
        this.$router.push('/products')
      }
    }
  }
}
</script>

<style scoped>
  .form-control.is-invalid {
    border-color: #dc3545;
  }

  .invalid-feedback {
    display: block;
    margin-top: .25rem;
    font-size: 80%;
    color: #dc3545;
  }
</style>