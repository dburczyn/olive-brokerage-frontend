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
                    return(msg + errorMessage.message);
                 })
             );
         } catch (error) {
             return (
                 error + ": \n" + err
             );
         }
     } else {
         try {
             return (
                 err.json().then(errorMessage => {
                     return(errorMessage.message);
                 })
             );
         } catch (error) {
             return (
                 error + ": \n" + err
             );
         }
     }
 }
 export {
     handleErrors,
     showError
 };