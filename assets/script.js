const steps = document.querySelectorAll('.stepper-item');
        const formSteps = document.querySelectorAll('.form-step');
        let currentStep = 1;

        function nextStep() {
            if (!validateStep(currentStep)) return;
            currentStep++;
            if(currentStep == 4) {
                const payBtn = document.querySelectorAll('.pay-btn')[0];
                payBtn.classList.remove('d-none');
            }
            if(currentStep == 1) {
                document.getElementById('checkout-modal-footer').innerHTML = `<button type="button" class="btn btn-primary" onclick="nextStep()">Next</button>`;
            } else if(currentStep > 1 && currentStep < 4) {
                document.getElementById('checkout-modal-footer').innerHTML = `<button type="button" class="btn btn-secondary" onclick="prevStep()">Back</button><button type="button" class="btn btn-primary" onclick="nextStep()">Next</button>`;
            } else {
                document.getElementById('checkout-modal-footer').innerHTML = `<button type="button" class="btn btn-secondary" onclick="prevStep()">Back</button>`;
            }
            updateFormSteps();
            updateStepper();
        }

        function prevStep() {
            currentStep--;
            if(currentStep == 1) {
                document.getElementById('checkout-modal-footer').innerHTML = `<button type="button" class="btn btn-primary" onclick="nextStep()">Next</button>`;
            } else if(currentStep > 1 && currentStep < 4) {
                document.getElementById('checkout-modal-footer').innerHTML = `<button type="button" class="btn btn-secondary" onclick="prevStep()">Back</button><button type="button" class="btn btn-primary" onclick="nextStep()">Next</button>`;
            } else {
                document.getElementById('checkout-modal-footer').innerHTML = `<button type="button" class="btn btn-secondary" onclick="prevStep()">Back</button>`;
            }
            updateFormSteps();
            updateStepper();
        }

        function updateFormSteps() {
            formSteps.forEach((formStep, index) => {
                formStep.classList.toggle('active', index + 1 === currentStep);
            });
        }

        function updateStepper() {
            steps.forEach((step, index) => {
                step.classList.toggle('active', index + 1 <= currentStep);
            });
        }

        function validateStep(step) {
            const currentFormStep = document.querySelector(`.form-step[data-step="${step}"]`);
            const inputs = currentFormStep.querySelectorAll('input');
            const selects = currentFormStep.querySelectorAll('select');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.classList.add('is-invalid');
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            selects.forEach(select => {
                if (!select.checkValidity()) {
                    select.classList.add('is-invalid');
                    isValid = false;
                } else {
                    select.classList.remove('is-invalid');
                }
            });

            return isValid;
        }

        document.getElementById('stepperForm').addEventListener('submit', function(event) {
            if (!validateStep(currentStep)) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Form can be submitted
                alert('Form submitted successfully!');
            }
        });
        
        function pay() {
            alert('Form Submitted successfully!');
        }