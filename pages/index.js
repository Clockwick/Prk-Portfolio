import NextLink from 'next/link';
import {
  Container,
  Box,
  Image,
  Heading,
  useColorModeValue,
  Button,
  SimpleGrid,
  List,
  ListItem,
  Link,
  Icon
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import { BioSection, BioYear } from '../components/bio';
import { IoLogoGithub } from 'react-icons/io5';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
          mb={6}
          p={3}
          textAlign="center"
        >
          Hi! I&apos;m a passionate software engineer with a knack for crafting solutions to complex problems. Let&apos;s collaborate and bring your next project to life!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Paratthakorn Sribunyong
            </Heading>
            <p>Full-stack / Frontend Developer</p>
          </Box>
          <Box
            flexShrink={0}
            nt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h2" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I make a goal to create software with the user in mind, creating
            applications with a usable and intuitive user interface experience.
            I also understand the importance of creating highly readable and
            easily maintainable source code. I am constantly striving to learn
            new technologies and look for ways to better myself in this rapidly
            changing industry.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Bangkok, Thailand.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Graduated from Suankularb Wittayalai Thonburi School.
          </BioSection>
          <BioSection>
            <BioYear>May 2022 - Dec 2022</BioYear>
            Intern iOS Developer at{' '}
            <Link href="https://lineman.line.me/">
              <b>LINE MAN Wongnai</b>
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>Oct 2021 - Feb 2023</BioYear>
            Part time Frontend Developer at{' '}
            <Link href="https://xn--b3cai3g4cd.com/">
              <b>ชาญชรา.com</b>
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>Apr 2023</BioYear>
            Graduated from KMITL (Computer Engineering with 2nd Class Honors)
          </BioSection>
          <BioSection>
            <BioYear>Apr 2023 - Now</BioYear>
            Outsource Frontend Developer at SCB Tech X
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Travel, Café, Music, Guitar, Book, Workout</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/clockwick" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Clockwick
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};
export default Page;
