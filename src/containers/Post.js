import React from 'react'
import { withRouteData, Link } from 'react-static'
import styled from 'styled-components';
const PostWrapper = styled.div`
  .projectContainer {
    max-width: 500px;
    padding: 60px 20px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .projectDescription {
    line-height: 24px;
  }

  .projectDetailsList {
    list-style: none;
    padding: 0;
  }

  .projectListItem {
    padding: 20px 0;
  }

  .projectDetailImage {
    border: 1px solid #ebebeb;
  }

  .projectDetailText {
    margin: 25px 0 20px;
  }

  @media (min-width: 768px) {
    .projectContainer {
      padding: 60px 0;
    }
  }
`
export default withRouteData(({ project }) => {
  return (
    <PostWrapper>
      <div className="projectContainer">
        <h3>{project.title}</h3>
        <p className="projectDescription">{project.description}</p>
        <ul className="projectDetailsList">
        {
          project.details && project.details.map((detail, index) => {
            return (
              <li key={ index } className="projectListItem">
                <img className="projectDetailImage" src={detail.image} />
                <p className="projectDetailText">{detail.detailText}</p>
              </li>
            );
          })
        }
        </ul>
      </div>
    </PostWrapper>
  )
})
