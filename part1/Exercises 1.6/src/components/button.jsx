
import { useState } from "react"
const But = ({onTick,text}) => {
    
    
    return(
        <div>
            <button onClick={onTick}>{text}</button>
        </div>
    )

}
export default But