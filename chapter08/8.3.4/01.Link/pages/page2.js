import Link from 'next/link';
export default function Page2() {
    return (
        <div>
            <Link href="/page1">
                <a>page1로 이동</a>
            </Link>

            <br/>

            <a href="/page1">page1로 이동 000</a>
        </div>
    );
}