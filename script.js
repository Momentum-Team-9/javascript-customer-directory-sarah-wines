console.log(customers);
const outputDiv = document.getElementById('root');

for (customer of customers) {
  const customerCard = document.createElement('div');

  customerCard.classList.add('customer');
  outputDiv.appendChild(customerCard);

  //Img
  const customerPic = document.createElement('img');
  customerPic.classList.add('img');
  customerPic.src = customer.picture.medium;
  customerCard.appendChild(customerPic);

  //First
  const firstName = document.createElement('div');
  firstName.classList.add('firstname');
  firstName.innerText = customer.name.first;
  customerCard.appendChild(firstName);
  console.log(customer.name.first);

  //Last
  const lastName = customer.name.last;
  firstName.innerText += ' ' + lastName;

  //email
  const email = document.createElement('div');
  email.classList.add('email');
  email.innerText = customer.email;
  customerCard.appendChild(email);

  //Address number
  const streetNumber = document.createElement('div');
  streetNumber.classList.add('streetNumber');
  streetNumber.innerText = customer.location.street.number;
  customerCard.appendChild(streetNumber);

  //Address street
  const streetName = document.createElement('div');
  streetName.classList.add('streetName');
  streetName.innerText = ' ' + customer.location.street.name;
  customerCard.appendChild(streetName);

  const cityStateZip = document.createElement('div');
  cityStateZip.classList.add('cityStateZip');
  customerCard.appendChild(cityStateZip);

  //City
  const city = document.createElement('div');
  city.classList.add('city');
  city.innerText = customer.location.city + ',';
  cityStateZip.appendChild(city);

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
  state.classList.add('state');
  state.innerText = nameToAbbr(customer.location.state);
  cityStateZip.appendChild(state);

  //zip
  const zip = document.createElement('div');
  zip.classList.add('zip');
  zip.innerText = customer.location.postcode;
  cityStateZip.appendChild(zip);

  //DOB
  const DOB = document.createElement('div');
  DOB.classList.add('DOB');
  DOB.innerText = 'DOB: ' + moment(customer.dob.date).format('MMM D, YYYY');
  customerCard.appendChild(DOB);

  //Customer since
  const cSince = document.createElement('div');
  cSince.classList.add('cSince');
  cSince.innerText =
    'Customer since: ' + moment(customer.registered.date).format('MMM D, YYYY');
  customerCard.appendChild(cSince);
}
