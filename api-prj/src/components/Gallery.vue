<template>
<div>
<Input :t_search="t_search" @search="search" @next="next" @prev="prev" />

  <div>
      <p>selected pic</p>
     <div v-if="this.selected_picture">
         <h3>This picture got
         {{this.selected_picture.likes}}likes</h3>
         <img :src="this.selected_picture.urls.regular"/>
         </div>
    </div>
    <div v-if="isShowing">
      <div v-for="picture in results" :key="picture.id" class="border-bottom"  >
 
          <div v-if="isShowing">
          <img :src="picture.urls.small" alt="Bild"  v-on:click="selected_card(picture) ">
       </div>
      </div>
  
     
    </div>
     <div>

  </div>
</div>
</template>
 
<script>
 
 import { getPhotos } from "@/api/api.js";
import Input from './Input.vue';
 

export default {
  components:{
    Input

    
  },
    data: function(){
 
        return {
 
            results: [],
           
            page_num:1,
            isShowing:true,
            selected_picture:null,
            t_search:""
        }
       
        }
       
    ,methods: {
       
        search: async function(t_search){
      
        const data = await getPhotos(t_search,this.page_num);
         console.log(data); 
         this.results = data.results;
         this.t_search=t_search
     
   },
         next: async function(t_search){
         // console.log(t_search)  
         
           this.page_num++;
           
          const data = await getPhotos(t_search,this.page_num);
          this.results = data.results;
          console.log(this.results)
        },
         prev: async function(t_search){
            if(this.page_num>=1)
           this.page_num--;
          const data = await getPhotos(t_search,this.page_num);
          this.results = data.results;
          console.log(this.results)
        },
        selected_card: function(picture)
        { 
         this.isShowing=!this.isShowing
       this.selected_picture=picture

        }
         
    }
    
}
</script>
 
<style>
 
.border-bottom{
    border-bottom: 2px solid #ddd;
    margin-bottom: 1rem;
}
</style>