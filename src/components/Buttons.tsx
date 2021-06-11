import { Button } from "@erikiva/component-library";

function Buttons() {
  return (
    <>
      <h2 className='mt-5'>Buttons</h2>
      <hr />
      <h3 className='mt-3'>Variants</h3>
      <div className='row mt-3'>
        <div className='col-sm-4 text-center'>
          <Button>Secondary</Button>
        </div>
        <div className='col-sm-4 text-center'>
          <Button variant='primary'>Primary</Button>
        </div>
        <div className='col-sm-4 text-center'>
          <Button variant='danger'>Danger</Button>
        </div>
      </div>
      <h3 className='mt-3'>Disabled</h3>
      <div className='row mt-3'>
        <div className='col-sm-4 text-center'>
          <Button disabled>Secondary [disabled]</Button>
        </div>
        <div className='col-sm-4 text-center'>
          <Button variant='primary' disabled>
            Primary [disabled]
          </Button>
        </div>
        <div className='col-sm-4 text-center'>
          <Button variant='danger' disabled>
            Danger [disabled]
          </Button>
        </div>
      </div>
      <h3 className='mt-3'>Sizes</h3>
      <div className='row mt-3'>
        <div className='col-sm-4 text-center'>
          <Button size='small'>Small</Button>
        </div>
        <div className='col-sm-4 text-center'>
          <Button size='medium'>Medium</Button>
        </div>
        <div className='col-sm-4 text-center'>
          <Button size='large'>Large</Button>
        </div>
      </div>
      <h3 className='mt-3'>Full-width</h3>
      <div className='row mt-3'>
        <div className='col-12'>
          <Button isFullWidth>Full-width Button</Button>
        </div>
      </div>
    </>
  );
}

export default Buttons;
