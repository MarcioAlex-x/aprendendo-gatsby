import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layouts"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle='Página inicial'>
        <p>Criação da primeira página.</p>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Página inicial</title>
