import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import {
    Avatar,
    Box,
    makeStyles,
    MenuItem,
    TextField,
    Typography
} from '@material-ui/core'

const useStyles = makeStyles({
    dialog: {
        position: 'absolute',
        top: 50,
        width: '100%'
    },
    dialogTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />
})

export default function PostDialog() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        document.body.style.overflow = 'auto'
        document.body.style.paddingRight = '0'
    }, [open])

    return (
        <>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                disableElevation
            >
                Đăng bài viết
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                classes={{
                    paper: classes.dialog
                }}
            >
                <DialogTitle className={classes.dialogTitle} disableTypography>
                    <Avatar
                        alt="Travis Howard"
                        src="https://material-ui.com/static/images/avatar/2.jpg"
                    />
                    <Box ml={'5px'}>
                        <Typography variant="h6" gutterBottom>
                            Đinh Sỹ Hùng
                        </Typography>
                        <TextField
                            select
                            value="1"
                            variant="outlined"
                            size="small"
                        >
                            <MenuItem value={1}>Công khai</MenuItem>
                            <MenuItem value={2}>Bí mật</MenuItem>
                            <MenuItem value={3}>Chỉ mình tôi</MenuItem>
                        </TextField>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        multiline
                        rows={8}
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        fullWidth
                        onClick={handleClose}
                        color="primary"
                        variant="contained"
                    >
                        Đăng bài
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
