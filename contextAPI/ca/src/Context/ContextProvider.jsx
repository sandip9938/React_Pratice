import React from 'react'
import UserContext from './UserContext'

// eslint-disable-next-line react/prop-types
const ContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider
