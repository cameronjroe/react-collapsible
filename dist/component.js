var React = require('react');

var Component = React.createClass({displayName: "Component",

  render: function () {
    return (
        React.createElement("blockquote", {className: "component"}, 
          "“We shape our tools and thereafter our tools shape us”" + ' ' +
          "- Marshall McLuhan"
        )
      );
  }

});

React.render(React.createElement(Component, null), document.querySelector('.inject'));
