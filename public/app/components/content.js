import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import {connect} from 'react-redux'
import {increaseAge} from '../actions/index'
class Content extends React.Component {
  handleIncreaseAge(){
    const {dispatch} = this.props;
    dispatch(increaseAge())
  }
  render() {
    const items = this.props.items.toArray()
    const { filter, deleteItem } = this.props;
    return (
      <div>
        <ul>
          {items.map(v => <LiItem filter={filter} item={v} key={v} deleteItem={deleteItem} />)}
        </ul>
        {filter.data.age ? <div>{filter.data.age}</div> : null}
        <button onClick = {this.handleIncreaseAge.bind(this)}>increaseAge</button>
      </div>
    )
  }
}

class LiItem extends React.Component {
  render() {
    const liClass = classNames({
      hidden: !_.isEmpty(this.props.filter) && this.props.filter != this.props.item
    });

    return <li className={liClass}>
      <span style={{marginRight: '4px'}}>{this.props.item}</span>
      <button onClick={this.props.deleteItem.bind(this, this.props.item)}>delete</button>
    </li>;
  }
}
function mapStateToProps(state){
  return {

  }
}
export default connect(mapStateToProps)(Content)
