import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';

import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbLMS from '../public/images/works/RuammitLogin.png';
import thumbSpotify from '../public/images/works/ThumbSpotify.png';
import thumbLineman from '../public/images/works/ThumbLINEMAN.png';
import thumbOrange from '../public/images/works/ThumbOrange.png';
import Layout from '../components/layouts/article';

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.4}>
            <WorkGridItem
              id="Spotify-clone"
              title="Spotify"
              thumbnail={thumbSpotify}
            >
              Cloning Spotify using Swift 5 / Spotify API
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="Lineman-clone"
              title="Lineman"
              thumbnail={thumbLineman}
            >
              Cloning Lineman using Swift 5
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="RuammitLMS"
              title="RuammitLMS"
              thumbnail={thumbLMS}
            >
              The E-Learning Management System Platform
            </WorkGridItem>
          </Section>
          <Section delay={0.8}>
            <WorkGridItem
              id="Orange-classification"
              title="Orange Classification"
              thumbnail={thumbOrange}
            >
              Classification the confused orange fruits <br/>by Deep learning
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Works;
