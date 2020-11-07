import axios from 'axios';
import { useState } from 'react';
import {
  Heading,
  InputGroup,
  Box,
  Input,
  InputRightElement,
  Button,
  Text,
  useToast,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/core';

export default function Subscribe() {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    type: null,
    message: null
  });

  const handleFormSubmit = async e => {
    e.preventDefault();

    if (email.trim().length < 1) {
      setError({
        type: 'email',
        message: 'Please provide an email'
      });

      return;
    }

    setIsLoading(true);

    try {
      const {
        data: { message }
      } = await axios.post(`/api/newsletter`, { email });

      setEmail('');
      setIsLoading(false);

      toast({
        title: 'Success!',
        description: message,
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right'
      });
    } catch (e) {
      setIsLoading(false);

      toast({
        title: 'An error occurred',
        description: e.response.data.error,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right'
      });

      return;
    }
  };

  return (
    <Box
      mt="5rem"
      w="100%"
      as="form"
      padding={6}
      borderRadius={4}
      border="1px solid"
      borderColor="blue.200"
      onSubmit={handleFormSubmit}
    >
      <Heading as="h5" size="lg" mb={2}>
        Subscribe to the newsletter
      </Heading>

      <Text>
        Get emails from me about web development, tech, and early access to new
        articles.
      </Text>

      <FormControl isInvalid={Boolean(error.type === 'email')}>
        <InputGroup mt={4}>
          <Input
            type="email"
            value={email}
            placeholder="hello@email.com"
            aria-label="Email for newsletter"
            onChange={({ target }) => {
              setEmail(target.value);
              setError({ type: null, message: null });
            }}
          />

          <InputRightElement width="6.75rem">
            <Button
              size="sm"
              type="submit"
              fontWeight="bold"
              isLoading={isLoading}
            >
              Subscribe
            </Button>
          </InputRightElement>
        </InputGroup>

        {error.type === 'email' ? (
          <FormErrorMessage>{error.message}</FormErrorMessage>
        ) : null}
      </FormControl>
    </Box>
  );
}
