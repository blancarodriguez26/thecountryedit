// COUNTRY LIVING CARDS

let container = document.querySelector("#country-content");

fetch("country.json")

    .then(response => response.json())

    .then(country => {

        for (let item of country) {

            container.innerHTML += `

                <div class="col-md-4">

                    <div class="card">

                        <img src="${item.image}" class="card-img-top" alt="${item.title}">

                        <div class="card-body">

                            <h3 class="card-title">${item.title}</h3>

                            <p class="card-text">${item.description}</p>

                            <a href="${item.destination}" class="btn btn-outline-dark">
                                Discover more
                            </a>

                        </div>

                    </div>

                </div>

            `;

        }

    });


// FORM VALIDATION

(() => {

    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {

        form.addEventListener('submit', event => {

            if (!form.checkValidity()) {

                event.preventDefault()

                event.stopPropagation()

            }

            form.classList.add('was-validated')

        }, false)

    })

})()