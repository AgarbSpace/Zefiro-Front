import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import frLocale from 'date-fns/locale/fr';


export default function DatePickers() {
  const [value, setValue] = React.useState(new Date());
  const days = [new Date('05/22/2022'), new Date('05/25/2022'), new Date('05/27/2022')]
  const disabledDays = (date) => {
    return days.map((myDate) => new Date(myDate).getTime()).includes(date.getTime());
  };
  
  return (
    <LocalizationProvider  dateAdapter={AdapterDateFns} adapterLocale={frLocale}>
      <Stack spacing={3}>
        <DesktopDatePicker
            disablePast
          label="Dia da consulta"
          value={value}
          mask='__/__/____'
          minDate={new Date('2017-01-01')}
          shouldDisableDate={disabledDays}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}