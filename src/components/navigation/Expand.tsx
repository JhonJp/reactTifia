import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '35vh',
  },
  container: {
    display: 'flex',
  },
  paper: {
    width: '100%',
    backgroundColor: '#44454675',
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const Expands = (props: any) => {
  const { checked, activeNav, bgcolor } = props
  const classes = useStyles()

  return (
    <>
      <Collapse in={checked}>
        <Paper elevation={4} className={classes.paper}>
          <div className={classes.root + ' expandedDropDown'}>
            <p>{activeNav}</p></div>
        </Paper>
      </Collapse>
    </>
  );
}
export default Expands;