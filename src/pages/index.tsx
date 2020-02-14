import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Link to="/education/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
