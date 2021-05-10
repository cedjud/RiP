import sanityClient from "../../sanityClient";

export async function getStaticProps() {
  const content = await sanityClient.fetch(`*[_type == 'article']`)

  return {
    props: {
      content 
    }
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
