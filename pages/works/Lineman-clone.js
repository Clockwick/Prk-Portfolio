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
    <Layout title="Lineman">
      <Container>
        <Title>
          Lineman <Badge>2021</Badge>
        </Title>
        <P>Cloning Lineman using Swift 5</P>
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
          src="/images/works/ThumbLINEMAN.png"
          alt="LinemanThumbnail"
        />

        <Heading as="h4" fontSize={16} my={6}>
          <Center>App preview</Center>
        </Heading>
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/contents/Lineman/Home.png" />
          <WorkImage src="/images/contents/Lineman/Restaurant.png" />
        </SimpleGrid>
        <Divider />
        <SimpleGrid columns={2} gap={2} my={6}>
          <WorkImage src="/images/contents/Lineman/Filter.png" />
          <WorkImage src="/images/contents/Lineman/FoodOrder.png" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
