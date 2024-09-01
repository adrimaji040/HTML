<main class="container">
    <form id="form" class="my-3 bg-white border border-1 p-5 shadow-sm">
      <h2 class="mb-3">New Contact</h2>
      <div class="form-group mb-3">
        <label class="form-label" for="name">Name</label>
        <input id="name" name="name" type="text" class="form-control">
      </div>
      <div class="form-group mb-3">
        <label class="form-label" for="email">Email</label>
        <input id="email" name="email" type="email" class="form-control">
      </div>
      <div class="form-group">
        <label class="form-label">Type</label>
        <select id="type" class="form-select mb-3">
          <option value="Personal">Personal</option>
          <option value="Professional">Professional</option>
        </select>
      </div>
      <div class="form-group mb-3">
         <input class="form-check-input me-2" type="checkbox" value="" id="favorite">
         <label class="form-check-label" for="favorite">
          Favorite?
         </label>
      </div>
      <button class="btn btn-primary">Add Contact</button>
    </form>
    <h2 class="mb-2">Contacts</h2>
    <table class="table border border-1">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody id="contacts"></tbody>
    </table>
</main>
<div class="instructions">

## Contacts
Practice implementing form handling by adding the ability to add new contacts using the New Contact form. **NOTE:** Invoking `buildTable()` function will insert all contacts in the `contacts` in the Contacts Table. 
 
1. Add an event listener to the form that will prevent a page refresh when the form has been submitted. 
1. After the form has been submitted, add a new contact object the `contacts` array. The new object should include the properties `name`, `email`, `type`, and `favorite`. 
1. After the form has been submitted, display the new contact in the Contacts table using the `buildTable()` function.
1. After the form has been submitted, clear the form data from the form. 
</div>