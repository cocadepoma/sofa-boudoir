import React from 'react';
import ContentLoader from "react-content-loader";

export const ImagePH = ({ sizes }) => {

  return (
    <>
      {
        sizes?.one && (
          <div style={{ width: sizes.one, overflow: 'hidden' }}>
            <ContentLoader
              uniqueKey={sizes.one}
              width="100%"
              height={280}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="2" y="2" rx="0" ry="0" width="100%" height="30rem" />
            </ContentLoader>
          </div>
        )
      }

      {
        sizes?.two && (
          <div style={{ width: sizes.two, overflow: 'hidden' }}>
            <ContentLoader
              uniqueKey={sizes.two}
              width="100%"
              height={280}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="2" y="2" rx="0" ry="0" width="100%" height="30rem" />
            </ContentLoader>
          </div>
        )
      }

      {
        sizes?.three && (
          <div style={{ width: sizes.three, overflow: 'hidden' }}>
            <ContentLoader
              uniqueKey={sizes.three}
              width="100%"
              height={280}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="2" y="2" rx="0" ry="0" width="100%" height="30rem" />
            </ContentLoader>
          </div>
        )
      }

      {
        sizes?.four && (
          <div style={{ width: sizes.four, overflow: 'hidden' }}>
            <ContentLoader
              uniqueKey={sizes.four}
              width="100%"
              height={280}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="2" y="2" rx="0" ry="0" width="100%" height="30rem" />
            </ContentLoader>
          </div>
        )
      }

      {
        sizes?.five && (
          <div style={{ width: sizes.five, overflow: 'hidden' }}>
            <ContentLoader
              uniqueKey={sizes.five}
              width="100%"
              height={280}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="2" y="2" rx="0" ry="0" width="100%" height="30rem" />
            </ContentLoader>
          </div>
        )
      }
    </>
  );
};
