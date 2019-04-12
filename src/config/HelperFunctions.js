import AxiosConfig from "./AxiosConfig";

async function onSearchSubmit(term) {

   let response = await AxiosConfig.get('/search', {
      params: {
         q: term
      }
   });
   return response;
}

export default onSearchSubmit;