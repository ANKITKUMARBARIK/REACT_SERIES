import React, { memo } from 'react'

// memo
function ChildA({countTwo, func, name}){
    console.log('Child Component ',Date.now())
    return (
        <>
        <h1>{name}</h1>
        <h1>{func()}</h1>
        </>
    )
}

export default memo(ChildA);
// agar aap React.memo ke andar component ko wrap kr dete hain..isse aapka component re-render tabhi hoga jab props change honge nhi toh re-render nhi hoga
// but ye sirf is type ke `const name = 'ankit'` value ko handle kr sakta h
// if u are sending the function then React.memo won't be able to save u from re-rendering