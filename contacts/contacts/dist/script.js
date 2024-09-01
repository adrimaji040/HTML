const contacts = [
  { 
    name: 'Mark', 
    email: 'mark@email.com', 
    type: 'Personal', 
    favorite: true 
  },
  { 
    name: 'Jane', 
    email: 'jane@email.com', 
    type: 'Professional', 
    favorite: false 
  }
]

const $form = document.getElementById('form')


  $form.addEventListener('submit', (event) => {
  event.preventDefault();
    
    //processing here
      const $name = document.getElementById('name').value
      const $email = document.getElementById('email').value
      const $type =  document.getElementById('type').value
      const $favorite = document.getElementById('favorite').checked

     
      const newContact = {
          name: $name,
          email: $email,
          type: $type,
          favorite: $favorite
      }  
      contacts.push(newContact) 

		buildTable()
		$form.reset()
  });