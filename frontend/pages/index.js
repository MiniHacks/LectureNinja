import * as React from 'react';
import Layout from '../components/Layout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Layout>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Did you ever wish you could’ve rewinded an IRL
          lecture?
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <div>
          <Link href="/dashboard" color="secondary">
            dashboard page
          </Link>
        </div>
        <ProTip />
        <Copyright />
      </Box>
    </Layout>
  );
}
