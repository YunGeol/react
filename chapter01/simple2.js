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
ReactDOM.render(
    React.createElement(LikeButton), 
    document.querySelector('#react-root1'),
);
ReactDOM.render(
    React.createElement(LikeButton), 
    document.querySelector('#react-root2'),
);
ReactDOM.render(
    React.createElement(LikeButton), 
    document.querySelector('#react-root3'),
);