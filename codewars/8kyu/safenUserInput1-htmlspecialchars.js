/*Your mission is to implement a function that converts the following potentially harmful characters:

    < --> &lt;
    > --> &gt;
    " --> &quot;
    & --> &amp;

Good luck :D*/

function htmlspecialchars(formData) {
  return formData.replaceAll('&', '&amp;')
                .replaceAll('<', "&lt;")
                .replaceAll('>', "&gt;")
                .replaceAll('"', "&quot;")
                
}

htmlspecialchars("<h2>Hello World</h2>") // "&lt;h2&gt;Hello World&lt;/h2&gt;"