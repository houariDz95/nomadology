"use client"
import ReactCookieBot from 'react-cookiebot'

const CookieBot = ({domainId}) => {
  return (
    <>
    <ReactCookieBot domainGroupId={domainId} />
    </>
  )
}

export default CookieBot