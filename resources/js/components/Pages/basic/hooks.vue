<template>
    <div>
      hook
    </div>
</template>

<script>
export default {
  
    data() {
        return {
         name: "Hooks",
            
        };
    },

    beforeCreate(){
        console.log('hooks.vue beforeCreate');//pt login 
    },

  created(){
    console.log('hooks.vue created');
  },
  
  mounted() {
    console.log('hooks.vue loaded');
  },
};
</script>

<style scoped>
/* Your style code here */
</style>