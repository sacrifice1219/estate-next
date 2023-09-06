import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '0bdcab70d5mshc52ab4dd93f68e2p10af9cjsn63643feb67e8',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}