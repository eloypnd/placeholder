import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const PlaceholderComponent = ({data}) => (
  <Container textAlign='center'>
    <Header as='h1'>Boilerplate</Header>
    <a href='https://en.wikipedia.org/wiki/Single-page_application' target='_blank' rel='noopener noreferrer'>SPA</a><br />
    <small>with</small>
    <p>
      <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>create-react-app</a><br />
      +<br />
      <a href='https://redux.js.org' target='_blank' rel='noopener noreferrer'>redux</a>
    </p>
    {data && (
      <small style={{color: '#abc'}}>
        <p>
          &<br /> <a href='https://jsonplaceholder.typicode.com/'>JSONPlaceholder</a>
        </p>
        {data.map(item => <div key={item.id}>{item.name}</div>)}
      </small>
    )}
  </Container>
)

export default PlaceholderComponent
