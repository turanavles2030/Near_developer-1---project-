import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
  <>
    <Head>
      <title>Home</title>
      <meta name="keywords" content="" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>You have reached the right destination Coders and non-Coders!!!</p>
      <p className={styles.text}>1. Are you a blockchain enthusisast?<br />2.Do you like to learn and grow with the community?</p>
      <p>Hey,you reached the right path!!!</p>
      <Link href="/ninjas/">
        <a className={styles.btn}>See CodeBAGS Listing</a>
      </Link>
    </div>
  </>
  )
}
