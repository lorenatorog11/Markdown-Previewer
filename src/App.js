import React, {Component} from 'react';
import marked from 'marked';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import './App.css';
//import Container from 'react-bootstrap/Container'

const textInicial = ` # Bienvenidos

**Ejemplos que te ayudaran**

> Citas!

# Para título principal
## Para título secundario

- Item 1
  -Item 1.1
    - Item 1.1.1
- Item 2
- Item 3


[Enlaces o URL](https://es.wikipedia.org/wiki/Grandes_felinos)

Código en linea \`<div></div>\`
Código en bloque:

\`\`\`
const pi = 3.1416;
let y = 2;
let suma = pi + y;
\`\`\`
![Imagenes/ Text](https://image.slidesharecdn.com/pptfelinos11-160904181001/95/ppt-felinos-1-1-1-638.jpg?cb=1473012677)
`


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: textInicial,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      text:event.target.value
    });
  }



  render(){
    let markedInput = marked(this.state.text, { breaks: true })  
    return (
      <div className="App container-fluid">
        <h1>Markdown Previewer</h1>
        <div >
          <Form>
            <FormGroup className="card">
              <FormLabel className="card-header">Editor</FormLabel>
              <FormControl className="card-body" id="editor" as="textarea" rows="10" value={this.state.text} onChange={this.handleChange}/>
            </FormGroup>
          </Form>

          <Form >
            <Form.Group className="card">
              <FormLabel className="card-header">Vista Previa</FormLabel>
              <div id="preview" dangerouslySetInnerHTML ={{__html:markedInput}} className="card-body" as="textarea">

              </div>
            </Form.Group>
          </Form> 
        </div>         
      </div>
    );
  }  
}


export default App;
