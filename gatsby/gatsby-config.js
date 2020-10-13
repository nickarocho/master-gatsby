import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Nick's Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `It's a PIZZA pie!`,
    twitter: '@nicksSlices',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ejiqoazc',
        dataset: 'production',
        // when in development and you make a change to the CSS
        // it will auto-update without needing to rebuild
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
