import NextLink from 'next/link';
import { Text, Button } from '@chakra-ui/core';
import Container from '@/components/Container';

const Error = () => {
  return (
    <Container>
      <Text>Not found, return home</Text>

      <NextLink href="/" passHref>
        <Button as="a" p={[1, 4]} w="250px" fontWeight="bold" m="3rem auto 0">
          Return Home
        </Button>
      </NextLink>
    </Container>
  );
};

export default Error;
