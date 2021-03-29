import React from 'react'
import { Container } from 'reactstrap'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid, { GridSpacing } from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Particle from 'particles-bg'
import background from '../../assets/img/bg-main.jpg'
import Fab from '@material-ui/core/Fab'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '35vh',
    },
    containerRoot: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    marginTop150: {
        marginTop: 150,
    },
    containerBg: {
        position: 'absolute',
        height: 800,
        top: 0,
        left: 0,
        right: 0,
        zIndex: - 1,
    },
    headerTitle: {
        fontFamily: 'Bitter,serif',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        color: '#dcdcdc',
        marginTop: 150,
    },
    subTitle: {
        fontFamily: 'Bitter,serif',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        color: '#8e8e8e',
        marginTop: 20,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperGrid: {
        height: 140,
        width: 100,
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}))

const Mainpage = (props: any) => {
    const classStyle = useStyles()

    return (
        <>
            <div className={classStyle.containerBg} style={{ background: 'url(' + background + ')', backgroundAttachment: 'fixed' }}>
                <Particle type="cobweb" bg={true} />
                <Container className="themed-container" fluid={true} style={{ marginTop: 50 }}>
                    <Typography variant="h2" className={classStyle.headerTitle}>
                        How about earning more by Forex Trading?
                    </Typography>
                    <Typography variant="h5" className={classStyle.subTitle}>
                        Welcome to Tifia Philippines, Smart Forex trading on perfect conditions
                    </Typography>
                    <Grid container className={classStyle.containerRoot + ' ' + classStyle.marginTop150}>
                        <Grid item xs={12} style={{ color: '#fff', textAlign: 'center', justifyContent: 'center', marginTop: 5 }}>
                            <Typography variant="h6">
                                Create your account now.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center', marginTop: 15 }}>
                            <Fab variant="extended" style={{ background: '#e25656', color: '#fff' }}>
                                <ArrowForwardIos className={classStyle.extendedIcon} />
                                    Register
                            </Fab>
                        </Grid>
                    </Grid>
                    <Grid container className={classStyle.containerRoot + ' ' + classStyle.marginTop150}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={2}>
                                {[0, 1, 2, 3, 5, 6].map((value) => (
                                    <Grid key={value} item>
                                        <Paper className={classStyle.paperGrid} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={2}>
                                {[0, 1, 2, 3, 5, 6].map((value) => (
                                    <Grid key={value} item>
                                        <Paper className={classStyle.paperGrid} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Container className="themed-container" fluid={true} >

            </Container>
        </>
    );
}
export default Mainpage;