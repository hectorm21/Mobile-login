import { LoginService } from '../services/login-service';



class HelpersService {

     static timeSinceLastSignin = () => {

       let last = LoginService.lastSignIn();
       let now = Date.now();

       let diff = (now - last) / 1000;
       diff = Math.abs(Math.floor(diff));

       let days = Math.floor(diff/(24*60*60));
       let leftSec = diff - days * 24*60*60;

       let hours = Math.floor(leftSec/(60*60));
       leftSec = leftSec - hours * 60*60;

       let mins = Math.floor(leftSec/(60));
       leftSec = leftSec - mins * 60;

       return {
           days: days > 10 ?  days :  days = "0"+days,
           hours: hours > 10 ?  hours :  hours = "0"+hours,
           mins: mins > 10 ?  mins :  mins = "0"+mins,
           secs: leftSec > 10 ?  leftSec :  leftSec = "0"+leftSec
       }
    }
}
export { HelpersService };

/*const isEmail = function(emailAdress) {
    const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;
    if (!regex.test(emailAdress)) {
      return new Error("introduzca una dirección de correo válida");
    }
  }

  const strongPassword = function(password) {
if(password.length < 8){
     return new Error("su contraseña debe tener al menos ocho caracteres") 
    }
  }

LoginForm.propTypes = {
email: isEmail,
pasword: strongPassword
}*/