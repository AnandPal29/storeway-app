const forgotPassword = async (email) => {
    try{
        const res = await axios({
            method:'POST',
            url:'/api/v1/users/forgotPassword',
            data: {
                email
            }
        })
    
        if(res.data.status === 'success'){
            showAlert('success','Token Sent To Mail')
            window.setTimeout(function(){
                window.location.href='/resetPassword'
            },2000)
        }
    }
    catch(err){
        showAlert('error', err.response.data.message);
    }
}



document.querySelector('.loginForm').addEventListener('submit',( e )=> {
    e.preventDefault();
    const email = document.getElementById('email').value;
    console.log(email);
    forgotPassword(email);
})