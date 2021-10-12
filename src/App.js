import {Grid, Paper, Button} from '@mui/material';
import { AudioButton } from './Button';
import { useState, useEffect } from 'react';


var sounds = {
  Q: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'],
  W: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'],
  E: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'],
  A: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'],
  S: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'],
  D: ['https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'],
  Z: ['https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'],
  X: ['https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'],
  C: ['https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3']
}

function App() {
 
  useEffect(()=>{
    document.addEventListener('keydown', (event)=>
    {
      let key = event.key.toLocaleUpperCase()
      if (key in sounds) {
          let b = document.getElementById(key)
          var srcBG = b.style.backgroundColor
          b.style.backgroundColor = 'yellow'
          b.click()
          document.addEventListener('keyup', (event)=>
          {
            let key = event.key.toLocaleUpperCase()
            if (key in sounds) {
                let b = document.getElementById(key)
                b.style.backgroundColor = srcBG      
              }
          })       
        }
    });

    
})

  return (
    
      <Grid container direction="column" id="drum-machine"
      justifyContent="center"
      alignItems="center"
      height="100vh">
        <Grid md></Grid>
        <Grid item container xs={12} md={6} style={{height: '100%', width:'100%'}}>

          <Paper>
            <Grid container direction="row" justifyContent="space-arround" >
              <Grid item container xs={12} md={6} backgroundColor='red'>
                {Object.keys(sounds).map((val, index)=>(
                  <AudioButton source={sounds[val][0]} key={index} id={val} label={val} />
                ))}
              </Grid>
              <Grid item container xs={12} md={6} backgroundColor='yellow'>

              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid md></Grid>
      </Grid>
  );
}

export default App;
