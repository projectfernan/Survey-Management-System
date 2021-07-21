@extends('Layouts.SurveyLayout')
@section('content')

<div class="container">
    <div class="panel panel-success panel-title">
            <div class="panel-heading text-center hp">THANK YOU !</div>
                <div class="panel-body questions text-center">
                    <p>
                        Thank you very much for your cooperation.
                    </p>
                    <p>
                        <button type="submit" class="btn btn-success" id="Done">Success</button>
                    </p>
                </div>
    </div>
    <div class='col-sm-12'><label></label></div>
</div>

<script src="plugins/js/AjaxHandler.js"></script>

@stop