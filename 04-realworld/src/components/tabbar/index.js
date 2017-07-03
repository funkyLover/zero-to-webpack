import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class Tabbar extends React.Component {
  constructor (props) {
    super(props)
    let path = props.location.pathname
    switch (path) {
      case '/':
        this.state = { initalTab: 0 }
        break
      case '/order':
        this.state = { initalTab: 1 }
        break
      case '/me':
        this.state = { initalTab: 2 }
        break
      default:
        this.state = { initalTab: 0 }
        break
    }
    this.state.path = path
    this.tabChange = this.tabChange.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    this.setState({ path: nextProps.location.pathname })
  }

  tabChange (value) {
    this.props.history.push(value)
  }

  render () {
    return (
      <Tabs onChange={this.tabChange} initialSelectedIndex={this.state.initalTab} value={this.state.path}>
        <Tab value='/' icon={<FontIcon className='material-icons'>phone</FontIcon>}
          label='RECENTS' />
        <Tab value='/order' icon={<FontIcon className='material-icons'>favorite</FontIcon>}
          label='FAVORITES' />
        <Tab value='/me' icon={<MapsPersonPin />}
          label='NEARBY' />
      </Tabs>
    )
  }
}

Tabbar.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default withRouter(Tabbar)
