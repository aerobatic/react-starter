var LogoBanner = React.createClass({
  render: function() {
    return (
      <div className="logo-banner">
        <a href="http://www.aerobatic.com">
          <img className="logo" src={this.props.logoSrc} />
        </a>
        <h1>{this.props.logoText}</h1>
      </div>
    );
  }
});
