<template>
  <div >
    <br>
    X: <input type="text" v-model="x">
    <br><br> 
    Y: <input type="text" v-model="y">
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      x: '0',
      y: '0'
    }
  },
  watch: {
    x: function (val) {
      //this.x = x
      this.$store.commit('setX', val)
    },
    y: function (val) {
     // this.y = y
      this.$store.commit('setY', val)
    }
  }
}
</script>