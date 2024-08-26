// app.js

function handleCredentialResponse(response) {
    // Decode JWT response. Here you can use a library like jwt-decode to decode the response
    const responsePayload = JSON.parse(atob(response.credential.split('.')[1]));

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);

    // You can now use the profile info to authenticate the user in your application
    // e.g., send the token to your backend server for verification and session management
}

// Initialize Google Sign-In
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "YOUR_CLIENT_ID.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.querySelector('.g_id_signin'),
        {
            theme: "outline",
            size: "large",
            type: "standard"
        }
    );

    google.accounts.id.prompt(); // also display the One Tap dialog
};
