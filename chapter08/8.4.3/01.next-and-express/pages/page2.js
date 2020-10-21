Page2.getInitialProps = async ({ query }) => {
  const { sayHello } = await import('../src/sayHello');
  const a = sayHello();
  console.log("a:" + a);
  return { sayHello: a };
};

export default function Page2({ sayHello }) {
    return (
        <div>
            <p>{`sayHello: ${sayHello}`}</p>
        </div>
    );
}