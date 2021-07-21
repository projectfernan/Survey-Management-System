@extends('Layouts.SurveyLayout')
@section('content')
<link rel="stylesheet" href="includes/fontawesome4/css/font-awesome.min.css">

    <div class="container">  
        <div class="panel panel-default panel-title" id="mPanel">
            <div class="panel-heading text-center hp panel-danger" id="infoHd">Please enter your plate number:</div>
                <div class="panel-body questions">
                    <div class="container">
                        <input type="hidden" class="form-control" id="cusId">
                        <div class="input-group" id="txtpno">
                          <input type="text" class="form-control" id="txtPlate" maxlength="7" placeholder="Type your plate number here." style='text-transform:uppercase'>
                          <span class="input-group-btn">
                              <button class="btn btn-default" type="submit" id="bPlate"><i class="fa fa-search"></i></button>
                          </span>
                        </div><!-- /input-group -->
                            
                        <div class="table-responsive" id="tbhide">
                        <table class="table" id="customer">
                            <tbody>
                            <tr>
                              <td><strong>Name :</strong></td>
                              <td id="Name"></td>
                            </tr>

                            <tr>
                              <td><strong>Plate No :</strong></td>
                              <td id="plate"></td>
                            </tr>

                            <tr>
                              <td><strong>Contact No :</strong></td>
                              <td id="contact"></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        
                    </div>
                    <div class="text-center alert-info" role="alert" id="divhide">
                        <strong>This is you?</strong>
                        <div class="btn-group" role="group" aria-label="...">
                            <button type="submit" class="btn btn-default" id="bYes" name="Yes">Yes</button>
                            <button type="submit" class="btn btn-default" id="bNo" name="Yes">No</button>
                        </div>
                    </div>
                </div>
            <div class='col-sm-12'><label></label></div>
        </div> 
    </div>

<script src="plugins/js/AjaxInsert.js"></script>
<script src="plugins/js/AjaxHandler.js"></script>

@stop

