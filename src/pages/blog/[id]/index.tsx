import dynamic from 'next/dynamic';
import React from 'react'

const Test = () => {
  return (
    <div>Testssssss 1</div>
  )
}


export default dynamic(() => Promise.resolve(Test), { ssr: false });