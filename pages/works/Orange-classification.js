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
    <Layout title="Orange Classification">
      <Container>
        <Title>
          Orange Classification <Badge>2021</Badge>
        </Title>
        <P>Classification the confused orange fruits using Swift 5 / Deep learning API</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Swift 5</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/ThumbOrange.png"
          alt="OrangeClassificationThumbnail"
        />

        <Heading as="h4" fontSize={16} my={6}>
          <Center>App preview</Center>
        </Heading>
        <SimpleGrid columns={1} gap={2}>
          <WorkImage src="/images/contents/Orange/Home.png" />
        </SimpleGrid>
        <Divider />
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Take a photo or Choose a photo from gallery</Center>
        </Heading>
        <SimpleGrid columns={2} gap={4}>
          <WorkImage src="/images/contents/Orange/TakeGrape.png" />
          <WorkImage src="/images/contents/Orange/Choose.png" />
        </SimpleGrid>
        <Divider />
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Classify and Determine an accuracy of a photo</Center>
        </Heading>
        <SimpleGrid columns={2} gap={4}>
          <WorkImage src="/images/contents/Orange/load.png" />
          <WorkImage src="/images/contents/Orange/GrapeAcc.png" />
        </SimpleGrid>
        <Divider />
      </Container>
    </Layout>
  );
};

export default Work;
