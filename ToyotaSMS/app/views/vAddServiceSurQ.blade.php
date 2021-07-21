@extends('Layouts.adminLayout')
@section('content')

<link rel="stylesheet" href="plugins/css/customDes.css">

<div class="container">
    <div class="card card-register mx-auto mt-5">
        <div class="card-header"><strong>Register New Service Survey Question</strong></div>
      <div class="card-body">
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6" >
                <label for="inpQNo" id="lbQNo">Number</label>
                <input class="form-control " id="inpQNo" type="text" maxlength="3" aria-describedby="nameHelp" placeholder="Enter question number">
              </div>
                
              <div class="col-md-6">
                <label for="exampleInputPassword1" id="lbAnsTyp">Answer Type</label>
                <select class="combobox form-control" id="inpAnsTyp" name="AT" value="">
                                <option style="display:none"></option>
                                <option value='YesNo'>YesNo</option>
                                <option value='Comment'>Comment</option>
                                <option value='ExcellentPoor'>ExcellentPoor</option>
                                <option value='PoorAverageExcellent'>PoorAverageExcellent</option>
                                <option value='OverallSatisfaction'>OverallSatisfaction</option>
                                <option value='NetPromoterScore'>NetPromoterScore</option>
                </select>
              </div>  
            </div>
          </div>
          
          <div class="form-group" >
            <label for="exampleInputEmail1" id="lbSurveyQ">Survey Question</label>
            <input class="form-control" id="inpSurveyQ" type="text" aria-describedby="emailHelp" placeholder="Enter survey question">
          </div>
          <div class="form-group">
            <div class="form-row">
              
<!--              <div class="col-md-6" >
                <label class="" for="exampleConfirmPassword" id="lbGrp">Group</label>
                <select class="combobox form-control" id="inpGrp" name="G" value="">
                                <option style="display:none"></option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                </select>
              </div>-->
            </div>
          </div>
          <a class="btn btn-primary btn-block" href="#" data-toggle="modal" data-target="#SaveYesNo">Register</a>
      </div>
    </div>
    
    
    <div id="SaveYesNo" class="modal fade" role="dialog">
        <div class="modal-dialog Diag">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
                <strong class="modal-title"><i class="fa fa-save"></i> Register</strong>
            </div>
            <div class="modal-body">
              <p>Are you sure that all of your inputs are correct?</p>
                <div class="col-sm-12 text-center" id="">
                    <div class="btn-group" role="group" aria-label="...">
                        <button type="submit" class="btn btn-primary" id="aRegQService" data-dismiss="modal"><i class="fa fa-save" ></i> YES</button>
                        <button type="submit" class="btn btn-danger" id="bEdtNo" data-dismiss="modal"><i class="fa fa-close" ></i> NO</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    
    
  </div>

  <script src="plugins/js/ajxInsert.js"></script>
@stop

