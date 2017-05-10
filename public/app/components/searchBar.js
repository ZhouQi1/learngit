import React from 'react'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.mixins = [ImmutableRenderMixin];
  }

  render() {
    return <div className="pure-form search-bar">
      <div style={{marginBottom: '20px'}}>
        <input type="text" placeholder="输入条数"  style={{width:'40%', marginRight: '10px'}}/>
        <button className='pure-button button-secondary button-small'>添加指定条数</button>
      </div>
      <input type="text" onKeyUp={this.props.filterItem} placeholder="请输入查找的index" />
    </div>;
  }
}

export default SearchBar
