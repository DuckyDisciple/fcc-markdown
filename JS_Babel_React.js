var MarkdownPreview = React.createClass({
  getInitialState: function(){
    return {text: 'Type text here to see the markdown equivalent\n\n*italic*\n\n**bold**\n\n#header\n\n[link](www.google.com)'};
  },
  textChanged: function(e){
    this.setState({text: e.target.value});
  },
  rawMarkup: function(){
    var rawMarkup = marked(this.state.text.toString(),{sanitize:true});
    return {__html: rawMarkup};
  },
  render: function(){
    return (
      <div className="content">
        <div className="input-area">
          <textarea className="text-input" onChange={this.textChanged}>
            {this.state.text}
          </textarea>
        </div>
        <div className="preview-area">
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
      </div>
    );
  }
});

React.render(<MarkdownPreview />,document.getElementById("content"));
