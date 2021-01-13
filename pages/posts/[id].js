import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import styled from 'styled-components'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({postData}){
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h2>{postData.title}</h2>
            <Date dateString={postData.date} />
            <br />
            <div dangerouslySetInnerHTML={{__html: postData.content}} />
        </Layout>
    )
}

export async function getStaticPaths(){
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const postData = await getPostData(params.id)
    return {
        props:{
            postData
        }
    }
}
