import { Field } from "@erikiva/component-library";
import "./FieldControls.scss";

function FieldControls() {
  return (
    <>
      <h2 className='mt-5'>Field Controls</h2>
      <hr />
      <h3 className='mt-3'>Inputs</h3>
      <div className='row mt-3'>
        <div className='col-sm-6'>
          <Field>
            <Field.Label>Input</Field.Label>
            <Field.Input placeholder='Optional placeholder' />
          </Field>
        </div>
        <div className='col-sm-6'>
          <Field>
            <Field.Label>Disabled Input</Field.Label>
            <Field.Input placeholder='Optional placeholder' disabled />
          </Field>
        </div>
      </div>
      <h3 className='mt-3'>Textareas</h3>
      <div className='row mt-3'>
        <div className='col-sm-6'>
          <Field>
            <Field.Label>Text Area</Field.Label>
            <Field.Textarea placeholder='Optional placeholder' />
          </Field>
        </div>
        <div className='col-sm-6'>
          <Field>
            <Field.Label>Text Area</Field.Label>
            <Field.Textarea
              placeholder='Optional placeholder'
              isResizable={false}
            />
          </Field>
        </div>
      </div>
    </>
  );
}

export default FieldControls;
