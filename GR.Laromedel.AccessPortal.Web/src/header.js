import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  }
}))

export default function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Lär dig något!
          </Typography>
          <Button>Logga ut</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
