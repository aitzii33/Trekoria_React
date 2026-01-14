import '../assets/CSS/Payment.css'
import { useNavigate } from "react-router-dom"
import { useEffect, useRef } from 'react'

function RegisterPage() 
{
    const formRef = useRef(null);
    const navigate = useNavigate();

    const navigateHome = () => 
    {
        navigate('/Home');
    };

    //#region JSCode
    useEffect(() => 
    {
        const form = formRef.current;
        if (!form) return;

        const steps = form.querySelectorAll('.form-step');
        const headers = document.querySelectorAll('.step-item');
        const progressBar = document.querySelector('.progress-indicator');
        const notification = document.getElementById('notification');

        const summaryShippingInfo = document.getElementById('summary-shipping-info');
        const summaryPaymentInfo = document.getElementById('summary-payment-info');

        let currentStep = 0;

        function showStep(stepIndex) 
        {
            steps.forEach((step, index) =>
            {
                step.classList.toggle('active', index === stepIndex);
            });

            headers.forEach((header, index) => 
            {
                header.classList.remove('active', 'completed');
                if (index < stepIndex) header.classList.add('completed');
                if (index === stepIndex) header.classList.add('active');
            });

            const progress = (stepIndex / (steps.length - 1)) * 100;
            progressBar.style.width = `${progress}%`;
        }

        function showNotification(message) 
        {
            notification.textContent = message;
            notification.classList.add('show');

            setTimeout(() => 
            {
                notification.classList.remove('show');
            }, 3000);
        }

        function updateReviewDetails() 
        {
            const fullName = document.getElementById('fullName').value;
            const address = document.getElementById('address').value;
            const city = document.getElementById('city').value;
            const zipCode = document.getElementById('zipCode').value;
            const cardNumber = document.getElementById('cardNumber').value;

            const reviewShipping = document.getElementById('review-shipping');
            reviewShipping.innerHTML = `${fullName}<br> ${address}<br> ${city}, ${zipCode}`;

            if (summaryShippingInfo) 
            {
                summaryShippingInfo.textContent = `${fullName}, ${address}, ${city}, ${zipCode}`;
            }

            const reviewPayment = document.getElementById('review-payment');
            const lastFourDigits = cardNumber.slice(-4);
            reviewPayment.textContent = `Card ending in **** ${lastFourDigits}`;

            if (summaryPaymentInfo) 
            {
                summaryPaymentInfo.textContent = `Card ending in **** ${lastFourDigits}`;
            }
        }

        showStep(0);

        const handleClick = (e) => 
        {
            if (e.target.matches('.next-btn')) 
            {
                if (currentStep === 0) 
                {
                    const fullName = document.getElementById('fullName').value;
                    const address = document.getElementById('address').value;

                    if (!fullName || !address) 
                    {
                    showNotification('Please fill out all shipping fields.');
                    return;
                    }
                }

                if (currentStep < steps.length - 1) 
                {
                    currentStep++;
                    if (currentStep === 2) 
                    {
                        updateReviewDetails();
                    }
                    showStep(currentStep);
                }
            } 
            else if (e.target.matches('.prev-btn')) 
            {
                if (currentStep > 0) 
                {
                    currentStep--;
                    showStep(currentStep);
                }
            }
        };

        const handleSubmit = (e) => 
        {
            e.preventDefault();
            showNotification('Purchase Complete!');
            setTimeout(() => 
            {
                location.reload();
            }, 2000);
        };

        form.addEventListener('click', handleClick);
        form.addEventListener('submit', handleSubmit);

        return () => 
        {
            form.removeEventListener('click', handleClick);
            form.removeEventListener('submit', handleSubmit);
        };
        }, []);

    //#endregion


    return (
        <>
            <div className="checkout-page-wrapper">
                <div className="checkout-container">
                    <div className="form-panel">
                        <h1 className="h3 fw-bold mb-4">Complete your purchase</h1>
                        
                        <div className="step-progress-bar">
                            <div className="progress-indicator"></div>
                        </div>

                        <div className="step-header">
                            <div className="step-item active" id="step1-header">
                                <div className="step-number">1</div>
                                <div className="step-title d-none d-md-block">Shipping</div>
                            </div>
                            <div className="step-item" id="step2-header">
                                <div className="step-number">2</div>
                                <div className="step-title d-none d-md-block">Payment</div>
                            </div>
                            <div className="step-item" id="step3-header">
                                <div className="step-number">3</div>
                                <div className="step-title d-none d-md-block">Review</div>
                            </div>
                        </div>

                        <form id="checkout-form" ref={formRef}>
                            <div className="form-step active" id="step1">
                                <h2 className="h5 fw-bold mb-4">Shipping Information</h2>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="fullName" name="fullName"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dni" className="form-label">DNI</label>
                                    <input type="text" className="form-control" id="dni" name="dni"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" name="address"/>
                                </div>
                                <div className="row g-3">
                                    <div className="col-md-7">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <input type="text" className="form-control" id="city" name="city"/>
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="zipCode" className="form-label">Zip Code</label>
                                        <input type="text" className="form-control" id="zipCode" name="zipCode"/>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mt-4">
                                    <button type="button" className="next-btn btn btn-light">Next</button>
                                </div>
                            </div>

                            <div className="form-step" id="step2">
                                <h2 className="h5 fw-bold mb-4">Payment Details</h2>
                                <div className="mb-3">
                                    <label htmlFor="cardNumber" className="form-label">Card number</label>
                                    <input type="text" className="form-control" id="cardNumber" name="cardNumber" placeholder="xxxx xxxx xxxx xxxx"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cardName" className="form-label">Card name</label>
                                    <input type="text" className="form-control" id="cardName" name="cardName"/>
                                </div>
                                <div className="row g-3">
                                    <div className="col-6">
                                        <label htmlFor="expiry" className="form-label">Expiry date</label>
                                        <input type="text" className="form-control" id="expiry" name="expiry" placeholder="MM/YY"/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="cvv" className="form-label">CVV</label>
                                        <input type="text" className="form-control" id="cvv" name="cvv" placeholder="xxx"/>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <button type="button" className="prev-btn btn btn-light">Previous</button>
                                    <button type="button" className="next-btn btn btn-light">Next</button>
                                </div>
                            </div>

                            <div className="form-step" id="step3">
                                <h2 className="h5 fw-bold mb-4">Order Review</h2>
                                <div id="review-shipping"></div>
                                <div id="review-payment"></div>
                                <div className="d-flex justify-content-between mt-4">
                                    <button type="button" className="prev-btn btn btn-light">Previous</button>
                                    <button type="submit" className="btn btn-success" onClick={navigateHome}>Complete Purchase</button>
                                </div>
                            </div>

                            <div id="notification" className="notification-message"></div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}

export default RegisterPage;
