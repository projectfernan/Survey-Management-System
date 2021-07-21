@extends('Layouts.SurveyLayout')
@section('content')



<div class="container">  
        <div class="panel panel-default panel-title">
            <div class="panel-heading text-center hp panel-danger">Please select the survey below:</div>
                <div class="panel-body questions">
                    <div class="row">
                        <div class='col-sm-1'></div>
                        <a href="#" class="thumbnail col-sm-4 img-responsive text-center" id="SalesSur">
                                       Sales Survey<img src="includes/img/CarSales.png" alt="...">
                               </a>
                        <div class='col-sm-2'></div>
                               <a href="#" class="thumbnail col-sm-4 img-responsive text-center" id="ServiceSur">
                                       Service Survey<img src="includes/img/CarService.png" alt="...">
                               </a>      
                        <div class='col-sm-1'></div>
                    </div>
                </div>    
        </div>
    
        <div class='col-sm-12'><label></label></div>
</div> 

<script src="plugins/js/AjaxHandler.js"></script>

@stop

