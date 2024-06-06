import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { logout } = useSupabaseAuth();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Your New React App</Text>
        <Text>Start building something amazing!</Text>
      <Button onClick={logout} colorScheme="red">Logout</Button>
      </VStack>
    </Container>
  );
};

export default Index;