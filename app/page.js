'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import About from 'pages/about';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const isMobileScreen = useMediaQuery('(max-width:1399px)')

  return (
    <Grid container >
      <Grid item xs={12}>
        <About />
      </Grid>
    </Grid>
  )
}
