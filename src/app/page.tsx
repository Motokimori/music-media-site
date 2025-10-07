"use client";

import Link from 'next/link';
import { Badge, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import sampleAlbums from '@/data/albums.json';
import sampleArtists from '@/data/artists.json';

export default function Home() {
  const [featuredAlbum, ...otherAlbums] = sampleAlbums;
  const spotlightArtist = sampleArtists[0];
  const trendingArtists = sampleArtists.slice(1);

  return (
    <>
      <section className="hero-banner py-5 mb-5">
        <Container className="py-lg-5">
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <Badge bg="primary" className="mb-3 px-3 py-2 text-uppercase">
                Fresh Cuts &amp; Hidden Gems
              </Badge>
              <h1 className="display-4 fw-semibold text-white mb-3">
                Discover new sounds and rediscover the classics.
              </h1>
              <p className="lead text-white-50 mb-4">
                Music Media brings you curated playlists, in-depth artist spotlights, and passionate album reviews—designed to help
                you fall in love with music all over again.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Button as={Link} href="/artists" variant="primary" size="lg">
                  Explore Artists
                </Button>
                {featuredAlbum && (
                  <Button as={Link} href={`/album/${featuredAlbum.id}`} variant="outline-light" size="lg">
                    Listen to {featuredAlbum.title}
                  </Button>
                )}
              </div>
            </Col>
            <Col lg={5}>
              {featuredAlbum && (
                <Card className="glass-card border-0">
                  <Card.Img variant="top" src={featuredAlbum.imageUrl} alt={featuredAlbum.title} />
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Badge bg="success">Featured Album</Badge>
                      <span className="text-secondary">{featuredAlbum.artist}</span>
                    </div>
                    <Card.Title className="text-white">{featuredAlbum.title}</Card.Title>
                    <Card.Text className="text-white-50">{featuredAlbum.description}</Card.Text>
                    <Button as={Link} href={`/album/${featuredAlbum.id}`} variant="primary" className="w-100">
                      Read Review
                    </Button>
                  </Card.Body>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="pb-5">
        <section className="mb-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
            <h2 className="section-title">Top Albums Right Now</h2>
            <Button as={Link} href="/search?q=album" variant="outline-light" size="sm">
              Browse all albums
            </Button>
          </div>
          <Row className="g-4">
            {otherAlbums.map((album) => (
              <Col key={album.id} xs={12} md={4} xl={3}>
                <Card className="glass-card border-0 h-100">
                  <Card.Img variant="top" src={album.imageUrl} alt={album.title} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-white">{album.title}</Card.Title>
                    <Card.Text className="text-white-50 mb-4">{album.artist}</Card.Text>
                    <Button as={Link} href={`/album/${album.id}`} variant="outline-light" className="mt-auto">
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {spotlightArtist && (
          <section className="mb-5">
            <Row className="g-4 align-items-center">
              <Col md={5}>
                <Card className="glass-card border-0 h-100">
                  <Card.Body className="d-flex flex-column">
                    <Badge bg="warning" text="dark" className="align-self-start mb-3">
                      Artist Spotlight
                    </Badge>
                    <Card.Title className="text-white display-6 mb-3">{spotlightArtist.name}</Card.Title>
                    <Card.Subtitle className="text-white-50 mb-3">{spotlightArtist.genre}</Card.Subtitle>
                    <Card.Text className="text-white-50 flex-grow-1">{spotlightArtist.bio}</Card.Text>
                    <Button as={Link} href={`/artists/${spotlightArtist.id}`} variant="primary" className="mt-3">
                      Meet the artist
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={7}>
                <Row className="g-4">
                  {trendingArtists.map((artist) => (
                    <Col key={artist.id} xs={12} sm={6}>
                      <Card className="glass-card border-0 h-100">
                        <Card.Img variant="top" src={artist.imageUrl} alt={artist.name} />
                        <Card.Body>
                          <Card.Title className="text-white mb-1">{artist.name}</Card.Title>
                          <Card.Text className="text-white-50">{artist.genre}</Card.Text>
                          <Button as={Link} href={`/artists/${artist.id}`} variant="outline-light" size="sm">
                            View profile
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </section>
        )}

        <section className="mb-5">
          <Row className="g-4">
            <Col md={4}>
              <Card className="stat-card h-100">
                <Card.Body>
                  <h3 className="display-5 fw-bold text-white">250K+</h3>
                  <p className="text-white-50 mb-0">Monthly readers discovering their next favorite track.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="stat-card h-100">
                <Card.Body>
                  <h3 className="display-5 fw-bold text-white">1.2K</h3>
                  <p className="text-white-50 mb-0">Album reviews curated by passionate audiophiles.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="stat-card h-100">
                <Card.Body>
                  <h3 className="display-5 fw-bold text-white">Weekly</h3>
                  <p className="text-white-50 mb-0">Fresh features, interviews, and genre deep-dives.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="newsletter-section p-4 p-md-5 rounded-4">
          <Row className="align-items-center g-4">
            <Col md={7}>
              <h2 className="text-white mb-3">Stay in tune with the scene</h2>
              <p className="text-white-50 mb-0">
                Subscribe to our newsletter for exclusive premieres, editor picks, and backstage stories you will not find anywhere else.
              </p>
            </Col>
            <Col md={5}>
              <Form className="newsletter-form d-flex flex-column flex-sm-row gap-3">
                <Form.Control type="email" placeholder="Enter your email" required />
                <Button variant="primary" type="submit" className="flex-shrink-0">
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
}
