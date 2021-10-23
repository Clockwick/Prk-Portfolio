import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Title,
  WorkImage,
  Meta
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="RuammitLMS">
      <Container>
        <Title>
          RuammitLMS <Badge>2021</Badge>
        </Title>
        <P>
          The E-Learning Management System Platform
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='/'>https://www.ruammitlms.vercel.app
            <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/ThumbLMS.png" alt="RuammitLMS's picture"/>
      </Container>
    </Layout>
  )
}

export default Work;