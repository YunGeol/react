import Router from 'next/router';

Page2.getInitialProps = async ({ query }) => {
    throw new Error('exception in getInitialProps');
};

export default function Page2({ text, data }) {
    return (
        <div>
            <button onClick={() => Router.push('/page1')}>page1로 이동</button>
        </div>
    );
}