import {
    Avatar,
    Box,
    FormControlLabel,
    makeStyles,
    MenuItem,
    TextField,
    Typography
} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import React, { forwardRef, useEffect, useState } from 'react'
import { createPost, uploadMediaImage } from '../../services/postApi'

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
    },
    controlLabel: {
        marginLeft: 0,
        marginTop: 5,
        border: '1px solid',
        borderRadius: '2px',
        padding: '3px'
    },
    imagePreview: {
        width: 100,
        height: 100,
        objectFit: 'cover',
        marginTop: 10,
        marginRight: 10
    },
    removeBtn: {
        right: 5,
        cursor: 'pointer'
    }
})

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />
})

export default function PostDialog() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [post, setPost] = useState({
        privacy: 1,
        content: '',
        media: []
    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmitBtn = () => {
        const formData = new FormData()
        formData.append('privacy', post.privacy)
        formData.append('content', post.content)
        formData.append('media', post.media)
        createPost(formData)
            .then((res) => {
                console.log(res)
                setOpen(false)
            })
            .catch((err) => console.log(err))
        // setOpen(false)
    }

    const handleContentChange = (e) => {
        setPost((prev) => ({
            ...prev,
            content: e.target.value
        }))
    }

    const handlePrivacyChange = (e) => {
        setPost((prev) => ({
            ...prev,
            privacy: e.target.value
        }))
    }

    const handleChangeImage = (e) => {
        let file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        uploadMediaImage(formData).then((res) => {
            setPost((prev) => ({
                ...prev,
                media: [...prev.media, res.data]
            }))
        })
    }

    const handleRemoveImage = (id) => {
        let mediaList = [...post.media]
        let mediaListFilter = mediaList.filter((image) => image.id !== id)
        setPost((prev) => ({
            ...prev,
            media: mediaListFilter
        }))
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
                            value={post.privacy}
                            variant="outlined"
                            size="small"
                            onChange={handlePrivacyChange}
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
                        value={post.content}
                        variant="outlined"
                        onChange={handleContentChange}
                    />
                    <FormControlLabel
                        className={classes.controlLabel}
                        control={
                            <TextField
                                hidden
                                type="file"
                                onChange={handleChangeImage}
                            />
                        }
                        label="Ảnh"
                    />
                    <Box display="flex" overflow="auto" position="rela">
                        {post.media.map((image) => {
                            return (
                                <Box position="relative">
                                    <Box
                                        component="span"
                                        position="absolute"
                                        color="primary"
                                        className={classes.removeBtn}
                                        onClick={() =>
                                            handleRemoveImage(image.id)
                                        }
                                    >
                                        X
                                    </Box>
                                    <img
                                        className={classes.imagePreview}
                                        alt={image.src}
                                        src={image.src}
                                    />
                                </Box>
                            )
                        })}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                        fullWidth
                        onClick={handleSubmitBtn}
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
