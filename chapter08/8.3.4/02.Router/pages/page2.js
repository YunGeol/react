import Router from 'next/router';
// ...
export default function Page2() {
    return (
        <div>
            <button onClick={() => Router.push('/page1')}>page1로 이동</button>
        </div>
    );
}