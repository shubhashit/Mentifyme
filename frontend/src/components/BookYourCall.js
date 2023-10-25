import React from 'react'
import Navbar from './Navbar'
import BookYourCallHero from './BookYourCallHero'
import BookcallMentors from './BookcallMentors'
import BookCenter from './BookCenter'
import BookWhyMentify from './BookWhyMentify'
import Footer from './Footer'
import Students from './Students'
import BookcallMId from './BookcallMId'
import BookcallConfused from './BookcallConfused'
export default function BookYourCall() {
  return (
    <div>
        <Navbar></Navbar>
        <BookYourCallHero></BookYourCallHero>
        <BookcallMentors></BookcallMentors>
        <BookCenter></BookCenter>
        <BookWhyMentify></BookWhyMentify>
        <BookcallMId></BookcallMId>
        <Students></Students>
        <BookcallConfused></BookcallConfused>
        <Footer></Footer>
    </div>
  )
}
