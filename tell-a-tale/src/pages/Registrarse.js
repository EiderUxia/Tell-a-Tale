import React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import '../css/registrarse.css'

export default function Registrarse() {
    return (
        <div class="ContenedorRegistrarse">
             <div class="SegundoContenedorRegistrarse">
                <Box id="CajaDeDatos"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50vw' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Nombre de Usuario"
                            defaultValue="Hello World"
                            variant="standard"
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="Apodo"
                            defaultValue="Hello World"
                            variant="standard"
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="Correo"
                            defaultValue="Hello World"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Contraseña"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                    </div>
                </Box>
                <Stack direction="row">
                        <div class="JalaPoFavo registrarse">
                            <Button variant="contained" color="success">
                                Registrarse
                            </Button>
                        </div>
                    </Stack>
            </div>
        </div>
    )
}
