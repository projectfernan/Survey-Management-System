@extends('Layouts.adminLayout')
@section('content')


<link rel="stylesheet" href="plugins/css/customDes.css">

<link rel="stylesheet" type="text/css" href="includes/dtpicker/src/DateTimePicker.css" />
<link rel="stylesheet" type="text/css" href="includes/dtpicker/src/jquery.mobile-1.4.0.min.css" />

<script type="text/javascript" src="includes/dtpicker/src/DateTimePicker.js"></script>
<script type="text/javascript" src="plugins/js/Chart.min.js"></script>

<div class="container" id="SalesBarParam">
    <div class="card card-register mx-auto mt-5">
        <div class="card-header"><strong>Generate Service Survey Bar Graph Report</strong></div>
        <div class="card-body">
            
            <!--<form action="{{URL::route("pdfSalesDetaRep")}}" method="get">-->
                <div class="form-group">
                  <div class="form-row">
                    <div class="col-md-12">
                        <label for="inpAnsTyp" id="LBinpRepCateg">Report Category :</label>
                        <select class="combobox form-control inp" id="inpRepCateg" name="inpRepCateg" value="">
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

                <div class="form-group">
                  <div class="form-row" id="dtFT">
                      <div class="col-md-6">
                          <label for="inpDtFrm" id="LBinpDtFrm">Date From :</label>
                          <input class="form-control inp" data-field="date" id="inpDtFrm" name="inpDtFrm" placeholder="yyyy-MM-dd" type="text" maxlength="10" readonly>
                      </div>

                      <div class="col-md-6">
                           <label for="inpDtTo" id="LBinpDtTo">Date To :</label>
                          <input class="form-control inp" data-field="date" id="inpDtTo" name="inpDtTo" placeholder="yyyy-MM-dd" type="text" maxlength="10" readonly>
                      </div>
                  </div>
                </div>
<!--                <button type="sumbmit" class="form-control btn-primary text-center" >Generate</button>-->
                <a class="btn btn-primary btn-block" href="#" target="_parent" id="aGenServiceBarRep">Generate</a>
            <!--</form>-->    
            
        </div>
    </div>
</div>

    <div class="container" id="SalesBarGraph">
        <div class="panel-default">
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <label></label>
                            <canvas id="myChart"></canvas>
                        <label></label>
                    </div>
                     <div class="col-md-3 text-center">
                        <label></label>
                    </div>
                    <div class="col-md-3 text-center">
                        <button class="btn btn-secondary btn-block" href="#" id="bServiceBarBack">Back</button>
                    </div>
                    <div class="col-md-3 text-center">
                        <button class="btn btn-primary btn-block" href="#" id="bSalesBarPrint">Print</button>
                    </div>
                </div>
            </div> 
        </div>
    </div>


<script src="plugins/js/GenerateRep.js"></script>
<script src="plugins/js/datepicker.js"></script>
@stop

