const loadPhone = async (searchText) =>{
  const response = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await response.json();
  const phones = data.data
  console.log(phones);
  dataLoad(phones)
}

const dataLoad = phones => {
  const divContainer = document.getElementById('div-container')
  divContainer.textContent = '';
  const showAllContainer = document.getElementById('show-all-container');
  if(phones.length > 12){
    showAllContainer.classList.remove('hidden')
  }else{
    showAllContainer.classList.add('hidden')
  }
  phones = phones.slice(0,12)
  phones.forEach(phone => {
    const div = document.createElement('div');
    div.classList = `card bg-gray-100 p-4 shadow-xl`;
    div.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <h2>Brand : ${phone.brand} </h2>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
    </div>
    `;
    divContainer.appendChild(div)
  });
  toggleLoadingSpinner(false);
}

const handelClick = () =>{
  toggleLoadingSpinner(true);
  const textField = document.getElementById('textField');
  const searchText = textField.value;
  loadPhone(searchText)
}

const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden');
  }else{
    loadingSpinner.classList.add('hidden');
  }
} 
// loadPhone();