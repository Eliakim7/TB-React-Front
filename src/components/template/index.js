import React from "react"
import {Link, Outlet} from "react-router-dom"
import Footer from "./Footer/Footer"


function Template(){

  return(

    <>
      <section>
        <Outlet/>
      </section>
        <Footer/>
    </>
  )
}
export default Template