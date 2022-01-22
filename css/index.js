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


        leapChecker(current_year);   
        console.log(months,current_year);
        console.log(current_year%4);
        console.log(current_year%100 , current_year%400);

        

        if (year_birth > current_year || (month_birth > current_month && year_birth == current_year) ||
            (date_birth > current_date && month_birth == current_month && year_birth == current_year)
        ) {
            alert("NOT BORN YET");
            return;
        }

        calculated_year = current_year - year_birth; // 1
        console.log(calculated_year);
        if(current_month >= month_birth){
            calculated_month = current_month - month_birth;
            console.log("if",calculated_month);
        } else {
            calculated_year--; // 1 0
            calculated_month = current_month - month_birth
            calculated_month += 12;    // 14
            console.log("else",calculated_month);
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
        return displayResult(calculated_date,calculated_month,calculated_year);    
    }

    function displayResult(bDate,bMonth,bYear){
        // var years = ChronoUnit.YEARS.between(start, end);
        var result_div = document.getElementsByTagName('textarea')[0];
        result_div.innerHTML = +bYear+"Year,\t"+bMonth+"Month "+bDate+"Day\t";
    }
    
    function leapChecker(year)   //2000
    {
        if (year % 4 == 0 && (year % 100 == 0 && year % 400  == 0)) // 
        {
            months[1] = 28;  //28
        } 
        else {
            months[1] = 29;  //29
        }
    }