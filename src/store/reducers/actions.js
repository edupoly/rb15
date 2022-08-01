import axios from 'axios';
export function getAllCountries(){
    console.dir(axios)
    return (dispatch)=>{
        axios.get("https://restcountries.com/v2/all")
        .then(response=>{
            dispatch({type:'UPDATE_COUNTRIES',payload:response.data})
        })
    }
}