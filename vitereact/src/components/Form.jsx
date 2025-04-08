import { Button } from './Button';
import  { Textfield }  from './Textfield';

export const Form = () => {

  const textfieldHandler = (e) => console.log(e.target.value)

  return (
    <div>
      <h1>Form</h1>
      <form>
        <Textfield label="usuário" onChange={textfieldHandler} />
        <br />
        <Textfield label="senha" onChange={(e) => console.log(e.target.value)} />
        <br />
        <Button label="Submit" onClick={() => alert('Form submitted!')} />
      </form>
    </div>
  );
}