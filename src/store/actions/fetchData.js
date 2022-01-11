import axios from "axios";

export const fetchData = () => {
    return (dispatch) => {
        axios.get('https://link')
        .then(({data})=>{
            // console.log(data);
            dispatch(setData(data.data))
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