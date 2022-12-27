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
          ชาญชรา <Badge>2021</Badge>
        </Title>
        <P>เว็บไซต์อ่านบทความสำหรับผู้สูงอายุ</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, React Hooks, TailwindCSS, EditorJS, ChakraUI</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/thumb-chanchala-home.png"
          alt="ChanchalaThumbnail"
        />
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Website preview</Center>
        </Heading>
        <SimpleGrid columns={2} gap={2} my={6}>
          <WorkImage src="/images/contents/Chanchala/detail-1.png" />
          <WorkImage src="/images/contents/Chanchala/detail-2.png" />
        </SimpleGrid>
      </Container>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Back office preview</Center>
      </Heading>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/contents/Chanchala/admin-home.png" />
      </SimpleGrid>
    </Layout>
  );
};

export default Work;
