"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import sampleArtists from '@/data/artists.json';

export default function ArtistsPage() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Browse Artists</h2>
      <Row>
        {sampleArtists.map((artist) => (
          <Col key={artist.id} md={3} className="mb-4">
            <Link href={`/artists/${artist.id}`} passHref style={{ textDecoration: 'none' }}>
              <Card className="h-100" style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={artist.imageUrl} />
                <Card.Body>
                  <Card.Title>{artist.name}</Card.Title>
                  <Card.Text>{artist.genre}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
