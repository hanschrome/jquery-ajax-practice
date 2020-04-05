/**
 * @todo to add functions to make works the front
 */
const loadData = () => {
    $.get('api/user.json', function (data) {
        $('#user-name').html(data.name);
        $('#user-last-name').html(data.lastName);
        $('#user-phones').html('<li>'+data.phones[0]+'</li><li>'+data.phones[1]+'</li>');
    });
};

const initialize = () => {
    loadData();
    console.log('init')
};

initialize();





