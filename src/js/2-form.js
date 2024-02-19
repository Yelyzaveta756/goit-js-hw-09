const form = document.querySelector('.feedback-form')

console.log(form)

form.addEventListener("input", (event) => {
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA"){
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    }
    // console.log(formData)
        localStorage.setItem('feedback-form-state', JSON.stringify(formData))
    }
})

const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        form.elements.email.value = parsedData.email;
        form.elements.message.value = parsedData.message;
    }



form.addEventListener("submit", evt => {
    evt.preventDefault();
    if (form.elements.email.value.trim() !== '' && form.elements.message.value.trim() !== '') {
        console.log({
            email: form.elements.email.value.trim(),
            message: form.elements.message.value.trim()
        });
      localStorage.removeItem('feedback-form-state')
    form.reset();
    }
  });
