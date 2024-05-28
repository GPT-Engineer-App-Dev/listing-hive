import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const ApplyJob = () => {
  const { jobId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = { name, email, resume, jobId };
    // Save the application to localStorage
    const applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.push(newApplication);
    localStorage.setItem("applications", JSON.stringify(applications));
    navigate("/");
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">JobFinder</Heading>
      </Flex>
      <VStack spacing={4} mt={8} mb={8}>
        <Heading size="md">Apply for Job</Heading>
        <Box as="form" w="100%" onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="email" isRequired mt={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="resume" isRequired mt={4}>
            <FormLabel>Resume</FormLabel>
            <Textarea value={resume} onChange={(e) => setResume(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" type="submit" mt={4}>Submit Application</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default ApplyJob;