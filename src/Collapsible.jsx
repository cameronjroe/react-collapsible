'use strict';

var React = require('react/addons');
var cx = require('classnames');

const ENTER_KEY = 13;

/**
 * cosmos-collapsible
 * A collapsible component for cosmos-ui.
 *
 * - given the collapsible is opened on the first panel, when a user clicks on the second panel header, then the collapsible should open the selected panel and close the currently opened panel
 */

var Collapsible = React.createClass({

  getDefaultProps: function () {
    return {
      active: 0
    };
  },

  getInitialState: function () {
      return {
        active: this.props.active
      };
  },

  toggle: function (index, e) {
    if (e.keyCode && e.keyCode !== ENTER_KEY) {
      return;
    }
    this.setState({
      active: index
    });
  },

  render: function () {
    return (
        <div className="collapsible">
          {this.props.data.map(function (item, i) {
            var activeOne = (this.state.active === i);
            var classes = cx({
              'collapsible__panel': true,
              'collapsible__panel--active': activeOne
            });
            var caret = cx({
              'fa fa-caret-up': activeOne,
              'fa fa-caret-down': !activeOne
            });
            return (
              <section key={i} className={classes} onClick={this.toggle.bind(this, i)} tabIndex="0" onKeyDown={this.toggle.bind(this, i)}>
                <h1 className='collapsible__heading'>{item.heading} <i className={caret}></i></h1>
                <p className='collapsible__content'>{item.content}</p>
              </section>
            );
          }.bind(this))}
        </div>
      );
  }

});

var data = [
  {
    heading: 'Some heading',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    heading: 'Some other heading',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
];

React.render(<Collapsible data={data} />, document.querySelector('.inject'));
