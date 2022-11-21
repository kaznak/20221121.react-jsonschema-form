import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';

import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';

const schema = person.schema;
const uischema = person.uischema;
const initialData = person.data;

export default function JSONForm() {
  const [data, setData] = useState(initialData);
  return (
    <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => {
            if(errors && 0 != errors.length){ console.error(errors)
            } else { console.log(data); setData(data) }
        }}
    />
  );
}