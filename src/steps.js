const steps = [
  {
    stepTitle:'Le Type',
    stepDesc:'Choisissez le type de bière avec laquelle vous souhaitez matcher',
    labels:['Blonde','Brune','Blanche','Ambrée','Fruitée'],
    method: (answer) => answer
  },
  {
    stepTitle:'Le Goût',
    stepDesc:"Choisissez l'arôme de la bière avec laquelle vous souhaitez matcher",
    labels:['Prononcé','Sucré','Epicé','Rafraichissante','Acide']
  },
  {
    stepTitle:"L'Amertume",
    stepDesc:"Choisissez le niveau d'amertume de la bière avec laquelle vous souhaitez matcher",
    labels:['Léger','Equilibré','Marqué']
  },
  {
    stepTitle:"Les Degrés",
    stepDesc:"Choisissez le volume d'alcool de la bière avec laquelle vous souhaitez matcher",
    labels:['Faible','Moyen','Fort']
  }  
]

export default steps