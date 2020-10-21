import Link from 'next/link';
export default function page1() {
    return (
        <div>
            <Link href="/page2">
                <a>page2로 이동</a>
            </Link>
        </div>
    );
}