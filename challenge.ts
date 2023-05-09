// challenge.ts
const prettyPrintWilder = (users) => {
    users.map((user) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  const wilders = [];
  const user1 = { name: "Pierre", age: 23 };
  const user2 = { name: "Paul", birthday: "10/02/1990" };
  const user3 = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders: User[]);// Déclarer des types pour le paramètre et le retour de la fonction prettyPrintWilder


//Déclarer une interface User avec des propriétés typées
interface User {
    name: string;
    age: number;
    }

//typer wilder 
const wilders: User[] = [];

//Adapter user2 pour qu'il n'affiche plus d'erreur
const user2 = { name: "Paul", age: 30 };
