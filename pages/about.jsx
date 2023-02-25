'use client'
import { Inter } from '@next/font/google'
import styles from '../app/page.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import Link from 'next/link'
import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import MessageIcon from '@mui/icons-material/Message'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  const isMobileScreen = useMediaQuery('(max-width:1399px)')

  return (
    <main className={styles.main}>
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid container sx={{ width: isMobileScreen ? '100%' : '80%' }}>
          <Grid item xs={6}>
            <h1 className={styles.code}>Valentin Benitez</h1>
          </Grid>
          <Grid item xs={6} sx={{ paddingTop: '8px' }}>
            <Link href={'https://walink.co/540849'} target="_blank" rel="noreferrer">
              <MessageIcon />
            </Link>
          </Grid>
        </Grid>
        {/* tittle */}
        <br />
        <Grid
          container
          style={{
            display: 'flex',
            flexDirection: isMobileScreen ? 'column' : 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '3em',
          }}
        >
          <Grid item xs={6}>
            <div style={{ paddingRight: '10px' }}>
              <Image
                src="/IMG_0498.jpg"
                alt="profile picture"
                width={144}
                height={144}
                style={{
                  objectFit: 'unset',
                  borderRadius: '20px',
                  margin: 'auto',
                  marginBottom: isMobileScreen ? '20px' : 'auto',
                }}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#5B5D6B',
                textAlign: 'start',
                width: '80%',
              }}
              className={styles.code}
            >
              <ol style={{ paddingLeft: isMobileScreen ? '62px' : '0px' }}>
                <li>🔭 I’m currently working on Beetransfer</li>
                <br />
                <li>📫 How to reach me benitezvalentin046@gmail.com</li>
                <br />
                <li>
                  👨‍💻 All of my projects are available at
                  <a href="https://github.com/valenbenitez" target={'_blank'} rel="noreferrer">
                    https://github.com/valenbenitez
                  </a>
                </li>
              </ol>
            </div>
          </Grid>
        </Grid>
        {/* description */}
        <div className={styles.descriptionA} style={{ width: isMobileScreen ? '300px' : '560px', marginTop: '4em' }}>
          <br />
          <p style={{ width: isMobileScreen ? '240px' : '540px', lineHeight: '26px' }}>
            Hey! I'm <strong>Valentin</strong>. Full stack web developer. I consider myself an autonomous person, with
            excellent teamwork and looking to be constantly learning. I am passionate about developing tools to
            facilitate any type of work so that it can be more efficient and effective.
          </p>
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginTop: '4em',
          }}
        >
          <h3 className={styles.code}>Connect with me!</h3>
          <br />
          <div
            style={{
              border: '1px solid #404252',
              padding: '1rem 1.2rem',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'row',
              gap: '26px',
              width: '248px',
            }}
          >
            <Link href={'https://github.com/valenbenitez'} target="_blank" rel="noreferrer">
              <GitHubIcon color="primary" fontSize="large" />
            </Link>
            <Link href={'https://twitter.com/valenbennitez'} target="_blank" rel="noreferrer">
              <TwitterIcon color="primary" fontSize="large" />
            </Link>
            <Link href={'https://www.linkedin.com/in/valentin-benitez/F'} target="_blank" rel="noreferrer">
              <Image src="/linkedin.png" alt="linkedin-icon" width={34} height={34} />
            </Link>
            <Link href={''} target="_blank">
              <EmailIcon color="primary" fontSize="large" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
