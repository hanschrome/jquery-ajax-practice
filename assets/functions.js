/**
 * @todo to add functions to make works the front
 */
const loadData = () => {
    $.get('api/user.json', function (data) {
        $('#user-name').html(data.name);
        $('#user-last-name').html(data.lastName);
        $.each(data.phones, function(index, value){
            $('#user-phones').append('<li>'+value+'</li>');
        });
        $.each(data.homes, function (index, value){
            $('#user-homes').append('<li>'+value.name+': '+value.address+'</li>');
        });
        $('#user-age').html(data.personalData.age);
        $('#user-gender').html(data.personalData.gender);
    });
};


const initialize = () => {
    $('#button').click(function(){
        loadData();
    });

    console.log('init');
};

$( document ).ready(function() {
    initialize();
});






