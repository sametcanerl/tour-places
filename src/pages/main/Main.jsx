import React from 'react'
import {data} from "../../helpers/data"
import Card from './Card'
import "./main.scss"

const Main = () => {
   
  return (
    <div className='card-container'>
        {data?.map((city,index)=><Card {...city}  key={index} />
            
        )}

    </div>
  )
}

export default Main