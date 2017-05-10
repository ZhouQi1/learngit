import React from 'react'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.mixnis = [ImmutableRenderMixin];
  }

  render() {
    const { addItem, deleteAll } = this.props;
    return <div style={{textAlign: 'center'}}>
        <button style={{marginRight: '10px'}} className="pure-button button-secondary button-small" onClick={addItem}>add</button>
        <button className="pure-button button-error button-small" onClick={deleteAll}>deleteAll</button>
    </div>;
  }
}

export default Footer
