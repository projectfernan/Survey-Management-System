<?php
class cGetServiceSurvey extends Controller{
    
    public function cfViewData()
    {
       if(Session::has('custId')){
            $rs = mtblseradvisor::mfGetSerAdv();
            $arDT = mDtNow::mfGetdtnow();

            if (count($rs)> 0 ){
                return View::make('vServiceSurvey',array(
                    'arrDT'=>$arDT,
                    'serAdvRec'=>$rs
                ));
            }
       }
       else{
           return Redirect::to('Home');
       }
    }

    public function cfappSerSur()
    {
       if(Session::has('custId')){
            $rs3 = mtblservicequestion::mfgetserviceQ();
            
            if(count($rs3) > 0){
                return json_encode($rs3);
            }
       }
    }
    
}
