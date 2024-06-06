import "./UVIndex.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function UVIndex() {

    const [uv, setUV] = useState(null);
    
    async function getUV(){
        try{
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/api/uvindex`)
            setUV(response.data)
            console.log(response.data);
        }
        catch(error){
            console.log("Error fetching UV data", error)
        }


          
        }
        useEffect(() => {
            getUV();
          }, []);


        

    return (
        <>
            {uv ? <h1>{uv.uv}</h1> : <h1>0</h1>}
        </>
    )
}

export default UVIndex;