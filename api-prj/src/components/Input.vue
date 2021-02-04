<template>
  <div>
  <input type="text" v-model="t_search" >
   <button @click="search(t_search)">Click for search</button>
   <button @click="next(t_search)" >Next</button>
   <button @click="prev(t_search)" >Prev</button>
   {{myVal}}
      </div>
</template>

<script>
export default {
 props:{
     t_search:String
 },



    
methods:{
    search(t_search)
    {    
        this.$emit('search',t_search)
      
    },
    next(t_search){
        this.$emit('next',t_search)
    },
    prev(t_search){
       this.$emit('prev',t_search)
    }
}
}
</script>

<style>

</style>