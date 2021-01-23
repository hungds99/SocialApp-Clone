import { Avatar } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import PostDialog from '../postDialog'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        gap: '15px'
    }
}))

export default function CreatePost() {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <PostDialog />
            <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
            />
        </Card>
    )
}
