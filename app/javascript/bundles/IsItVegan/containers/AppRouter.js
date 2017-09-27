import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from '../NavBar/components/NavBar'
import FlashMessages from '../Alerts/components/FlashMessages'
import HomePage from '../HomePage/components/HomePage'
// import SearchResultsPage from '../SearchResultsPage/components/SearchResultsPage'
// import UserPage from '../UserPage/components/UserPage'
// import Footer from '../Footer/components/Footer'

const AppRouter = (props, railsContext) => {
  const user = props.user
  const messages = props.messages
  return (
    <Router>
      <div>
        <Route render={props => <NavBar {...props}
          user={user}
          railsContext={railsContext}
          />}
        />
        <Route render={props => <FlashMessages {...props}
          messages={messages}
          railsContext={railsContext}
          />}
        />
        <Switch>
          <Route exact path='/'
                 component={HomePage}
                 props={props}
          />
          {/* <Route path='' component={SearchResultsPage} /> */}
          {/* <Route path='' component={UserPage} /> */}
        </Switch>
        {/* <Route component={Footer} /> */}
      </div>
    </Router>
  )
}

export default AppRouter
