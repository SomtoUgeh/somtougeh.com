import axios from 'axios';
import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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

const NewsletterSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Ugh! Please enter a valid email.')
    .required('Oops! The email field is empty.')
});

export default function Subscribe() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(NewsletterSchema)
  });

  const handleFormSubmit = async ({ email }) => {
    setIsLoading(true);

    try {
      const {
        data: { message }
      } = await axios.post(`/api/newsletter`, { email });

      reset();
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
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Heading as="h5" size="lg" mb={2}>
        Subscribe to the newsletter
      </Heading>

      <Text>
        Get emails from me about web development, tech, and early access to new
        articles.
      </Text>

      <FormControl isInvalid={Boolean(errors.email && errors.email.message)}>
        <InputGroup mt={4}>
          <Input
            name="email"
            type="email"
            ref={register}
            placeholder="hello@email.com"
            aria-label="Email for newsletter"
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

        {errors.email ? (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        ) : null}
      </FormControl>
    </Box>
  );
}
