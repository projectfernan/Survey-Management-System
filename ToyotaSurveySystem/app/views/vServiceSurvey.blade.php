@extends('Layouts.SurveyLayout')
@section('content')
    
<!--<link rel="stylesheet" href="includes/build/jquery.datetimepicker.min.css">-->
<!--<link rel="stylesheet" href="plugins/css/ratings.css">-->

<link rel="stylesheet" type="text/css" href="includes/dtpicker/src/DateTimePicker.css" />
<link rel="stylesheet" type="text/css" href="includes/dtpicker/src/jquery.mobile-1.4.0.min.css" />

<script type="text/javascript" src="includes/dtpicker/src/DateTimePicker.js"></script>

<div class="container">  
    <div class="panel panel-default" id="PanelTyp">
        <div class="panel-heading text-center hp" id="SerSurPh">Service Customer Survey</div>
            <div class="panel-body questions">

                    <div class="form-group">
                        <div class="row" id="dttime">
                            
                            <div class="col-md-6 p0" id="sa">Service Advisor:
                                <select class="combobox form-control" id="SerAdv" name="ServAdv">
                                     <option style="display:none"></option>
                                     @foreach($serAdvRec as $rs)
                                     <option value='{{ $rs->ServiceAdvisor }}'>{{ $rs->ServiceAdvisor }}</option>
                                     @endforeach
                                </select>
                            </div><!-- /.col-lg-6 -->
                            
                            @foreach($arrDT as $arDT)
                            <div class="col-md-3 ar ta p0" id="lbTA">Arrival Date :
                                <input class="form-control" id="ArrDate" data-field="date" value="{{ $arDT->DateNow }}" placeholder="MM-dd-yyyy" type="text" maxlength="10" readonly>
                            </div><!-- /.col-lg-6 -->
                            <div class="col-md-3 ar ta p0" id="lbTAt">Arrival Time :
                                <input class="form-control" id="ArrTime" data-field="time" value="{{ $arDT->TimeNow }}" placeholder="HH:mm" type="text" maxlength="6" readonly>
                            </div><!-- /.col-lg-6 -->
                            @endforeach
                        </div>
                    </div>
                    
                <div class="row SerqAppend">
                    
                </div>        

                <button type="submit" class="btn btn-default p1" name='save' value='sumbmit' data-toggle="modal" data-target="#SaveConfirm"><i class="fa fa-save"></i> Submit</button>
                
                <div class="col-sm-12"><label></label></div>
                
                <div class="col-sm-12 text-center" id="">
                    <div class="btn-group" role="group" aria-label="...">
                        <button type="submit" class="btn btn-default" id="bPrev" name="Yes">Previous</button>
                        <button type="submit" class="btn btn-default" id="bNxtService" name="Yes">Next</button>
                    </div>
                </div>
        </div> 
    </div>
</div>

<div id="SaveConfirm" class="modal" role="dialog">
    <div class="modal-dialog Diag">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
            <strong class="modal-title"><i class="fa fa-save"></i> Submit</strong>
        </div>
        <div class="modal-body">
          <p>Are you sure that all of your inputs are correct?</p>
            <div class="col-sm-12 text-center" id="">
                <div class="btn-group" role="group" aria-label="...">
                    <button type="submit" class="btn btn-primary" id="save" name="Yes" data-dismiss="modal"><i class="fa fa-save" ></i> YES</button>
                    <button type="submit" class="btn btn-danger" id="bEdtNo" name="No" data-dismiss="modal"><i class="fa fa-close" ></i> NO</button>
                </div>
            </div>
        </div>
        <div class="modal-footer">
        
        </div>  
      </div>
    </div>
</div>

<script src="plugins/js/AppServiceSur.js"></script>    
<!--<script type="text/javascript" src="bootstrap/datepicker/dist/js/bootstrap-datepicker.min.js"></script>-->
<script src="plugins/js/datepicker.js"></script>
<!--<script src="plugins/js/ratings.js"></script>--> 
<script src="plugins/js/AjaxInsert.js"></script>
<script src="plugins/js/AjaxHandler.js"></script>

@stop