<main class="container">
  <button id="open" class="btn">Open Dialog</button>
  
  <dialog id="dialog">
    <h2>Alert </h2>
    <p> You may close this modal </p>
    <form method="dialog">
      <button class="button"> OK</button>
    </form>
  </dialog>
</main>
<div class="instructions">

## Dialog Design

Practice implementing and styling a modal using the `<dialog>` tag.
 
1. Click the 'Open Dialog' button to show the modal.
1. Use CSS to change the `width` and `border` of the modal. **Hint:** The `dialog` selector can be used. 
1. Add an `<h2>` and `<p>` to the modal. 
1. Use CSS and the `::backdrop` pseudo-element to add a backdrop behind the modal.
1. Add a `<form>` with a `method` of `dialog` to the dialog. Within the `<form>` add a `<button>`. This will allow the user to close the modal.
1. Add additional style to the modal and button. 