import Head from 'next/head';

function Page1() {
    return (
        <div>
            <p>this is home page</p>
            <img src="/static/icon.jpg"/>
            <Head>
                <title>page1</title>
            </Head>
            <Head>
                <meta name="description" content="hello world"/>
            </Head>
            <style jsx>
                {` p{
                    color: blue;
                    font-size: 18pt; 
                    }
                `}
            </style>
        </div>
    );
}
export default Page1;