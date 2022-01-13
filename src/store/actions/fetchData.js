import axios from "axios";

export const fetchData = () => {
    return (dispatch) => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=19b452a630ab0ea4e468d066eb910f25&language=en-US&page=1')
        .then((data)=>{
            // console.log(data.data);
            dispatch(setData(data.data.results))
        })
        .catch(err=>{
            console.log(err.message);
        
        })
    }
}

export const setData = (payload) => {
    return{
        type: 'SET_POST', payload
    }
}