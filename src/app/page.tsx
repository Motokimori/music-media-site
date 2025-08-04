"use client";

import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import sampleAlbums from '@/data/albums.json';

export default function Home() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Featured Albums</h2>
      <Row>
        {sampleAlbums.map((album) => (
          <Col key={album.id} md={3} className="mb-4">
            <Link href={`/album/${album.id}`} passHref style={{ textDecoration: 'none' }}>
              <Card className="h-100" style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={album.imageUrl} />
                <Card.Body>
                  <Card.Title>{album.title}</Card.Title>
                  <Card.Text>{album.artist}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
