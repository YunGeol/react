export default function Page2({text, data}) {
    function onClick() {
        import('../src/sayHello')
            .then(
                ({sayHello}) => console.log(sayHello())
            );
    }

    return (
        <div>
            <button onClick={onClick}>sayHello</button>
        </div>
    );
}