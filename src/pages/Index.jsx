import { Box, Container, Flex, Heading, Input, VStack, Text, HStack, Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

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
        <Button as={Link} to="/add-job" colorScheme="teal">Post a Job</Button>
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
        {jobs.map((job, index) => (
          <Box key={index} p={4} shadow="md" borderWidth="1px">
            <Heading size="md">{job.title}</Heading>
            <Text>Company: {job.company}</Text>
            <Text>Location: {job.location}</Text>
            <Text>Posted: {job.posted}</Text>
            <Button as={RouterLink} to={`/apply/${index}`} colorScheme="teal" mt={2}>Apply</Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;