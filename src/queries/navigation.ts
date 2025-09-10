import { gql } from "@apollo/client";

export const GET_NAVIGATION_DATA = gql`
  query GetNavigationData {
    pages(where: { title: "Homepage Content" }) {
      nodes {
        navigationOptions {
          navCtaText
          navCtaLink
          companyPhone
          companyEmail
          companyAddress
          socialFacebook
          socialTwitter
          socialLinkedin
          socialInstagram
        }
      }
    }
  }
`;
