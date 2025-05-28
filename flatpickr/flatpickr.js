$(document).ready(function() {
    const $date       = $('#date');
    let highlightDate = ['2025-05-05', '2025-05-27', '2025-05-28'];

    $date.flatpickr({
      dateFormat  : 'Y-m-d',
      defaultDate : 'today',
      onDayCreate : function(dObj, dStr, fp, dElem) {
        const dateStr = dElem.dateObj.toISOString().slice(0, 10);

        if (highlightDate.includes(dateStr)) {
          dElem.classList.add("highlight-day");
        }
      }
    });
});