const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(array, string){
    return array.filter(element => element.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
    return array.filter(element => {
        const stringLength = string.length;
        const elementComparison = element.substring(0, stringLength);
        return elementComparison === string;
    })
}

function matchName(array, name){
    return array.filter(element => {
        return element.name.toLowerCase() === name.toLowerCase()
    })
}

console.log(matchName(drivers, 'bobby'));