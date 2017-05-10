import React from 'react'
import SearchBar from '../components/searchBar'
import Content from '../components/content'
import Footer from '../components/footer'
import { connect } from 'react-redux'
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import * as ItemsActions from '../actions'
import { bindActionCreators } from 'redux'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.mixins = [ImmutableRenderMixin]
  }

  // mixins: [ImmutableRenderMixin],
  componentDidMount(){
    //const {dispatch} = this.props;
    //dispatch(ItemsActions.receiveData())
    const { actions } = this.props;
    actions.receiveData()
    
  }
  render() {
    let styles = {width:'400px', margin: '30px auto 0' };
    const { actions, items, filter } = this.props;
    
    return (
        <div style={styles}>
            <h2>Manage Items</h2>
            {/*<SearchBar filterItem={actions.filterItem}/>*/}
            <Content items={items} filter={filter} deleteItem={actions.deleteItem}/>
            <Footer addItem={actions.addItem} deleteAll={actions.deleteAll}/>
        </div>
    )
  }
}

App.propTypes={
  items: React.PropTypes.object,
  filter: React.PropTypes.string
}

function mapStoreToProps(store){
  return {
    items: store.items,
    filter: store.filter
  };
}

function mapActionsToProps(dispatch){
  return {
    actions: bindActionCreators(ItemsActions, dispatch)
  };
}
function mapStateToProps(state){
  data: state.filter.data
}
export default connect(mapStoreToProps, mapActionsToProps)(App)
