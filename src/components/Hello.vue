<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  vuex: {
    getters: {
      list: state => state.Series.list
    }
  },
  computed: {
    msg () {
      return this.list.join(' - ')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
