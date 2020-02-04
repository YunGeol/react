class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked : false };
    }
    render() {
        const text = this.state.liked ? '좋아요 취소' : '좋아요';
        return React.createElement(
            'button',
            { onClick: () => {
                    if (this.state.liked == true) {
                        this.setState( {liked : false} )
                    } else {
                        this.setState( {liked : true} )
                    }
                }
            },
            text,
        );
    }
}
const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(LikeButton), domContainer);