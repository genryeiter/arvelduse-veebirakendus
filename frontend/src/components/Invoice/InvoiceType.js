import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex', flexWrap: 'wrap',
    }, formControl: {
        margin: theme.spacing(1), minWidth: 120,
    },
}));

const InvoiceType = ({type, setType}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
        setType(event.target.value);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Typography variant="overline" style={{color: 'gray'}} gutterBottom>Select type</Typography>
            <Button style={{lineSpacing: 1, fontSize: 35, fontWeight: 700}}
                    onClick={handleClickOpen}>{type ? type : 'Invoice'}</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                {/* <DialogTitle>Fill the form</DialogTitle> */}
                <DialogContent>
                    <div className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-dialog-select-label">Select Type</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={type}
                                onChange={handleChange}
                                input={<Input/>}
                            >
                                <MenuItem value="">
                                    <em>Select Type</em>
                                </MenuItem>
                                <MenuItem value="Invoice">Invoice</MenuItem>
                                <MenuItem value="Receipt">Receipt</MenuItem>
                                <MenuItem value="Estimate">Estimate</MenuItem>
                                <MenuItem value="Bill">Bill</MenuItem>
                                <MenuItem value="Quotation">Quotation</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>);
}

export default InvoiceType