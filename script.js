console.log(customers);
const outputDiv = document.getElementById('root');
const customerCard = document.createElement('div');

customerCard.classList.add('customer');
outputDiv.appendChild(customerCard);

//First
const firstName = document.createElement('div');
firstName.innerText = customers[0].name.first;
customerCard.appendChild(firstName);
console.log(customers[0].name.first);

//Last
const lastName = customers[0].name.last;
firstName.innerText += ' ' + lastName;
customerCard.appendChild(firstName);

//Img
const customerPic = document.createElement('img');
customerPic.src = customers[0].picture.medium;
customerCard.appendChild(customerPic);

//email
const email = document.createElement('div');
email.innerText = customers[0].email;
customerCard.appendChild(email);

//Address number
const streetNumber = document.createElement('div');
streetNumber.innerText = customers[0].location.street.number;
customerCard.appendChild(streetNumber);

//Address street
const streetName = document.createElement('div');
streetName.innerText = customers[0].location.street.name;
customerCard.appendChild(streetName);

//City
const city = document.createElement('div');
city.innerText = customers[0].location.city;
customerCard.appendChild(city);

//State
//STATE ABBR. FUNCTION
function nameToAbbr(stateName) {
  const idx = usStates.findIndex(function (state) {
    return state.name === stateName.toUpperCase();
  });

  if (idx === -1) {
    return null;
  }

  return usStates[idx].abbreviation;
}
const state = document.createElement('div');
state.innerText = nameToAbbr(customers[0].location.state);
customerCard.appendChild(state);

//zip
const zip = document.createElement('div');
zip.innerText = customers[0].location.postcode;
customerCard.appendChild(zip);

//DOB
const DOB = document.createElement('div');
DOB.innerText = 'DOB: ' + moment(customers[0].dob.date).format('MMM D, YYYY');
customerCard.appendChild(DOB);

//Customer since
const cSince = document.createElement('div');
cSince.innerText =
  'Customer since: ' +
  moment(customers[0].registered.date).format('MMM D, YYYY');
customerCard.appendChild(cSince);
