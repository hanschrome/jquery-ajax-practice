/**
 * @todo to add functions to make works the front
 */
//Load data function
const loadData = () => {
    //Import data from user.json
    $.get('api/user.json', function (data) {
        //Add name to html
        $('#user-name').html(data.name);
        //Add last name to html
        $('#user-last-name').html(data.lastName);
        //Add phones to html
        $.each(data.phones, function(index, value){
            $('#user-phones').append('<li>'+value+'</li>');
        });
        //Add homes to html
        $.each(data.homes, function (index, value){
            $('#user-homes').append('<li>'+value.name+': '+value.address+'</li>');
        });
        //Add age to html
        $('#user-age').html(data.personalData.age);
        //Add gender to html
        $('#user-gender').html(data.personalData.gender);
    });
};

//Initial function
const initialize = () => {
    //Button to start to load the data
    $('#button').click(function(){
        loadData();
    });
    console.log('init');
};

//Calling the initial function so it will start the program
$( document ).ready(function() {
    initialize();
});






