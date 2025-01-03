import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Vil du høre mere fra mig?</h2>
          <h4>
            Jeg skriver til mine digitale venner engang i mellem. Du bliver ikke
            spammet. Jeg skriver kun når det er noget fedt.
          </h4>
          <form className="contact-form"
            name="contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="navn"
              placeholder="Dit navn"
              className="form-control"
            />
            <input
              type="email"
              name="mail"
              placeholder="Din email"
              className="form-control"
            />
            <button type='submit' className='btn form-control submit-btn'>Tilmeld dig her</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
