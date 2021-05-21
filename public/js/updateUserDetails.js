const resetPassword = async (data) => {

    try{
        const res = await axios({
            method:'PATCH',
            url:'/api/v1/users/updateMe',
            data
        })
    
        if(res.data.status === 'success'){
           
        }
    }
    catch(err){
        
    }
}


document.querySelector('.loginForm').addEventListener('submit',( e )=> {
    e.preventDefault();
    const resetToken = document.getElementById('resetToken').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('confirmPassword').value;

    resetPassword(resetToken, password, passwordConfirm);
})