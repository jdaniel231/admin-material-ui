import { Grid } from '@material-ui/core'
import React from 'react'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Grid container >
        <Grid item sm={2} xs={2} >
          Leftbar
        </Grid>
        <Grid item sm={7} xs={10} >
          Feed
        </Grid>
        <Grid item sm={3}>
          Rightbar
        </Grid>
      </Grid>
      Add
    </div>
  )
}

export default App