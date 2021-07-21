<?php Session::flush(); ?>
@extends('Layouts.SurveyLayout')
@section('content')
    <div class="container">  
        <div class="panel panel-default panel-title">
            <div class="panel-heading text-center hp">Survey System</div>
                <div class="panel-body questions">
                    <div class="row">
                        <div class='col-sm-1'></div>
                               <a href=" {{ url('CustInfo') }} " class="thumbnail col-sm-4 img-responsive text-center">
                                       Existing Customer<img src="includes/img/ExistingCust.png" alt="...">
                               </a>
                        <div class='col-sm-2'></div>
                               <a href=" {{ url('ShowNewCust') }} " class="thumbnail col-sm-4 img-responsive text-center img-wrapper">
                                       New Customer<img src="includes/img/AddCust.png" alt="...">
                               </a>      
                        <div class='col-sm-1'></div>
                    </div>
                </div>
        </div>
        <div class='col-sm-12'><label></label></div>
    </div>        
@stop
