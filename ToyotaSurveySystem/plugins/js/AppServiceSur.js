function appendServiceQuestion(){
    
    $.ajax({
            url:'appServiceSurvey',
            type:'post',
            
            success:function(data){
                    var _data = jQuery.parseJSON(data);
                    var _get = '';
                    var lup=0;
             
                    var qList = '';
                    $.each(_data,function(){
                        _get = _data[lup];
                        
                        qList += '<div class="col-sm-12 lb radioYN p'+ _get['Group'] +'" id="' + _get['No'] + '">' + _get['No'] + '. ' + _get['SurveyQuestion'] + '</div>';
                        
                        switch(_get['AnsType']) {
                        case 'YesNo':
                            qList += '<div class="col-sm-12 dv p' + _get['Group'] + '">';
                            qList += '<p>';
                            qList += '<input type="radio" class="radioYN p' + _get['Group'] + '" id="' + _get['No'] + 'y"';
                            qList += 'name="' + _get['No'] + '" value="Yes">';
                            qList += '<label for=' + _get['No'] + 'y>Yes</label>';
                            qList += ' ';
                            qList += '<input type="radio" class="radioYN p' + _get['Group'] + '" id="' + _get['No'] + 'n"';
                            qList += 'name="' + _get['No'] + '" value="No">';
                            qList += '<label for="' + _get['No'] + 'n">No</label>';
                            qList += '</p>';
                            qList += '</div>';
                            break;
                        case 'ExcellentPoor':
                            qList += '<div class="col-sm-12 p' + _get['Group'] + ' dv">';
                            qList += '<p>';
                            qList += '<input type="radio" class="radioYN p' + _get['Group'] + '" id="' + _get['No'] + 'e"';
                            qList += 'name="' + _get['No'] + '" value="Excellent">';
                            qList += '<label for="' + _get['No'] + 'e">Excellent</label>';
                            qList += ' ';
                            qList += '<input type="radio" class="radioYN p' + _get['Group'] + '" id="' + _get['No'] + 'p"';
                            qList += 'name="' + _get['No'] + '" value="Poor">';
                            qList += '<label for="' + _get['No'] + 'p">Poor</label>';
                            qList += '</p>';  
                            qList += '</div>';
                            break;
                        case 'Comment':
                            qList += '<div class="col-sm-6 dv p' + _get['Group'] + '">';
                            qList += '<p>';
                            qList += '<textarea class="form-control radioYN txt p' + _get['Group'] + '" name="' + _get['No'] + '" id="' + _get['No'] + '" placeholder="Enter your comment or suggestion (Optional)" value=""></textarea>';
                            qList += '</p>';
                            qList += '</div>';
                            break;
                        case 'Rating':
                            qList += '<div class="col-sm-12 dv p' + _get['Group'] + '">';
                            qList += '<ul class="rate">';
                            qList += '<li class="star r' + _get['No'] + '" name="' + _get['No'] + '"><label for="' + _get['No'] + 'r1"><i class="fa fa-star" aria-hidden="true"></i></label><input class="str radioYN p' + _get['Group'] + '" type="radio" name="' + _get['No'] + '" id="' + _get['No'] + 'r1" value="1"/></li>';
                            qList += '<li class="star r' + _get['No'] + '" name="' + _get['No'] + '"><label for="' + _get['No'] + 'r2"><i class="fa fa-star" aria-hidden="true"></i></label><input class="str radioYN p' + _get['Group'] + '" type="radio" name="' + _get['No'] + '" id="' + _get['No'] + 'r2" value="2"/></li>';
                            qList += '<li class="star r' + _get['No'] + '" name="' + _get['No'] + '"><label for="' + _get['No'] + 'r3"><i class="fa fa-star" aria-hidden="true"></i></label><input class="str radioYN p' + _get['Group'] + '" type="radio" name="' + _get['No'] + '" id="' + _get['No'] + 'r3" value="3"/></li>';
                            qList += '<li class="star r' + _get['No'] + '" name="' + _get['No'] + '"><label for="' + _get['No'] + 'r4"><i class="fa fa-star" aria-hidden="true"></i></label><input class="str radioYN p' + _get['Group'] + '" type="radio" name="' + _get['No'] + '" id="' + _get['No'] + 'r4" value="4"/></li>';
                            qList += '<li class="star r' + _get['No'] + '" name="' + _get['No'] + '"><label for="' + _get['No'] + 'r5"><i class="fa fa-star" aria-hidden="true"></i></label><input class="str radioYN p' + _get['Group'] + '" type="radio" name="' + _get['No'] + '" id="' + _get['No'] + 'r5" value="5"/></li>';
                            qList += '</ul>';
                            qList += '</div>';
                            break;
                        case 'PoorAverageExcellent':
                            qList += '<div class="col-sm-12 dv p' + _get['Group'] + '">';
                            qList += '<p>';
                            qList += '<input type="radio" class="radioYN p' + _get['Group'] + '" id="' + _get['No'] + 'p"';
                            qList += 'name="' + _get['No'] + '" value="Poor">';
                            qList += '<label for="' + _get['No'] + 'p">Poor</label>';
                            qList += ' ';
                            qList += '<input type="radio" class="radioYN p' + _get['Group'] + '" id="' + _get['No'] + 'a"';
                            qList += 'name="' + _get['No'] + '" value="Average">';
                            qList += '<label for="' + _get['No'] + 'a">Average</label>';
                            qList += ' ';
                            qList += '<input type="radio" class="radioYN p' + _get['Group'] + '" id="' + _get['No'] + 'e"';
                            qList += 'name="' + _get['No'] + '" value="Excellent">';
                            qList += '<label for="' + _get['No'] + 'e">Excellent</label>';
                            qList += '</p>';
                            qList += '</div>';
                            break;
                        case 'OverallSatisfaction':   
                            qList += '<div class="col-sm-3 dv p' + _get['Group'] + '">';
                            qList += '<p>';
                            qList += '<select class="combobox form-control radioYN cb p' + _get['Group'] + '" id="' + _get['No'] + '" name="' + _get['No'] + '" value="">';
                            qList += '<option style="display:none"></option>';
                            qList += '<option value="Very Satisfied">Very Satisfied</option>';
                            qList += '<option value="Satisfied">Satisfied</option>';
                            qList += '<option value="Neither Satisfied nor Dissatisfied">Neither Satisfied nor Dissatisfied</option>';
                            qList += '<option value="Dissatisfied">Dissatisfied</option>';
                            qList += '<option value="Very Dissatisfied">Very Dissatisfied</option>';
                            qList += '</select>';
                            qList += '</p>';
                            qList += '</div>';
                            break;
                        case 'NetPromoterScore':
                            qList += '<div class="col-sm-3 dv p' + _get['Group'] + '">';
                            qList += '<p>';
                            qList += '<i>Highest-10   Lowest-0</i>';
                            qList += '<select class="combobox form-control radioYN cb p' + _get['Group'] + '" id="' + _get['No'] + '" name="' + _get['No'] + '" value="">';
                            qList += '<option style="display:none"></option>';
                            qList += '<option value="10">10</option>';
                            qList += '<option value="9">9</option>';
                            qList += '<option value="8">8</option>';
                            qList += '<option value="7">7</option>';
                            qList += '<option value="6">6</option>';
                            qList += '<option value="5">5</option>';
                            qList += '<option value="4">4</option>';
                            qList += '<option value="3">3</option>';
                            qList += '<option value="2">2</option>';
                            qList += '<option value="1">1</option>';
                            qList += '<option value="0">0</option>';
                            qList += '</select>';
                            qList += '</p>';
                            qList += '</div>';
                            break;    
                        default:
                            };
                            
                        lup++;
                    });
                    
                    $('.SerqAppend').empty();
                    $('.SerqAppend').append(qList);       
                    
                    $('.p1').hide();
//                    $('.p2').hide();
//                    $('.p3').hide();
//                    $('.p4').hide();
                    $('.str').hide();
                    $('#bPrev').hide();
            }
        });
}

$(function(){
    appendServiceQuestion();   
});