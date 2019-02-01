import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Sub } from '../Header/styles'
import { Wrapper, Form, Button, Input, FormMessage } from './styles'

class Mailer extends Component {
  state = {
    email: '',
    error: false,
    errorMsg: '',
  }
  handleFormSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email, {}) // listFields (second arg) are optional if you are only capturing the email address.
      .then(data => {
        if (data.result === 'success') {
          this.setState({
            email: '',
            errorMsg: '',
            successMsg: data.msg,
          })
        } else {
          this.setState({
            error: true,
            errorMsg: data.msg,
          })
        }
      })
      .catch(() => {
        console.log('Mailchimp always returns 200s.')
      })
  }

  updateFormField = e => {
    this.setState({
      email: e.target.value,
    })
  }
  render() {
    return (
      <Wrapper>
        <Sub>
          Sign up for my newsletter. I'm sharing my software development notes
          and updates.
        </Sub>
        <Form id="form" onSubmit={e => this.handleFormSubmit(e)}>
          <Input
            placeholder="email"
            value={this.state.email}
            onChange={e => this.updateFormField(e)}
          />
          <Button type="submit">submit</Button>
        </Form>
        {this.state.error && (
          <FormMessage
            dangerouslySetInnerHTML={{ __html: this.state.errorMsg }}
          />
        )}

        {this.state.successMsg && <FormMessage>Subscribed.</FormMessage>}
      </Wrapper>
    )
  }
}

export default Mailer
