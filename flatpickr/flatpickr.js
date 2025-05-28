$(document).ready(function() {
    const $date = $('#date');

    $date.flatpickr({
        defaultDate : 'today',
        dateFormat  : 'Y-m-d'
    });
});