// blinkit --> payment -> pack -> delivery -> OTP -> open box

function makePayment(packOrder) {
    console.log("Payment is getting started...");

    setTimeout(function () {
        console.log("Payment is completed");
        packOrder(deliverOrder);
    }, 3000);
}

function packOrder(deliverOrder) {
    console.log("Order is getting packed...");

    setTimeout(function () {
        console.log("Order is packed");
        deliverOrder(openBox);
    }, 3000);
}

function deliverOrder(openBox) {
    console.log("Order is out for delivery...");

    setTimeout(function () {
        console.log("Delivery boy reached your location.");
        console.log("Sending OTP to your registered mobile...");
        openBox();
    }, 3000);
}

function openBox() {

    setTimeout(function () {

        let generatedOTP = "1234";     // OTP sent to user
        console.log("OTP Sent: " + generatedOTP);

        // User enters OTP
        let enteredOTP = "1234";       // Change to "1111" to test failure

        console.log("User entered OTP: " + enteredOTP);

        if (enteredOTP === generatedOTP) {
            console.log("✅ OTP Verified");
            console.log("📦 Package Opened Successfully!");
        } else {
            console.log("❌ Invalid OTP");
            console.log("Package cannot be opened.");
        }

    }, 3000);
}

makePayment(packOrder);