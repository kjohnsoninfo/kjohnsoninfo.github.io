window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const functionApi = 'https://websitedata.azurewebsites.net/api/updateCounter?code=BWO1tbG8YuQid5e6C77QCiA6W9GXdbMa4fyslutOeHoYAzFuwR19bg=='; 

const getVisitCount = () => {
    let count = 10;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response);
        count = response.number;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}