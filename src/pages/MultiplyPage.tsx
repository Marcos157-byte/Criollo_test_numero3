import { useState, useRef} from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";

export default function MultiplyPage() {
   const a = useRef<HTMLInputElement | null>(null);  
  const b = useRef<HTMLInputElement | null>(null); 
const [area, setArea] = useState<number>(0);

  const calculate = () => {
    const base = Number(a.current?.value || 0);
    const altura = Number(b.current?.value || 0);

    const area = base * altura/2;
    setArea(area);
  };
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
       Base por altura
      </Typography>
        Base: <br></br>
      <TextField
        label="A"
        type="number"
        inputRef={a}
        onChange={(e) => a.current!.value = e.target.value}
        sx={{ mr: 2, mb: 2 }}
      />
        <Typography variant="h5" fontWeight={900} gutterBottom>
       Altura: <br></br>
       <TextField
        label="B"
        type="number"
        inputRef={b}
        onChange={(e) => b.current!.value = e.target.value}
        sx={{ mb: 2 }}
      />
      </Typography>
      

      <Typography sx={{ mt: 1 }}>
        <Button variant="contained" onClick={calculate}>Calcular Área</Button>
        Resultado: <strong>{area}</strong>
      </Typography>
    </Paper>
  );

    };
