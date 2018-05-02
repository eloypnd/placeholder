import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlaceholder } from '../ducks/duck'
import { PlaceholderComponent } from '../components'

export class PlaceholderContainer extends Component {
  // Lifecycle methods

  componentDidMount () {
    this.props.fetchPlaceholder()
  }

  // render

  render () {
    const { isLoading, data } = this.props
    if (isLoading) return <div>Loading...</div>
    return <PlaceholderComponent data={data} />
  }
}

const mapStateToProps = state => state.duck

const mapDispatchToProps = dispatch => ({
  fetchPlaceholder: () => dispatch(fetchPlaceholder())
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaceholderContainer)
