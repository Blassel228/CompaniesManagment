import styled from "styled-components";
import Button from "../../Components/Button";
import useAuth from "./useAuth";
import { useState } from "react";

const Form = styled.form`
  background-color: #1a1a1a;
  width: 50rem;
  height: 27rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;
  border-radius: 8px;
`;

const Input = styled.input`
  background-color: #1a1a1a;
  width: 40rem;
  height: 4rem;
  margin: 1rem 0;
  padding: 1rem;
  color: white;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 1.6rem;
  display: block;
`;

const Label = styled.label`
  font-family: 'Consolas', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', monospace;
  font-size: 1.6rem;
  color: white;
  margin-bottom: 0.5rem;
  display: block;
`;

export default function AuthenticationForm() {
  const { login } = useAuth();
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    try {
      await login(username, password);
    } catch (error) {
      throw new Error(error.response?.data?.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form>
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <Button type="submit" disabled={loading} onClick={handleSubmit}>
        {loading ? "Loading..." : "Submit Form"}
      </Button>
    </Form>
  );
}
