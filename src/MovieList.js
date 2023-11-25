import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap'
import MovieCard from './MovieCard';
function Movieslist({ moviesList, titlefilter, ratingfilter }) {
    return (
        <Row xs={2} md={4} className="g-4">
            {moviesList.filter(
                (movieElement) =>
                    movieElement.title?.toLowerCase().includes(titlefilter?.toLowerCase().trim()) &&
                    movieElement.rating >= ratingfilter).map((movieElement, index) => (
                <Col key={index}>
                    <MovieCard movie={movieElement} />
                </Col>
            ))}
        </Row>
    );
}

export default Movieslist;