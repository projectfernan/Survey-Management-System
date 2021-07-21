<?php

class cGetSalSur extends Controller {
    public function cfGetSalSur()
    {
       if(Session::has('custId')){
            $rs = mtblmktgprof::mfGetmktgprof();
            $rs2 = mtbltypeoftrans::mfGetTypeOfTrans();
            
            if (count($rs)> 0 && count($rs2)> 0){
                return View::make('vSalesSurvey',array(
                    'mktg'=>$rs,
                    'tot'=>$rs2
                ));
            }
       }
       else{
           return Redirect::to('/');
       }
    }
}
