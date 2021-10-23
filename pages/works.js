import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';

import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbLMS from '../public/images/works/ThumbLMS.png';
import Layout from '../components/layouts/article';

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="RuammitLMS"
              title="RuammitLMS"
              thumbnail={thumbLMS}
            >
              The E-Learning Management System Platform
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="ruammitlms-2"
              title="RuammitLMS"
              thumbnail={thumbLMS}
            >
              The E-Learning Management System Platform
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="ruammitlms-3"
              title="RuammitLMS"
              thumbnail={thumbLMS}
            >
              The E-Learning Management System Platform
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="ruammitlms-4"
              title="RuammitLMS"
              thumbnail={thumbLMS}
            >
              The E-Learning Management System Platform
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Works;
