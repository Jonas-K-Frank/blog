import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import { graphql } from "gatsby";
const IndexPage = ({data}) => {
	const {allMdx:{nodes:posts}} = data;
	return (
		<Layout>
			<Hero showPerson />
			<Posts posts={posts} title="Nyeste indlæg" />
		</Layout>
	);
};


export const query = graphql`
  {
    allMdx(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          title
          author
          date(formatString: "DD MM YYYY")
          category
          slug
          image {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`

export default IndexPage;
