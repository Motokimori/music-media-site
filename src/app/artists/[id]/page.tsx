"use client";

import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'next/navigation';
import sampleArtists from '@/data/artists.json';

export default function ArtistDetailPage() {
  const params = useParams();
  const { id } = params;

  const artist = sampleArtists.find(a => a.id === id);

  if (!artist) {
    return (
      <Container className="mt-5">
        <h1>Artist Not Found</h1>
        <p>The artist you are looking for does not exist.</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Image src={artist.imageUrl} alt={artist.name} fluid rounded />
        </Col>
        <Col md={8}>
          <h1>{artist.name}</h1>
          <h2>{artist.genre}</h2>
          <p>{artist.bio}</p>
        </Col>
      </Row>
    </Container>
  );
}
