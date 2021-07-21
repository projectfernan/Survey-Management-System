<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
Route::get('Select', function(){return View::make('vSelectSurvey');});
Route::get('/', function(){return View::make('vMain');});
Route::get('Home', function(){return View::make('vMain');});
Route::get('CustInfo', function(){return View::make('vCustInfo');});
Route::get('SurveyDone', function(){return View::make('vSurveyDone');});
Route::get('SalesSurvey', function(){return View::make('vSalesSurvey');});
Route::get('SelectSurvey',array('as'=>'SelectSurvey','uses'=>'cSlctSurvey@cfSlctSurvey'));
Route::get('ExistingCust',array('as'=>'ExistingCust','uses'=>'cGetCustInfo@cfGetCustInfo'));
Route::post('nExistingCust',array('as'=>'nExistingCust','uses'=>'cGetCustInfo@cfGetnCustInfo'));
Route::get('ServiceSurvey',array('as'=>'ServiceSurvey','uses'=>'cGetServiceSurvey@cfViewData'));
Route::post('appServiceSurvey',array('as'=>'appServiceSurvey','uses'=>'cGetServiceSurvey@cfappSerSur'));
Route::get('SalesSurvey',array('as'=>'SalesSurvey','uses'=>'cGetSalSur@cfGetSalSur'));
Route::post('appSalesSurvey',array('as'=>'appSalesSurvey','uses'=>'cGetSalSur@cfappSalSur'));
Route::post('NewCust',array('as'=>'NewCust','uses'=>'cInsCust@cfInsCust'));
Route::get('ShowNewCust',array('as'=>'ShowNewCust','uses'=>'cInsCust@cfVehModel'));
Route::post('SerSurDone',array('as'=>'SerSurDone','uses'=>'cInsSerSur@cfInsSerSur'));
Route::post('SalSurDone',array('as'=>'SalSurDone','uses'=>'cInsSalSur@cfInsSalSur'));

