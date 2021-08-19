import React from "react"
import {Link} from 'gatsby'
import Footer from '../components/footer'
import Header  from "../components/header";
import Layout from "../components/layout";
const IndexPage = () =>{
   // <p>Need a developer? <a href="/contact">Contact me</a></p>
    return(
      <Layout>
        <h1>Hello!</h1>
        <h2>I am Deep</h2>
        <p>Need a developer? <Link to="/contact">Contact me</Link></p>
      </Layout>
    )
  
   
}

export default IndexPage
// export default function Home() {
//   return <div>hehe!</div>
// }

// return(
//   <div>
//     <Header/>
//     <h1>Hello!</h1>
//     <h2>I am Deep</h2>
//     <p>Need a developer? <Link to="/contact">Contact me</Link></p>
//     <Footer/>
//     </div>
// )