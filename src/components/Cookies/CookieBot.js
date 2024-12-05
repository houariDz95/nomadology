"use client"
import ReactCookieBot from "react-cookiebot"

const id = "6ea42090-2dde-4051-b055-bfdb6ec7bc28"

const CookieBot = () => {
  return (
    <>
        <ReactCookieBot domainGroupId={id}  key={id}/>
    </>
  )    
}

export default CookieBot