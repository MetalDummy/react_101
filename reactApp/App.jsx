import React from 'react';
import Sumador from './Sumador.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.Sumar = this.Sumar.bind(this);
        this.state = {
            suma: 0
        }
      }
      Sumar(){
       this.setState({suma: this.state.suma + parseInt(document.getElementById('sumador').value)})
       document.getElementById('sumador').value=0;
        }
    render(
    ) {
        return (
            <div>
                Suma:
               <p> <input type="number" name="firstname" id="sumador"></input></p>
                <button name="subject" type="submit" value="Sume Aqui" onClick={this.Sumar}>Sume Aqui</button>
                <Sumador suma={this.state.suma}/>
            </div>
        );
    }
}
export default App;


