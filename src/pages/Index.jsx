import { Box, Container, Flex, Heading, Input, VStack, Text, HStack, Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">JobFinder</Heading>
        <HStack spacing={4}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">Jobs</Button>
          <Button variant="link" color="white">About</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      {/* Search Bar */}
      <VStack spacing={4} mt={8} mb={8}>
        <Heading size="md">Find Your Dream Job</Heading>
        <Flex w="100%" maxW="600px">
          <Input placeholder="Search for jobs..." size="lg" />
          <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg" ml={2}>Search</Button>
        </Flex>
      </VStack>

      {/* Job Listings */}
      <VStack spacing={8} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md">Software Engineer</Heading>
          <Text>Company: TechCorp</Text>
          <Text>Location: San Francisco, CA</Text>
          <Text>Posted: 2 days ago</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md">Product Manager</Heading>
          <Text>Company: Innovate Inc.</Text>
          <Text>Location: New York, NY</Text>
          <Text>Posted: 1 week ago</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading size="md">UX Designer</Heading>
          <Text>Company: DesignPro</Text>
          <Text>Location: Remote</Text>
          <Text>Posted: 3 days ago</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;