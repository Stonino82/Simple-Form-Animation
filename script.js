document.addEventListener('DOMContentLoaded', () => {

    function animatedForm(){
        const arrows = document.querySelectorAll('.fa-arrow-down');
        let message = document.querySelector('.message');
        
        arrows.forEach(arrow => {
            arrow.addEventListener('click', () =>{
                const input = arrow.previousElementSibling;
                const parent = arrow.parentElement;
                const nextForm = parent.nextElementSibling;
                
                if( input.type === 'text' && validateUser(input) === true){
                    nextSlide(parent, nextForm);
                } else if (input.type === 'email' &&  validateEmail(input) === true) {
                    nextSlide(parent, nextForm);
                } else if (input.type === 'password' && validatePassword(input) === true){
                    nextSlide(parent, nextForm);
                }else {
                    parent.style.animation = "shake 0.4s ease";
                }
                //get rid of animation (reset the animation, if not it will work just once)
                parent.addEventListener('animationend', () => {
                    parent.style.animation = '';
                });
            })
        });
    
        function validateUser(user){
            if(user.value.length < 6){
                //wrong
                rightWrong('rgb(189,87,87)');
            } else {
                //right
                rightWrong('rgb(87, 189, 130)');
                return true;
            }
        }

        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if( regex.test(email.value)){
                //right
                rightWrong('rgb(87, 189, 130)');
                return true;
            }else{
                //wrong
                rightWrong('rgb(189,87,87)');
            }
        }

        function validatePassword(password){
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            // should contain at least one digit
            // should contain at least one lower case
            // should contain at least one upper case
            // should contain at least 8 from the mentioned characters

            if(regex.test(password.value)){
                //right
                rightWrong('rgb(87, 189, 130)');
                return true;
            }else{
                //wrong
                rightWrong('rgb(189,87,87)');
            }
        }




        function rightWrong(color){
            document.body.style.backgroundColor = color;
        }

            function nextSlide(parent, nextForm){
                parent.classList.add('inactive');
                parent.classList.remove('active');
                nextForm.classList.add('active');
            }





    
    }
    
    animatedForm();
});
