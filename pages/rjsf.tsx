import Form from '@rjsf/core'
import { RJSFSchema, UiSchema } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'

const schema: RJSFSchema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
}

const uiSchema: UiSchema = {}

const log = (type: string) => console.log.bind(console, type)

export default function RJSF() {
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      validator={validator}
      onChange={log('changed')}
      onSubmit={log('submitted')}
      onError={log('errors')}
    />
  )
}
