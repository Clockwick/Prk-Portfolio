import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="RuammitLMS">
      <Container>
        <Title>
          RuammitLMS <Badge>2021</Badge>
        </Title>
        <P>The E-Learning Management System Platform</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="/">
              https://www.ruammitlms.vercel.app
              <ExternalLinkIcon mx="2px" />
            </Link>
            (Not availiable now)
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
        </List>
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Home page</Center>
        </Heading>
        <WorkImage
          src="/images/works/RuammitLogin.png"
          alt="RuammitLMS's picture"
        />
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Home page when authorized</Center>
        </Heading>
        <WorkImage
          src="/images/works/ThumbLMS.png"
          alt="RuammitLMS's picture"
        />
      </Container>
    </Layout>
  );
};

export default Work;
