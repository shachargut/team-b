import { SignButton } from '../common.js/SignButton'
import Input from '../common.js/Input'
import SelectInput from '../common.js/SelectInput'
import styles from './style.module.css'
 export function SignIn() {
  return (
    <div className='sign-in'>
      <form>
        <LoginHeader/>
        <LoginContent/>
        <SignButton/>
        </form>
    </div>
  )
}

function LoginHeader(){
  return<header>
    <h1>Welcome Back!</h1>
  </header>
}

function LoginContent(){
  return<main>
    <Input txt='Email'/>
    <SelectInput txt='Password'/>
  </main>
}