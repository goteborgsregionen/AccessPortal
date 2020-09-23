import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Grid, Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const apiUrl = process.env.API_URL

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  cardBody: {
    textAlign: 'justify',
  }
}))

const License = function ({ title, description }) {
  const classes = useStyles()
  return (
    <Grid item xs={3}>
      <Card className={classes.card}>
        <Typography variant="h5" component="h1">{title}</Typography>
        <Typography variant="body1" className={classes.cardBody}>{description}</Typography>
      </Card>
    </Grid>
  )
}

export default function LicenseList() {
  const [licenses, setLicenses] = useState([])

  useEffect(() => {
    const fetchLicenses = async () => {
      const response = await fetch(`${apiUrl}/license`)
      const json = await response.json()

      setLicenses(json)
    }

    fetchLicenses()
  }, [])
  
  return (
    <div>
      <Grid 
        container
        spacing={6}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
      {licenses.map(license =>
        <License
          key={license.title}
          title={license.title}
          description={license.description}
        />)}
      </Grid>
    </div>
  )
}
