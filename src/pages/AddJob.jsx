import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { title, description, location, company, posted: "Just now" };
    // Save the job to localStorage
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    navigate("/");
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">JobFinder</Heading>
      </Flex>
      <VStack spacing={4} mt={8} mb={8}>
        <Heading size="md">Post a New Job</Heading>
        <Box as="form" w="100%" onSubmit={handleSubmit}>
          <FormControl id="title" isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl id="description" isRequired mt={4}>
            <FormLabel>Job Description</FormLabel>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>
          <FormControl id="location" isRequired mt={4}>
            <FormLabel>Location</FormLabel>
            <Input value={location} onChange={(e) => setLocation(e.target.value)} />
          </FormControl>
          <FormControl id="company" isRequired mt={4}>
            <FormLabel>Company Name</FormLabel>
            <Input value={company} onChange={(e) => setCompany(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" type="submit" mt={4}>Post Job</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default AddJob;