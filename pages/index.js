import React from "react";
import Container from "../components/Container";
import Head from "next/head";
import fetch from 'isomorphic-fetch'
import Users from "../components/Users";

const Index = ({data}) => {
  return (
    <div>
      <Container>
        <Head>
          <title>NextJs Project - Home</title>
        </Head>
        <h1>Next</h1>
        <Users data={data}/>
      </Container>
    </div>
  );
};

export async function getStaticProps(ctx) {
  const resp = await fetch('https://reqres.in/api/users')
  const data = await resp.json()
  return {
    props: {
      data
    }
  }
}

export default Index;
