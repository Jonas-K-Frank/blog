import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Success = () => {
  return (
    <Layout>
      <section className="success-page">
       <div className="page-center"><h2>Tak for din tilmelding</h2>
        <p>Jeg glæder mig til at sende dig en mail</p>
        <Link to="/" className="btn">
          Tilbage til forsiden
        </Link>
        </div> 
      </section>
    </Layout>
  )
}

export default Success
