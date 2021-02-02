import axios from "axios";
 
const API_URL = "https://api.unsplash.com/";
 
axios.defaults.baseURL = API_URL;
 
// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
 
const AUTH_TOKEN = 'Client-ID lat2Noy1qfpAUFWGHE98gnyWo1Dl96G5AyHzKj_8Y0s';
 
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
 
export const getPhotos = async (search) => {
 
    try {
        
        const response = await axios.get(`search/photos?page=1&query=${search}`);
 
        console.log(response);
 
        return response.data;
    } catch (error) {
 
        console.log(error);
    }
}