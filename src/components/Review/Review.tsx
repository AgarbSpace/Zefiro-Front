import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'consulta tal',
    desc: 'Tipo de atendimento tal',
    price: 'preço',
  }
];

const payments = [
  { name: 'Bandeira do cartão', detail: 'MasterCard' },
  { name: 'Nome no cartao', detail: 'Fulano de tal' },
  { name: 'Número do cartão', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Data de vencimento', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Revisão
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            preço total
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={9}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalhes do pagamento
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}