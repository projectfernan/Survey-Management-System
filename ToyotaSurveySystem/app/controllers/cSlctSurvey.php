<?php

class cSlctSurvey extends Controller{
     public static function cfSlctSurvey(){
        if(Session::has('custId')){
            return View::make('vSelectSurvey');
        }
        else{
            return View::make('vMain');
        }
     }
}
