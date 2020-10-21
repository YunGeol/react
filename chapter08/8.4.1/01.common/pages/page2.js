import { callApi } from '../src/api';

Page2.getInitialProps = async ({ query, req }) => {
    const text = query.text || 'none';
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    const data = await callApi(text);
    return { text, data, userAgent };
};

export default function Page2({ text, data, userAgent }) {
    return (
        <div>
            <p>this is home page2</p>
            <p>{`text: ${text}`}</p>
            <p>{`data : ${data}`}</p>
            <p>{`userAgent : ${userAgent}`}</p>
        </div>
    );
}