import Button from "../../Components/Button";
import Form from "../../Components/Form.tsx";
import Input from "../../Components/Input.tsx";
import Label from "../../Components/Label.tsx";
import useAuth from "./useAuth";
import { useState } from "react";


export default function AuthenticationForm() {
  const { login } = useAuth();
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    try {
        await login(username, password);
    } catch (error) {
        setError(error.message)
        throw new Error(error.message || "Something went wrong");
    } finally {
        setLoading(false);
    }
  };

  return (
    <Form size="medium">
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
        {loading ? "Loading..." : "Login"}
      </Button>
       {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <strong>Error: {error}</strong>
        </div>
      )}
    </Form>
  );
}
