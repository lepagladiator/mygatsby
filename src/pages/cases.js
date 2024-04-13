import React from "react";
import { graphql } from "gatsby";
import { AccidentCases } from "nexvel-trial";

const CasesPage = ({ data }) => {
  const { list, pagetitle } = data.allWpPage.edges[0].node.accidentCases;
  return (
    <AccidentCases tabList={list} pagetitle={pagetitle} />
  );
};

export const query = graphql`
  query CasesPage {
    allWpPage {
      edges {
        node {
          accidentCases {
            list {
              content
              subtitle
              firstcta {
                title
                url
              }
              imgsrc {
                sourceUrl
              }
              secondcta {
                title
                url
              }
              tabtitle
              titleicon {
                sourceUrl
              }
            }
            pagetitle {
              subtitle
              title
              subtitleicon {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

export default CasesPage;
