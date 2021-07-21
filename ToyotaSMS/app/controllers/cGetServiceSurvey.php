<?php
class cGetServiceSurvey extends Controller{
    
    public function cfViewData()
    {
       if(Session::has('custId')){
            $rs = mtblseradvisor::mfGetSerAdv();
            if (count($rs)> 0 ){
                return View::make('vServiceSurvey',array(
                    'serAdvRec'=>$rs
                ));
            }
            else{
                return View::make('vServiceSurvey',array(
                    'serAdvRec'=>$rs
                ));
            }
       }
       else{
           return Redirect::to('/');
       }
       
    }    
}
