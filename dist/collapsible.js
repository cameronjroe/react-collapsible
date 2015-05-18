'use strict';

var React = require('react/addons');
var cx = require('classnames');

var ENTER_KEY = 13;

/**
 * cosmos-collapsible
 * A collapsible component for cosmos-ui.
 *
 * - given the collapsible is opened on the first panel, when a user clicks on the second panel header, then the collapsible should open the selected panel and close the currently opened panel
 */

var Collapsible = React.createClass({
  displayName: 'Collapsible',

  getDefaultProps: function getDefaultProps() {
    return {
      active: 0
    };
  },

  getInitialState: function getInitialState() {
    return {
      active: this.props.active
    };
  },

  toggle: function toggle(index, e) {
    if (e.keyCode && e.keyCode !== ENTER_KEY) {
      return;
    }
    this.setState({
      active: index
    });
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'collapsible' },
      this.props.data.map((function (item, i) {
        var activeOne = this.state.active === i;
        var classes = cx({
          'collapsible__panel': true,
          'collapsible__panel--active': activeOne
        });
        var caret = cx({
          'fa fa-caret-up': activeOne,
          'fa fa-caret-down': !activeOne
        });
        return React.createElement(
          'section',
          { key: i, className: classes, onClick: this.toggle.bind(this, i), tabIndex: '0', onKeyDown: this.toggle.bind(this, i) },
          React.createElement(
            'h1',
            { className: 'collapsible__heading' },
            item.heading,
            ' ',
            React.createElement('i', { className: caret })
          ),
          React.createElement(
            'p',
            { className: 'collapsible__content' },
            item.content
          )
        );
      }).bind(this))
    );
  }

});

var data = [{
  heading: 'Some heading',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
  heading: 'Some other heading',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}];

React.render(React.createElement(Collapsible, { data: data }), document.querySelector('.inject'));