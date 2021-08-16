import React from "react"
import {Link} from 'gatsby'

const IndexPage = () =>{
   // <p>Need a developer? <a href="/contact">Contact me</a></p>
  return(
    <div>
      <h1>Hello!</h1>
      <h2>I am Deep</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </div>
  )
}

export default IndexPage
// export default function Home() {
//   return <div>hehe!</div>
// }
