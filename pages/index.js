import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [ authSubmit, setAuthSubmit] = useState("SIGN UP")
  const handleAuthChange = (e) => {
    e.preventDefault()
    if(authSubmit === "SIGN UP") {
      setAuthSubmit("LOG IN")
    } else {
      setAuthSubmit("SIGN UP")
    }
  }
  return (
   <div className={styles.container}>
      <main className={styles.main}>
       <h1>GET AUTHED</h1>
       <form className={styles.auth}>
       <input className={styles.input} name="email" id="email" type="email" placeholder="email" />
       <input className={styles.input} name="password" id="password" type="password" placeholder="password" />
       <input className={styles.submit} type="submit" value={authSubmit} />
       <button className={styles.toggle} onClick={handleAuthChange} >{ authSubmit === "SIGN UP" ? 'Log in instead': 'Sign up instead'}</button>
     </form>
   </main>
   </div>
  )
}
