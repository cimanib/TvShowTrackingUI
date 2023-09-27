"use client"

import React,{useContext} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './tv.png'
import Styles from './navbar.module.css'

export default function NavBar() {
    
  return (
    <>
    <main>
    <nav className = {Styles.navbar}>
    <Image  className = {Styles.logo}
        src = {Logo}
        width = {70}
        height = {50}
        alt='tv show logo' 
        placeholder='blur'/>
    <Link href="/" className = {Styles.navMenu}> Home</Link>
    <Link href ="/login" className = {Styles.navMenu} >Login</Link>
   </nav>
   </main>
   </>
  )
}
