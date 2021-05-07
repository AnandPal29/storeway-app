const resetPassword = async (resetToken, password, passwordConfirm) => {
    try{
        const res = await axios({
            method:'PATCH',
            url:'/api/v1/users/resetPassword/'+resetToken,
            data: {
                password,
                passwordConfirm
            }
        })
    
        if(res.data.status === 'success'){
            showAlert('success','Password Reset SuccessFully')
            window.setTimeout(function(){
                window.location.href='/'
            },2000)
        }
    }
    catch(err){
        showAlert('error', err.response.data.message);
    }
}


document.querySelector('.loginForm').addEventListener('submit',( e )=> {
    e.preventDefault();
    const resetToken = document.getElementById('resetToken').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('confirmPassword').value;

    resetPassword(resetToken, password, passwordConfirm);
})