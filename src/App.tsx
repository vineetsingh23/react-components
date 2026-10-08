import {type ChangeEvent } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Select } from './components/Select'



export default function App() {


  function handleClick() {
    console.log(2+2)
  }


  return (
   <div className='m-5 flex gap-5 flex-col'>
    <Button variant='outline' onClick={handleClick}>Click me</Button>
    <Button variant='error' size='xl' className='min-w-xs'>Error</Button>
    <Input label='Name category and items' placeholder='enter your name' badgeColor='bg-linear-to-r from-blue-600 to-pink-800' helperText='enter your name'/>
    <Input label='Password'  placeholder='enter your password' badgeColor='bg-blue-600 text-white' helperText='do not your password with any one'/>
    <div className='flex max-w-sm'>

    <Input label="Email Address" placeholder="you@example.com" helperText="We won't share your email." badgeColor='bg-pink-300'/>
      <Input label="Password" type="password" error="Password is required!" badgeColor='bg-cyan-300'  />
   
    </div>
    <Select
  label="Country"
  sizeVariant="lg"
  options={[
    {label:'Select State', value:'state'},
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'India', value: 'in' },
  ]}
/>
   
   </div>
   
  )
}
