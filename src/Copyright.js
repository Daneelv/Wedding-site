import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Link from '../src/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        <Link href='https://www.cybermania.co.za/'>Cybermania.co.za</Link> 
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
