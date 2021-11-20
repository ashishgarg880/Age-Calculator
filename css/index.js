function calc(){
    var current_date  = document.getElementById('start_day').value;
    var current_month  = document.getElementById('start_month').value;
    var current_year  = document.getElementById('start_year').value;

    var date_birth = document.getElementById('end_day').value;
    var month_birth = document.getElementById('end_month').value;
    var year_birth = document.getElementById('end_year').value;

    var result_div = document.getElementsByTagName('textarea')[0];
    var div_result1 =  date_birth - current_date;
    var div_result2 =  month_birth - current_month;
    if(current_year<year_birth)
    {
            var div_result3 =  year_birth - current_year;
    }
    else{
        var div_result3 = "year is max";
    }

    var div_result = div_result1+"Days"+div_result2+" Month"+div_result3+"Year";
    
    var span = document.createElement('span');
    
    span.innerHTML =  div_result;
    span.className="header-h2";
    result_div.appendChild(span);
    console.log(span);
    console.log(div_result1);
    console.log(div_result2);
    console.log(div_result3);
}
