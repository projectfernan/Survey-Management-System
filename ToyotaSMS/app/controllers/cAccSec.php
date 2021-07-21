<?php

class cAccSec extends Controller {
    public static function cfGetAcc() {
        $ajx = Input::get('data');
        $base64 = base64_decode($ajx);
        $js = json_decode($base64,true);
        
        $rjs = array($js['_UID'],
                     $js['_PWD']
                );
        
        $rs = mtblaccounts::mfGetAcc($rjs);
        
        if (count($rs) > 0){
            foreach($rs as $r){
                Session::put('Desig',$r->Designation);
                Session::save();
                Session::put('User',$r->Username);
                Session::save();
                Session::put('Name',$r->Name);
                Session::save();
            }
            return "Granted";
        }
        else{
            return "Denied";
        }
    }
    
    public static function cfvLogin(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            return View::make('vMain');
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public static function cfLogout(){
        Session::forget('Desig');
        Session::save();
        Session::forget('User');
        Session::save();
        Session::forget('Name');
        Session::save();
        
        Session::forget('SurRec');
        Session::save();
        Session::forget('CustRec');
        Session::save();
        Session::forget('Ques');
        Session::save();
        Session::forget('CustRep');
        Session::save();
        Session::forget('Tot');
        Session::save();
        Session::forget('VehUnit');
        Session::save();
        Session::forget('Reports');
        Session::save();
        Session::forget('Settings');
        Session::save();
        
        return View::make('vLogin');
    }
    
}
