import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import CreatePost from '../components/createPost/createPost'
import Header from '../components/header/header'
import LeftMenu from '../components/leftMenu/leftMenu'
import PostItem from '../components/postItem'
import PostList from '../components/postList'
import RightMenu from '../components/rightMenu/rightMenu'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}))

export default function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <LeftMenu />
            <main className={classes.content}>
                <Toolbar />
                <CreatePost />
                <PostList />
            </main>
            <RightMenu />
        </div>
    )
}
