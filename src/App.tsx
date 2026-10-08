import {type ChangeEvent } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'


export default function App() {


  function handleClick() {
    console.log(2+2)
  }
function onchange(e:ChangeEvent<HTMLInputElement>) {
  console.log(e.target.value)
}

  return (
   <div className='m-5 flex gap-5 flex-col'>
    <Button variant='outline' onClick={handleClick}>Click me</Button>
    <Button variant='error' size='xl' className='min-w-xs'>Error</Button>
    <Input label='Name category and items'badgeColor='bg-linear-to-l from-violet-600 to-pink-800 text-white' placeholder='enter your name' onChange={onchange}/>
   </div>
   
  )
}
