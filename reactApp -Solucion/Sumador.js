import React from 'react';



class Sumador extends React.Component {




    render(
    ) {
        return (
            <div>
                Suma actual:
               <p>{this.props.suma}</p>               
            </div>
        );
    }
}
export default Sumador;


