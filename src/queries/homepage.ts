import { gql } from "@apollo/client";

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    page(id: "cG9zdDoxMzU=", idType: ID) {
      id
      title
      slug
      homepageOptions {
        heroTitle
        heroSubtitle
        heroDescription
        heroCtaText
        heroCtaLink
        heroVideoUrl
        heroBackgroundImage {
          node {
            sourceUrl
            altText
          }
        }
        whyTitle
        whySubtitle
        whyImage1 {
          node {
            sourceUrl
            altText
          }
        }
        whyImage2 {
          node {
            sourceUrl
            altText
          }
        }
        whyImage3 {
          node {
            sourceUrl
            altText
          }
        }
        whyImage4 {
          node {
            sourceUrl
            altText
          }
        }
        feature1Title
        feature1Description
        feature1Icon {
          node {
            sourceUrl
            altText
          }
        }
        feature2Title
        feature2Description
        feature2Icon {
          node {
            sourceUrl
            altText
          }
        }
        feature3Title
        feature3Description
        feature3Icon {
          node {
            sourceUrl
            altText
          }
        }
        feature4Title
        feature4Description
        feature4Icon {
          node {
            sourceUrl
            altText
          }
        }
        servicesTitle
        servicesDescription
        service1Title
        service1Description
        service1Image {
          node {
            sourceUrl
            altText
          }
        }
        service1Link
        service2Title
        service2Description
        service2Image {
          node {
            sourceUrl
            altText
          }
        }
        service2Link
        service3Title
        service3Description
        service3Image {
          node {
            sourceUrl
            altText
          }
        }
        service3Link
        clientTitle
        clientLogo1 {
          node {
            sourceUrl
            altText
          }
        }
        clientLogo2 {
          node {
            sourceUrl
            altText
          }
        }
        clientLogo3 {
          node {
            sourceUrl
            altText
          }
        }
        clientLogo4 {
          node {
            sourceUrl
            altText
          }
        }
        clientLogo5 {
          node {
            sourceUrl
            altText
          }
        }
        clientLogo6 {
          node {
            sourceUrl
            altText
          }
        }
        testimonialPhoto {
          node {
            sourceUrl
            altText
          }
        }
        testimonialName
        testimonialPosition
        testimonialCompany
        testimonialText
        testCategories
      }
    }
  }
`;
