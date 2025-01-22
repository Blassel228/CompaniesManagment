import Button from "../../Components/Button";
import Form from "../../Components/Form.tsx";
import Input from "../../Components/Input.tsx";
import Label from "../../Components/Label.tsx";
import { useState } from "react";
import { createUser } from "../../Api/apiRegister.tsx";
import { CreateUser } from "../../Types/User.tsx";

export default function RegistrationForm() {
  const [user, setUser] = useState<CreateUser>({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  async function handleSubmit (event: React.FormEvent) {
        event.preventDefault();

        setError(null)
    try {
        await createUser(user);
    } catch (err) {
        setError(err.message);
    }
  }

  return (
    <Form onSubmit={handleSubmit} size="large">
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <Button type="submit">
        {"Register"}
      </Button>
        {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <strong>Error: {error}</strong>
        </div>
      )}
    </Form>
  );
}
