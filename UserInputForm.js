import React, { useState } from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  createTheme,
  ThemeProvider,
} from '@mui/material';

// Creating a Synthwave-Inspired Retro-Futuristic Theme
const theme = createTheme({
  palette: {
    primary: { main: '#ff00ff' }, // Neon Pink
    secondary: { main: '#00ffff' }, // Electric Cyan
    background: { default: '#111122', paper: '#222244' }, // Deep Dark Blue
    text: { primary: '#f0f0f0', secondary: '#ff00ff' }, // Bright Text Colors
  },
  typography: {
    fontFamily: 'Orbitron, monospace', // Sci-Fi Font
    h5: { fontWeight: 700, color: '#ff00ff', textShadow: '0 0 5px #ff00ff' }, // Glowing Heading
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': { color: '#ff00ff' }, // Pink Labels
          '& label.Mui-focused': { color: '#00ffff' }, // Cyan Focused Label
          '& .MuiInput-underline:after': { borderBottomColor: '#00ffff' }, // Neon Glow
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#ff00ff' },
            '&:hover fieldset': { borderColor: '#00ffff' },
            '&.Mui-focused fieldset': { borderColor: '#00ffff' },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
          color: '#000',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          borderRadius: '8px',
          boxShadow: '0 0 10px #ff00ff',
          transition: '0.3s',
          '&:hover': { boxShadow: '0 0 15px #00ffff', transform: 'scale(1.05)' },
        },
      },
    },
  },
});

function UserInputForm({ onSubmit }) {
  const [userData, setUserData] = useState({
    age: '', weight: '', height: '',
    irregularPeriods: false, heavyPeriods: false, acne: false,
    oilySkin: false, hirsutism: false, hairLoss: false,
    weightGain: false, pelvicPain: false, moodSwings: false,
    difficultyConceiving: false, skinTags: false, darkenedSkin: false,
    fatigue: false, sleepApnea: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({ ...userData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" style={{ marginTop: '30px' }}>
        <Paper
          elevation={5}
          style={{
            padding: '30px',
            borderRadius: '15px',
            background: 'radial-gradient(circle, #111133, #000011)',
            boxShadow: '0 0 20px #ff00ff',
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            PCOS & Hormonal Health Symptoms
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth label="Age" name="age" type="number"
                  value={userData.age} onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth label="Weight (kg)" name="weight" type="number"
                  value={userData.weight} onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth label="Height (cm)" name="height" type="number"
                  value={userData.height} onChange={handleInputChange}
                />
              </Grid>

              {[
                { name: 'irregularPeriods', label: 'Irregular Periods' },
                { name: 'heavyPeriods', label: 'Heavy Periods' },
                { name: 'acne', label: 'Acne' },
                { name: 'oilySkin', label: 'Oily Skin' },
                { name: 'hirsutism', label: 'Hirsutism (Excessive Hair Growth)' },
                { name: 'hairLoss', label: 'Hair Loss' },
                { name: 'weightGain', label: 'Weight Gain' },
                { name: 'pelvicPain', label: 'Pelvic Pain' },
                { name: 'moodSwings', label: 'Mood Swings' },
                { name: 'difficultyConceiving', label: 'Difficulty Conceiving' },
                { name: 'skinTags', label: 'Skin Tags' },
                { name: 'darkenedSkin', label: 'Darkened Skin (Acanthosis Nigricans)' },
                { name: 'fatigue', label: 'Fatigue' },
                { name: 'sleepApnea', label: 'Sleep Apnea' },
              ].map((item, index) => (
                <Grid item xs={12} key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={item.name} checked={userData[item.name]}
                        onChange={handleInputChange}
                        sx={{ color: '#ff00ff', '&.Mui-checked': { color: '#00ffff' } }}
                      />
                    }
                    label={item.label}
                    sx={{ color: '#f0f0f0' }}
                  />
                </Grid>
              ))}

              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default UserInputForm;
