import AxiosConfig from "./AxiosConfig";

async function onSearchSubmit(term) {
   let response = await AxiosConfig.get('/search', {
      params: {
         q: term
      }
   });
   return response.data.items;
}

function getUserData() {
   return JSON.parse(localStorage.getItem('userData'));
}

function setUserData(data) {
   localStorage.setItem('userData', JSON.stringify(data));
}

export { onSearchSubmit, getUserData, setUserData };