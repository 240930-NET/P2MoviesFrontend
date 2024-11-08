import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const RatingsGrid = ({ items = [] }) => {
  // Determine column width based on the number of items
  const colSize = items.length === 1 ? 12 : items.length === 2 ? 6 : 4;
  const images = [
    { src: '/imbd.png', caption: 'IMBD logo' },
    { src: '/rottenTomatoes.png', caption: 'Rotten tomatoes logo' },
    { src: '/metacritic.png', caption: 'Metacritic logo' },
  ];
  return (
    <Container>
      <Row>
        {items.map((item, index) => (
          <Col key={index} xs={colSize} className="mb-3 justify-content-center align-items-center">
            <img src={images[index].src} alt={images[index].caption} className="img-fluid" />
            <div className="p-3 border">{item.Source}: {item.Value}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RatingsGrid;