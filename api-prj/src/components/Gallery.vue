<template>
  <div>
   <input type="text" v-model="t_search"><button @click="search">Click for search</button>
      <div v-for="picture in results" :key="picture.id" class="border-bottom">
 
          <img :src="picture.urls.small" alt="Bild">
 
          <p>
              {{picture.user.name}}
          </p>
          <p>
              insta: {{picture.user.instagram_username}}
          </p>
      </div>
 
 
  </div>
</template>
 
<script>
 
 import { getPhotos } from "@/api/api.js";
 import axios from "axios";
 const API_URL = "https://api.unsplash.com/";
 axios.defaults.baseURL = API_URL;
  
const AUTH_TOKEN = 'Client-ID lat2Noy1qfpAUFWGHE98gnyWo1Dl96G5AyHzKj_8Y0s';
 
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
export default {

    data: function(){
 
        return {
 
            results: [],
            t_search:"",
        }
        
    }
    ,methods: {

        search: async function(){
        let search=this.t_search
          const data = await getPhotos(search);
 
        console.log(data);
 
        this.results = data.results;
        }
    }
    // methods:{
    //     async search()
    //     {
    //     try {
 
    //     const response = await axios.get("search/photos?page=2&query=dog");
    //     console.log(response);
       
    //     this.results=await response.data;
    //     console.log(this.results)
    //     }
    //      catch (error) {
 
    //     console.log(error);
    // }
    //     }

}
</script>
 
<style>
 
.border-bottom{
    border-bottom: 2px solid #ddd;
    margin-bottom: 1rem;
}
</style>