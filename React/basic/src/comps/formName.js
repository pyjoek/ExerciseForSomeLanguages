import { useState } from 'react'

function Fom() {
    const [name, setName] = useState("")

    return (
        <>
            <h1>Hello {name}</h1>
            <input type="text" placeholder='Enter your name' value={name} onChange={(e) => {setName(e.target.value)}} />
        </>
    )
}

export default Fom