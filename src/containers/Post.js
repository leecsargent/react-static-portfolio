import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData } from 'react-static';
import ImageLoading, { Fallback, LoadingPlaceholder } from 'react-image-loading';
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
`;

const Caption = (props) => {
  const { caption } = props;
  return (
    <p>{caption}</p>
  );
};

Caption.propTypes = {
  caption: PropTypes.string,
};

Caption.defaultProps = {
  caption: '',
};

/* eslint-disable react/no-array-index-key */
export default withRouteData(({ project }) => (
  <PostWrapper>
    <div className="projectContainer">
      <h3>{project.title}</h3>
      <p className="projectDescription">{project.description}</p>
      <ul className="projectDetailsList">
        {
          project.details && project.details.map((detail, index) => (
            <li key={index} className="projectListItem" style={{ minHeight: 350, position: 'relative' }}>
              <ImageLoading>
                {(ref, status) => (
                  <React.Fragment>
                    {status === 'error' || !detail.image
                          ? <Fallback style={{ backgroundColor: '#ccc' }} />
                          :
                          <React.Fragment>
                            <img ref={ref} src={detail.image} className="projectDetailImage" alt="Project Detail" />
                            <Caption caption={detail.detailText} />
                            <LoadingPlaceholder
                              style={{
                                  transition: 'opacity 0.5s',
                                  opacity: status === 'loading' ? 1 : 0,
                                  backgroundColor: 'white',
                                }}
                              animate={status === 'loading'}
                            />
                          </React.Fragment>
                        }
                  </React.Fragment>
                    )}
              </ImageLoading>
            </li>
            ))
        }
      </ul>
    </div>
  </PostWrapper>
));
/* eslint-enable */
