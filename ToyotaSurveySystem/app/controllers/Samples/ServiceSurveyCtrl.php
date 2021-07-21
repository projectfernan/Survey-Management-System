<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ServiceSurveyCtrl
 *
 * @author f-Laptop
 */
class ServiceSurveyCtrl extends Controller{
    //put your code here
    public function ViewSurvey ()
    {
        return View::make('SurveyService');
    }
}
