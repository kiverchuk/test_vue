<template>
  <div>
   Rezultat = <input type="text" v-model="sum"> 
  </div>
</template>

<script>
export default {
  name: 'Output',
 data () {
    return {
      sum: messageFromStore ()
    }
  },
  computed: {
    messageFromStore () {
      return this.$store.getters.getX + this.$store.getters.getY
    }
  }
}
</script>