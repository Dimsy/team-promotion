import React from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';

const getAvatarColor = (type) => {
    switch (type) {
        case 'Backend':
            return 'success';
        case 'Analyst':
            return 'primary';
        case 'Frontend':
            return 'error';
        case 'QA':
            return 'secondary';
        case 'DevOps':
            return 'warning';
    }
};

export const PlayerDescriptionModal = ({isOpened, handleClose, selectedPlayer}) => {
    return (
        <Dialog
            open={isOpened}
            onClose={handleClose}
            scroll="body"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Chip label={selectedPlayer.type} color={getAvatarColor(selectedPlayer.type)} style={{ height: 20, fontSize: 12, marginTop: 5 }}/>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: 15}}>
                    {selectedPlayer.position}
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Typography variant="h6" component="div" style={{marginBottom: 5, fontSize: 16, fontWeight: 'bold'}}>
                            Tech skills
                        </Typography>
                <Typography variant="body2" gutterBottom>
                    {selectedPlayer.skills.map((skill) => <Chip label={skill} style={{ height: 20, marginRight: 5, marginBottom: 5}}/>)}
                </Typography>
                        {Boolean(selectedPlayer?.comments?.length) &&
                          <>
                            <Typography variant="h6" component="div" style={{marginBottom: 5, fontSize: 16, fontWeight: 'bold'}}>
                              Comments
                            </Typography>
                            <Typography variant="body1" component="div" gutterBottom >
                                <ul style={{margin: 0}}>
                                    {selectedPlayer.comments.map((c) => <li>{c}</li>)}
                                </ul>
                            </Typography>
                          </>
                        }
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
    )
}
