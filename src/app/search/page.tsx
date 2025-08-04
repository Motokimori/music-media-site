"use client";

import { useSearchParams } from 'next/navigation';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import sampleAlbums from '@/data/albums.json';
import sampleArtists from '@/data/artists.json';
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredAlbums = sampleAlbums.filter(album =>
    album.title.toLowerCase().includes(query.toLowerCase()) ||
    album.artist.toLowerCase().includes(query.toLowerCase())
  );

  const filteredArtists = sampleArtists.filter(artist =>
    artist.name.toLowerCase().includes(query.toLowerCase()) ||
    artist.genre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <h1>Search Results for "{query}"</h1>

      <h2 className="mt-4">Albums</h2>
      {filteredAlbums.length > 0 ? (
        <Row>
          {filteredAlbums.map(album => (
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
      ) : (
        <p>No albums found.</p>
      )}

      <h2 className="mt-4">Artists</h2>
      {filteredArtists.length > 0 ? (
        <Row>
          {filteredArtists.map(artist => (
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
      ) : (
        <p>No artists found.</p>
      )}
    </Container>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
