const $form = document.querySelector('form')
const $input = document.querySelector('input')
const $img = document.querySelector('img')

if ($form) {
  $form.addEventListener('submit', function (e) {
    e.preventDefault()
    
    if ($img && $input) {
      const $next = $img.nextElementSibling
      if ($next) {
        $next.remove()
      }
      $img.insertAdjacentHTML('afterend', `<p>${$input.value}</p>`)
      $input.value = ''
    }
  })
}