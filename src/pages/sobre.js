import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layouts';

const SobrePage = () => {
  return (
    <main>
      <Layout pageTitle='Sobre mim'>
        <p>Esta é a página sobre.</p>
      </Layout>
    </main>
  )
}

export default SobrePage

export const Head = () => <title>Sobre mim</title>
