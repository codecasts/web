
<script>
  export default {
    name: 'Users',
    vuex: {
      getters: {
        list: state => state.Users.list
      }
    }
  }
</script>

<template>
  <div>
    <h1>Users</h1>
    <p v-for="user in list">{{ user }}</p>
  </div>
</template>