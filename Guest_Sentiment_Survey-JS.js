if (!!window.performance && window.performance.navigation.type === 2) {
  $(window).scrollTop(0);
  window.location.reload();
}

$(document).ready(function () {
  $("textarea").keypress(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });

  $(window).scrollTop(0);

  $(".radiobtn").checkboxradio({
    icon: false,
  });

  $(".restartBtn").click(function () {
    window.location.href =
      "http://valueretail.rsys5.net/pub/sf/FormLink?_ri_=X0Gzc2X%3DAQpglLjHJlYQGizgjATOhKzfKi3OnaAbmH7cA15wd9qgzcOvf3HpFbkF0p84thVXMtX%3DAQpglLjHJlYQGulOPzapradEduAU13LuzaXaqMOzfpeDLpzc36zcukLFWL3tXJ35&_ei_=EpsEa1flnFxhB-0woJfgJm4.&_di_=f683ohhj3tos9slvdhd18dl3sjv2q6dgnatqqvk10pk6v5be63qg";
    return false;
  });

  $(".backBtn").click(function () {
    event.preventDefault();
    history.back(1);
  });

  $(".closeBtn").click(function () {
    window.close();
  });

  var limit = 3;
  $("input.limited3-checkbox").on("change", function (evt) {
    if ($(this).siblings(":checked").length >= limit) {
      this.checked = false;
    }
  });

  // slider
  $.extend(jQuery.validator.messages, {
    required: "-$lookup(REQUIRED_TEXT)$",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format(
      "Please enter no more than {0} characters."
    ),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format(
      "Please enter a value between {0} and {1} characters long."
    ),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format(
      "Please enter a value less than or equal to {0}."
    ),
    min: jQuery.validator.format(
      "Please enter a value greater than or equal to {0}."
    ),
  });

  jQuery.validator.addMethod(
    "specialChars",
    function (value, element) {
      var regex = new RegExp(/^[a-z\d\-_\s]+$/i);
      var key = value;

      if (!regex.test(key)) {
        return false;
      }
      return true;
    },
    " - Por favor, introudzca caracteres alfanuméricos"
  );

  $("form").validate({
	rules: {
		"QUESTION_TIME": { 
                required: true, 
                minlength: 1 
            },
		"QUESTION_MOST_RECENTLY_OTHER":{
			required:{
				depends:function(){
				  if ($('#QUESTION_MOST_RECENTLY').val()==='9'){
					return true;  
				  }else{
					return false;
				  }
				}
			}
		},
		"QUESTION_DECIDE_TO_VISIT_OTHER":{
			required:{
				depends:function(){
				  if ($('#QUESTION_DECIDE_TO_VISIT').val()==='5'){
					return true;  
				  }else{
					return false;
				  }
				}
			}
		}			
    }, 
    messages: { 
        "QUESTION_TIME": "-$lookup(REQUIRED_TEXT)$",
		"QUESTION_MOST_RECENTLY_OTHER": "-$lookup(REQUIRED_TEXT)$",
		"QUESTION_DECIDE_TO_VISIT_OTHER": "-$lookup(REQUIRED_TEXT)$" 
    },
    submitHandler: function (form) {
      // do other things for a valid form
      console.log("successful");

      // disable button
      $(".submitBtn").prop("disabled", true);

      $(".submitBtn").html(
        '   <i class="fa fa-spinner fa-spin" style="font-size:24px"></i>'
      );
      form.submit();
    },
  });

  $("form :input").change(function () {
    var fields = $(this).closest("form").serialize();
    serialize_to_console(fields);
  });

  /*
  SERIALIZE TO CONSOLE
  Transforms string to array and show each param in console if not empty */
  var serialize_to_console = function (serialized) {
    var splited_serialized = serialized.split("&");

    $.each(splited_serialized, function (index, key) {
      var input = key.substr(0, key.indexOf("="));
      var value = key.substr(key.indexOf("=") + 1);

      if (value !== "") console.log("[" + input + "] = '" + value + "'");
    });
  };

  let village = "$lookup(VILLAGE)$";
  // let village = "MV";

  inputHiddenField("#", "SURVEY_TIME", getDateTime().currentHours);
  inputHiddenField("#", "SURVEY_DATE", getDateTime().currentFullUkDate);
  inputHiddenField("#", "SURVEY_DATE_TIME", getDateTime().currentDate);

  $("select#QUESTION_COUNTY_OF_RESIDENCE").change(function () {
    let selected = $(this).val();

    switch (village + "-" + selected) {
      case "FV" + "-" + "86":
        buildDropDown(
          "#",
          FVRegionDropDown,
          "QUESTION_COUNTY_OF_RESIDENCE",
          "#QUESTION_REGION_OF_RESIDENCE"
        );
        break;
      case "KV" + "-" + "84":
        buildDropDown(
          "#",
          KVRegionDropDown,
          "QUESTION_COUNTY_OF_RESIDENCE",
          "#QUESTION_REGION_OF_RESIDENCE"
        );
        break;
      case "MV" + "-" + "17":
        buildDropDown(
          "#",
          MVRegionDropDown,
          "QUESTION_COUNTY_OF_RESIDENCE",
          "#QUESTION_REGION_OF_RESIDENCE"
        );
        break;
      case "IV" + "-" + "66":
        buildDropDown(
          "#",
          IVRegionDropDown,
          "QUESTION_COUNTY_OF_RESIDENCE",
          "#QUESTION_REGION_OF_RESIDENCE"
        );
        break;
      case "WV" + "-" + "66":
        buildDropDown(
          "#",
          WVRegionDropDown,
          "QUESTION_COUNTY_OF_RESIDENCE",
          "#QUESTION_REGION_OF_RESIDENCE"
        );
        break;
      case "BV" + "-" + "190":
        buildTextInput(
          "#",
          ENTextInput,
          "QUESTION_COUNTY_OF_RESIDENCE",
          "#QUESTION_REGION_OF_RESIDENCE"
        );
        break;
      default:
        $("fieldset#QUESTION_REGION_OF_RESIDENCE").remove();
    }
  });

  $("input[name='QUESTION_QUEUES']").change(function () {
    let selected = $(this).val();

    switch (selected) {
      case "1":
        $("#AREA_VISIT_ALL").show();
        $("#AREA_QUEUE_SATISFACTION").show();
        break;
      default:
        $("#AREA_VISIT_ALL").hide();
        $("#AREA_QUEUE_SATISFACTION").hide();
    }
  });

  $("input[name='QUESTION_FIND_ALL']").change(function () {
    let selected = $(this).val();

    switch (selected) {
      case "0":
        $("#QUESTION_MISSING").show();
        break;
      default:
        $("#QUESTION_MISSING").hide();
    }
  });

  $("input[name='QUESTION_FV_2']").change(function () {
    let selected = $(this).val();

    switch (selected) {
      case "1":
        $("#QUESTION_FV_3").show();
        break;
      default:
        $("#QUESTION_FV_3").hide();
    }
  });

  $("select#QUESTION_MOST_RECENTLY").change(function () {
    let $option = $(this).find("option:selected");
    let QUESTION_MOST_RECENTLY_OTHER_DIV = $(
      "#QUESTION_MOST_RECENTLY_OTHER_DIV"
    );

    if ($option.text() === "Other") {
      QUESTION_MOST_RECENTLY_OTHER_DIV.removeClass("hidden");
    } else {
      QUESTION_MOST_RECENTLY_OTHER_DIV.addClass("hidden");
    }
  });

  $("select#QUESTION_DECIDE_TO_VISIT").change(function () {
    let $option = $(this).find("option:selected");
    let QUESTION_DECIDE_TO_VISIT_OTHER_DIV = $(
      "#QUESTION_DECIDE_TO_VISIT_OTHER_DIV"
    );

    if ($option.text() === "Other") {
      QUESTION_DECIDE_TO_VISIT_OTHER_DIV.removeClass("hidden");
    } else {
      QUESTION_DECIDE_TO_VISIT_OTHER_DIV.addClass("hidden");
    }
  });
});

function buildTextInput(selector, html, afterElementx, removeElement) {
  // deletes selector and replaces with html
  $(removeElement).closest("fieldset").remove();
  $(selector + afterElementx)
    .closest("fieldset")
    .after(html);
}

function buildDropDown(selector, html, afterElementx, removeElement) {
  // deletes selector and replaces with html
  $(removeElement).closest("fieldset").remove();
  $(selector + afterElementx)
    .closest("fieldset")
    .after(html);
}

function inputHiddenField(selector, identifier, value) {
  $(selector + identifier).val(value);
}

var getDateTime = function () {
  var date = new Date();

  var getDateTimeObj = {
    currentDate: new Date(),
    currentDay: date.getDate(),
    currentMonth: date.getMonth() + 1,
    currentYear: date.getFullYear(),
    currentMinutes: date.getMinutes(),
    currentHours: date.getHours(),
    currentSeconds: date.getSeconds(),
    currentFullUkDate:
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
    currentFullTime:
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
  };

  return getDateTimeObj;
};
