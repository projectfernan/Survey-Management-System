@extends('Layouts.SurveyLayout')
@section('content')

<!--<link rel="stylesheet" href="includes/fontawesome4/css/font-awesome.min.css">
<link rel="stylesheet" href="includes/build/jquery.datetimepicker.min.css">-->

<link rel="stylesheet" type="text/css" href="includes/dtpicker/src/DateTimePicker.css" />
<link rel="stylesheet" type="text/css" href="includes/dtpicker/src/jquery.mobile-1.4.0.min.css" />

<script type="text/javascript" src="includes/dtpicker/src/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="includes/dtpicker/src/DateTimePicker.js"></script>
                
<div class="container">
    <div class="panel panel-info panel-title" id="ncPanel">
            <div class="panel-heading text-center hp" id="ncH">Please fill in the information below to complete your registration.</div>
                <div class="panel-body questions" id="ncsPanel">
                    <div class="container" id="txtDiv">
                        
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6" id="lbName">Name : 
                                    <input class="form-control" placeholder="Enter name here" type="text" id="inpName" name="txtName" maxlength="50">
                                </div>
                                <div class="col-md-6" id="lbNikName">Nick Name : 
                                    <input class="form-control" placeholder="Enter nick name here" type="text" id="inpNikName" name="txtNikName" maxlength="30">
                                </div>
                            </div>
                        </div>
                        
                        <div class ="form-group">
                            <div class="row">
                                <div class="col-md-6" id="lbBday">Birthday :
                                    <input class="form-control" data-field="date" id="inpBday" placeholder="MM-dd-yyyy" type="text" maxlength="10" readonly>
                                </div>
                                <div class="col-md-6" id="lbStat">Marital Status : 
                                     <select class="combobox form-control" id="inpStat" name="mStat" value="">
                                        <option style="display:none"></option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Widowed">Widowed</option>
                                        <option value="Separated">Separated</option>
                                        <option value="Divorced">Divorced</option>
                                    </select>   
                                </div>
                            </div>
                        </div>
                        
                        <div class ="form-group">
                            <div class="row">
                                <div class="col-md-6" id="lbContact">Contact Number : 
                                    <input class="form-control" placeholder="09XX-XXX-XXXX / 554-XXX*101(Loc)" type="text" id="inpContact" name="txtContact" maxlength="50">
                                </div>
                                <div class="col-md-6" id="lbEmail">Email : 
                                    <input class="form-control" placeholder="Enter email" type="text" id="inpEmail" name="txtEmail" maxlength="30">
                                </div>
                            </div>
                        </div>
                        
                        <div class ="form-group">
                            <div class="row">
                                <div class="col-md-12" id="lbAdd">Home Address : 
                                    <input class="form-control" placeholder="Enter home adress" type="text" id="inpAdd" name="txtAddress" maxlength="80">
                                </div>
                            </div>
                        </div>
                        
                        <div class ="form-group">
                            <div class="row">
                                <div class="col-md-12" id="lbComp">Company Name : 
                                    <input class="form-control" placeholder="Enter company name" type="text" id="inpComp" name="txtComp" maxlength="30">
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-12" id="lbCompAdd">Company Address : 
                                    <input class="form-control" placeholder="Enter company address" type="text" id="inpCompAdd" name="txtCompAdd" maxlength="80">
                                </div>
                            </div>
                        </div>
                        
                        <div class ="form-group">
                            <div class="row">
                                <div class="col-md-6" id="lbOccu">Occupation : 
                                    <input class="form-control" placeholder="Enter occupation" type="text" id="inpOccu" name="txtOccu" maxlength="30">
                                </div>
                                <div class="col-md-6" id="lbField">Field/Industry : 
                                    <input class="form-control" placeholder="Enter field/industry" type="text" id="inpField" name="txtField" maxlength="30">
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6" id="lbPlate">Plate Number : 
                                    <input class="form-control" placeholder="Enter plate number" type="text" id="inpPlate" name="txtPlate" maxlength="7" style='text-transform:uppercase'>
                                </div>
                                <div class="col-md-6" id="lbUnit">Unit Model : 
                                    <select class="combobox form-control" id="inpUnit" name="UnitModel">
                                        <option style="display:none"></option>
                                        @foreach($Model as $rs)
                                        <option value='{{ $rs->UnitModel }}'>{{ $rs->UnitModel }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-12" id="lbUsage">Usage of vehicle : 
                                    <input class="form-control" placeholder="Enter usage of vehicle" type="text" id="inpUsage" name="txtUsage" maxlength="30">
                                </div>
                            </div>
                        </div>   
                        
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-12" id="lbSports">Sports : 
                                    <input class="form-control" placeholder="Enter sports" type="text" id="inpSports" name="txtSports" maxlength="50">
                                </div>
                            </div>
                        </div>   
                        
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-12" id="lbInterest">Cultural/Interest : 
                                    <input class="form-control" placeholder="Enter cultural/interest" type="text" id="inpInterest" name="txtInterest" maxlength="50">
                                </div>
                            </div>
                        </div>  
    
                        <p> <strong>NOTICE: All information provided will assured are strictly confidential and shall not be disclosed to any person or other entity.</strong> </p>
               
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-12">
                                    <label> </label>
                                    <button type="submit" class="btn btn-default" name='Save' data-toggle="modal" data-target="#SaveConfirm"><i class="fa fa-save"></i> Submit</button>
                                </div>
                            </div>
                        </div>    
                    </div>
                    
                    <div id="pInfo">
                        <p class="ncsInfo" id="ncMsg">
                        Your personal information is successfully saved!
                    </p>
                    <p class="ncsInfo" id="pBtn">
                        <button type="submit" class="btn btn-success" id="ncCon">Continue</button>
                    </p>
                    </div>
                </div>
    </div>
    <div class='col-sm-12'><label></label></div>
    
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
                        <button type="submit" class="btn btn-primary" id="btnSave" name="Yes" data-dismiss="modal"><i class="fa fa-save" ></i> YES</button>
                        <button type="submit" class="btn btn-danger" id="bEdtNo" name="No" data-dismiss="modal"><i class="fa fa-close" ></i> NO</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">

            </div>  
          </div>
        </div>
    </div>
    
</div>




<script src="plugins/js/datepicker.js"></script>
<script src="plugins/js/AjaxInsert.js"></script>
<script src="plugins/js/AjaxHandler.js"></script>

@stop
