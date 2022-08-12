import React, { useState, useEffect } from 'react';
import { ReactPhone } from './components/ReactPhone/ReactPhone';
import Stack from '@mui/material/Stack';
import './App.css';
import { FormHelperText, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import PickerDate from './components/PickerDate/PickerDate';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Container } from '@mui/system';


function App() {

  /* An array of objects that is being used to populate the dropdown menu. */
  const gender = [
    {
      label: 'Femenino'
    },
    {
      label: 'Masculino'
    },
    {
      label: 'Otro'
    }
  ];

  /* Styling the button. */
  const ContinueButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#07D962',
    '&:hover': {
      backgroundColor: '#07D962',
    },
  }));

  const [password, setPassword] = useState({
    password: '',
    showPassword: false,
  });

  const [ cPassword, setCpassword] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
  };

  const handleChangeConfirm = (prop) => (event) => {
    setCpassword({ ...cPassword, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    });
  };

  const handleClickShowCpassword = () => {
    setCpassword({
      ...cPassword,
      showPassword: !cPassword.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownCpassword = (event) => {
    event.preventDefault();
  };

  const passwordsFilled = password.password && cPassword.password
  const passwordsMatch = password.password === cPassword.password;

  // useEffect(() => {
  //   if(passwordsFilled){
  //     if(passwordsMatch){
  //       console.log('Match')
  //     }else {
  //       console.log("Don't match")
  //     }
  //   }
  // }, [cPassword])


  return (
    <div className="App">
          
      <Container sx={{ width: '100vw' }} variant='standard'>
        <Stack spacing={3} className='input-container'>
          
          <h1>Registro</h1>
          <TextField id="standard-basic" label="Nombres" variant="standard" />
          <TextField id="standard-basic" label="Apellidos" variant="standard" />
          <TextField id="standard-basic" label="Documento de identidad" variant="standard" />

          <PickerDate />
        
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={gender}
            sx={{ width: 280 }}
            renderInput={(params) => <TextField {...params} label="Género" variant='standard' />}
          />
          <label>Teléfono 
            <ReactPhone />
          </label>
          <TextField id="standard-basic" label="Dirección de correspondencia" variant="standard" />
          <TextField id="standard-basic" label="Correo" variant="standard" />
          <TextField id="standard-basic" label="Confirmar correo" variant="standard" />


          <FormControl variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
            <Input
              id="standard-adornment-password"
              type={password.showPassword ? 'text' : 'password'}
              value={password.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {password.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="standard-adornment-cpassword">Confirmar contraseña</InputLabel>
            <Input
              // error = {true}
              id="standard-adornment-cpassword"
              type={cPassword.showPassword ? 'text' : 'password'}
              value={cPassword.password}
              onChange={handleChangeConfirm('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowCpassword}
                    onMouseDown={handleMouseDownCpassword}
                  >
                    {cPassword.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              />
              
            <FormHelperText error sx={(passwordsFilled ? (passwordsMatch ? {display: 'none'} : {display: 'initial'}) : {display: 'none'})}>Las contraseñas no son iguales</FormHelperText>
                
          </FormControl>

          <ContinueButton variant="contained">Continuar</ContinueButton>

          <p>Si ya estás resgistrado <b>inicia sesión</b></p>

        </Stack>
      </Container>
    </div>
  );
}

export default App;
