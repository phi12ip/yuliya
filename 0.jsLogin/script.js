let users = [
    {
        username: 'philip',
        password: 'password1'
    },
    {
        username: 'yuliya',
        password: 'password2'
    }
];

function submitFunction(e) {
    // Prevent the default submit method of the <form> element
    e.preventDefault();
    let found = false;
    let formUser = e.target.user.value.toLowerCase();
    let formPass = e.target.pass.value;
    // Search through users array for username matching the value entered into the input field
    for (let i=0; i<users.length;i++) {
        if ( users[i].username.toLowerCase() == formUser && users[i].password == formPass ) {
            found = users[i].username
        }
    }
    if (found == false) { alert('Username or password is incorrect') }
    else {
        let milliseconds = 3000;
        setTimeout(() => window.location.href = 'welcome.html', milliseconds)
        console.log('Found');
    }
}