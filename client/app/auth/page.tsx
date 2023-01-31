"use client";

import useAuthContext from "@/hooks/useAuthContext";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [password, setPassword] = useState("");
  const { setIsAutherized } = useAuthContext();
  const router = useRouter();

  const submitAuth = async (): Promise<void> => {
    console.log(process.env.API_BASE_URL);
    const response = await axios.post(`/api/auth`, {
      password: password,
    });
    if (response.status === 200) {
      setIsAutherized(true);
      router.push("/settings");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TextField
        label="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      ></TextField>
      <Button color="primary" onClick={submitAuth}></Button>
    </Box>
  );
}
