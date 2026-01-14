import logo from '../assets/img/logo.png'

function RegisterPage() 
{
    //#region JSCode
    
    //#endregion


    return (
        <>
            <div class="form-panel">
                <h1 class="h3 fw-bold mb-4">Complete your purchase</h1>
                
                <div class="step-progress-bar">
                    <div class="progress-indicator" style="width: 0%;"></div>
                </div>

                <div class="step-header">
                    <div class="step-item active" id="step1-header">
                        <div class="step-number">1</div>
                        <div class="step-title d-none d-md-block">Shipping</div>
                    </div>
                    <div class="step-item" id="step2-header">
                        <div class="step-number">2</div>
                        <div class="step-title d-none d-md-block">Payment</div>
                    </div>
                    <div class="step-item" id="step3-header">
                        <div class="step-number">3</div>
                        <div class="step-title d-none d-md-block">Review</div>
                    </div>
                </div>

                <form id="checkout-form">
                    <div class="form-step active" id="step1">
                        <h2 class="h5 fw-bold mb-4">Shipping Information</h2>
                        <div class="mb-3">
                            <label for="fullName" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="fullName" name="fullName"/>
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control" id="address" name="address"/>
                        </div>
                        <div class="row g-3">
                            <div class="col-md-7">
                                <label for="city" class="form-label">City</label>
                                <input type="text" class="form-control" id="city" name="city"/>
                            </div>
                            <div class="col-md-5">
                                <label for="zipCode" class="form-label">Zip Code</label>
                                <input type="text" class="form-control" id="zipCode" name="zipCode"/>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mt-4">
                            <button type="button" class="next-btn btn btn-primary">Next</button>
                        </div>
                    </div>


                    <div class="form-step" id="step2">
                        <h2 class="h5 fw-bold mb-4">Payment Details</h2>
                        <div class="mb-3">
                            <label for="cardNumber" class="form-label">Card number</label>
                            <input type="text" class="form-control" id="cardNumber" name="cardNumber" placeholder="xxxx xxxx xxxx xxxx"/>
                        </div>
                        <div class="mb-3">
                            <label for="cardName" class="form-label">Card name</label>
                            <input type="text" class="form-control" id="cardName" name="cardName"/>
                        </div>
                        <div class="row g-3">
                            <div class="col-6">
                                <label for="expiry" class="form-label">Expiry date</label>
                                <input type="text" class="form-control" id="expiry" name="expiry" placeholder="MM/YY"/>
                            </div>
                            <div class="col-6">
                                <label for="cvv" class="form-label">CVV</label>
                                <input type="text" class="form-control" id="cvv" name="cvv" placeholder="xxx"/>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <button type="button" class="prev-btn btn btn-light">Previous</button>
                            <button type="button" class="next-btn btn btn-primary">Next</button>
                        </div>
                    </div>

                    <div id="notification" class="notification-message"></div>
                </form>
            </div>
        </>
    );
}

export default RegisterPage;
