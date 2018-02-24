$(function () {
  $(window).off('scroll');
  $(window).off('resize');

  var header = $('.header');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() == 0)
        header.css({"background": "transparent" });
    else
        header.css({ 'height': "70px", "marginTop": "0px", "background": "rgba(29, 0, 44, 0.70)" });
  });

  var endDate = "March  01, 2018";
  $('.countdown.simple').countdown({ date: endDate });
  $('.countdown.styled').countdown({
    date: endDate,
    render: function (data) {
      $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>Jours</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>heurs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>minutes</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
    }
  });
});
