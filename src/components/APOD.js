import React, { useEffect, useState } from 'react'
import axios from 'axios'
import APODCard from './APODCard'

const APOD = () => {
    const [picOTD, setpicOTD] = useState([])

    const effectFn = () => {
        // 4. the effect fn is pulled from the waiting room and fired!
        axios
            .get("https://api.nasa.gov/planetary/apod?date=2020-07-28&api_key=FaKJpRF9Ohldf3BgWXmCwsKJNEIeDGHXg5aaeZCS")
            .then(response => {
              console.log('success!', response)
              // 5. STATE CHANGE! update films to Array of film objs
              setpicOTD(response.data) // response.data = Array[film objs]
            }) 
            .catch(error => console.log('error', error))
      }
    
      // 2. sees useEffect hook & queues like a waiting room the effect fn (first param)
      // 7. useEffect has dependency array of [], so effectFn IS NOT QUEUED.
      useEffect(effectFn, [])

    return (
        <div className="picOTD">
            <APODCard title={picsOTD.title} date={picsOTD.date} img={picsOTD.url} explanation={picsOTD.explanation}/>)}  
        </div>
    )

}





export default APOD;