const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function calc()
{
    let calculated_date,calculated_month,calculated_year;
    var current_date  = document.getElementById('end_day').value;
    var current_month  = document.getElementById('end_month').value;
    var current_year  = document.getElementById('end_year').value;

    var date_birth = document.getElementById('start_day').value;
    var month_birth = document.getElementById('start_month').value;
    var year_birth = document.getElementById('start_year').value;

    var div_result2 =  month_birth - current_month;
    if (
        year_birth > current_year ||
        (month_birth > current_month && year_birth == current_year) ||
        (date_birth > current_date && month_birth == current_month && year_birth == current_year)
    ) {
        alert("NOT BORN YET");
        return;
    }

    leapChecker(current_year);

    if (
        year_birth > current_year ||
        (month_birth > current_month && year_birth == current_year) ||
        (date_birth > current_date && month_birth == current_month && year_birth == current_year)
    ) {
        alert("NOT BORN YET");
        return;
    }


    calculated_year = current_year - year_birth;

    if(current_month >= month_birth){
        calculated_month = current_month - month_birth;
    } else {
        calculated_year--;
        calculated_month = 12 + current_month - month_birth 
    }
    
    if(current_date >= date_birth){
        calculated_date = current_date - date_birth;
    } 
    else {
        calculated_month--;
        let days = months[current_month - 2];
        calculated_date = days + current_date - date_birth;
        if(calculated_month < 0){
            calculated_month = 11;
            calculated_year--;
        }
    }
    displayResult(calculated_date,calculated_month,calculated_year);    
}

function displayResult(bDate,bMonth,bYear){
    var result_div = document.getElementsByTagName('textarea')[0];
    result_div.innerHTML = bYear+"Year,\t"+bMonth+"Month,\t"+bDate+"Date\t"+"\n";

}
function leapChecker(year) 
{
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) 
    {
        months[1] = 29;
    } 
    else {
        months[1] = 28;
    }
}
