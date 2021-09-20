import { LoginService } from '../services/login-service' ;



class HelpersService {

     static timeSinceLastSignin = () => {

       const last = new Date(LoginService.lastSignIn()).getTime() ;
       const now = Date.now() ;
       const msInAsecond = 1000 ;
       const secsInAminute = 60 ;
       const minsInAnHour = 60 ;
       const hoursInAday = 24 ;

       let diff = (now - last) / msInAsecond ;
       diff = Math.abs(Math.floor(diff)) ; 

       const days = Math.floor(diff / (hoursInAday * minsInAnHour * secsInAminute)) ;
       let leftSec = diff - days * hoursInAday * minsInAnHour * secsInAminute ;

       const hours = Math.floor(leftSec / (minsInAnHour * secsInAminute)) ;
       leftSec = leftSec - hours * minsInAnHour * secsInAminute ;

       const mins = Math.floor(leftSec / (secsInAminute)) ;
       leftSec = leftSec - mins * secsInAminute ;

       return {
           days: this.formatTimeDigits(days),
           hours: this.formatTimeDigits(hours),
           mins: this.formatTimeDigits(mins),
           secs: this.formatTimeDigits(leftSec)
       }

    }
    
    static formatTimeDigits (count){
        return count >= 10 ? count : `0${count}` ;
    }
}
export { HelpersService } ;
