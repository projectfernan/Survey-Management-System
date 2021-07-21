@extends('Layouts.adminLayout')
@section('content')

<link rel="stylesheet" href="plugins/css/customDes.css">

<link rel="stylesheet" type="text/css" href="includes/dtpicker/src/DateTimePicker.css" />
<link rel="stylesheet" type="text/css" href="includes/dtpicker/src/jquery.mobile-1.4.0.min.css" />

<script type="text/javascript" src="includes/dtpicker/src/DateTimePicker.js"></script>


<div class="container">
    <div class="card card-register mx-auto mt-3">
        <div class="card-header"><strong>Generate Sales Survey Detailed Report</strong></div>
        <div class="card-body">
            
            <!--<form action="{{URL::route("pdfSalesDetaRep")}}" method="get">-->
                <div class="form-group">
                  <div class="form-row">
                    <div class="col-md-12">
                        <label for="inpRepCateg" id="LBinpRepCateg">Report Category 1:</label>
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
                  <div class="form-row">
                    <div class="col-md-12">
                        <label for="inpRepCateg2" id="LBinpRepCateg2">Report Category 2:</label>
                        <select class="combobox form-control" id="inpRepCateg2" name="inpRepCateg2" value="">
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
                  <div class="form-row">
                    <div class="col-md-12">
                        <label for="inpRepCateg3" id="LBinpRepCateg3">Report Category 3:</label>
                        <select class="combobox form-control" id="inpRepCateg3" name="inpRepCateg3" value="">
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
                  <div class="form-row">
                    <div class="col-md-12">
                        <label for="inpRepCateg4" id="LBinpRepCateg4">Report Category 4:</label>
                        <select class="combobox form-control" id="inpRepCateg4" name="inpRepCateg4" value="">
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
            
<!--                <div class="form-group">
                  <div class="form-row">
                    <div class="col-md-12">
                        <label for="inpRepCateg5" id="LBinpRepCateg">Report Category 5:</label>
                        <select class="combobox form-control inp" id="inpRepCateg5" name="inpRepCateg5" value="">
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
                  <div class="form-row">
                    <div class="col-md-12">
                        <label for="inpRepCateg6" id="LBinpRepCateg">Report Category 6:</label>
                        <select class="combobox form-control inp" id="inpRepCateg6" name="inpRepCateg6" value="">
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
                </div>-->
                
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
            
                <!--<button type="sumbmit" class="form-control btn-primary text-center" >Generate</button>-->
                <a class="btn btn-primary btn-block" href="#" target="_parent" id="aGenSalesDetaRep">Generate</a>
            <!--</form>-->    
            
        </div>
        
    </div>
    <label></label>
</div>

<script src="plugins/js/GenerateRep.js"></script>
<script src="plugins/js/datepicker.js"></script>
@stop

