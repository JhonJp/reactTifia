import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles((theme) => ({
    root: {
      height: '55vh',
    },
    container: {
      display: 'flex',
    },
    paper: {
      width:'100%',
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
    const { checked } = props
    const classes = useStyles()

    return (
        <>
            <Collapse in={checked}>
                <Paper elevation={4} className={classes.paper}>
                    <div className="expandedDropDown"></div>
                </Paper>
            </Collapse>
        </>
    );
}
export default Expands;