 function handleErrors(response) {
     if (!response.ok) {
         throw response;
     }
     return response;
 }
 function showError(err) {
     if (err.status === 403) {
         try {
             let msg = err.url + ": ";
             return (
                 err.json().then(errorMessage => {
                     console.log(msg + errorMessage.message);
                 })
             );
         } catch (error) {
             return (
                 console.log(error + ": \n" + err)
             );
         }
     } else {
         try {
             return (
                 err.json().then(errorMessage => {
                     console.log(errorMessage.message);
                 })
             );
         } catch (error) {
             return (
                 console.log(error + ": \n" + err)
             );
         }
     }
 }
 export {
     handleErrors,
     showError
 };