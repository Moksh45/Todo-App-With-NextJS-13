"use client";
import Link from 'next/link'
import React from 'react'

const page = () => {
    return <div className='login'>
        <section>
            <form>
                <input type='email' placeholder='Enter Email'/>
                <input type='text' placeholder='Enter Name'/>
                <input type='password' placeholder='Enter Password'/>
                <button type='submit'>Sign Up</button>

                <p>OR</p>
                <Link href={"/login"}>Log In</Link>
            </form>
        </section>
    </div>
}

export const metadata = {
    title: 'Register',
    description: 'This is the Register page of Todo App Project',
  }
export default page