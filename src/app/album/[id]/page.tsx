"use client";

import { Container, Row, Col, Image, Form, Button, Card } from 'react-bootstrap';
import { useParams } from 'next/navigation';
import sampleAlbums from '@/data/albums.json';
import { useState } from 'react';

export default function AlbumDetailPage() {
  const params = useParams();
  const { id } = params;

  const album = sampleAlbums.find(a => a.id === id);

  const [reviews, setReviews] = useState(album?.reviews || []);
  const [newReview, setNewReview] = useState({
    user: '',
    rating: 5,
    comment: '',
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.user && newReview.comment) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ user: '', rating: 5, comment: '' });
    }
  };

  if (!album) {
    return (
      <Container className="mt-5">
        <h1>Album Not Found</h1>
        <p>The album you are looking for does not exist.</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Image src={album.imageUrl} alt={album.title} fluid rounded />
        </Col>
        <Col md={8}>
          <h1>{album.title}</h1>
          <h2>{album.artist}</h2>
          <p>{album.description}</p>
        </Col>
      </Row>

      <hr className="my-5" />

      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <div className="mb-4">
          {reviews.map(review => (
            <Card key={review.id} className="mb-3">
              <Card.Body>
                <Card.Title>{review.user} - {review.rating} Stars</Card.Title>
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <p>No reviews yet. Be the first to review!</p>
      )}

      <h4 className="mt-4">Submit Your Review</h4>
      <Form onSubmit={handleReviewSubmit}>
        <Form.Group className="mb-3" controlId="reviewUser">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={newReview.user}
            onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="reviewRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
          >
            {[5, 4, 3, 2, 1].map(num => (
              <option key={num} value={num}>{num} Stars</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="reviewComment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write your review here..."
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Review
        </Button>
      </Form>
    </Container>
  );
}
