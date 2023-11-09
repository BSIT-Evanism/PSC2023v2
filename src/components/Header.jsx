import React from 'react'

function Header({ params }) {
    return (
        <div>
            <header className='b-b-1 p-4 text-2xl'>Seoul Stay - {params}</header>
        </div>
    )
}

export default Header