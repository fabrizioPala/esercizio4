export function Welcome({name,age}){
    return <div>
        <p>Welcome , <strong>{name}</strong></p>
       
    </div>
}


/*ESERCIZIO PROP  1):
Nel caso in cui non si passi alcuna" prop" name al componente ,verrà renderizzato solo il 
messaggio nel componente function Welcome senza il nome, dunque il messaggio che appare a
sarà "Welcome,!"  
2)Sì, puoi impostare un valore predefinito (default) per una prop in React.
 Nel componente Welcome, si può utilizzare una "default props" per specificare u
n valore per la prop "name".
Welcome.defaultProps = {
  name: 'Guest',
};
*/