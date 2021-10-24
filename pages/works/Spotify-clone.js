import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Center,
  Divider,
  Heading
} from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Spotify">
      <Container>
        <Title>
          Spotify <Badge>2021</Badge>
        </Title>
        <P>Cloning Spotify using Swift 5 / Spotify API</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Objective-C, Swift 5</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/ThumbSpotify.png"
          alt="Spotify Thumbnail"
        />
        <Heading as="h4" fontSize={16} my={6}>
          <Center>App preview</Center>
        </Heading>
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/contents/Spotify/Home1.png" />
          <WorkImage src="/images/contents/Spotify/Home2.png" />
        </SimpleGrid>
        <Divider />
        <SimpleGrid columns={2} gap={2} my={6}>
          <WorkImage src="/images/contents/Spotify/Playing.png" />
          <WorkImage src="/images/contents/Spotify/SearchingResult.png" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
