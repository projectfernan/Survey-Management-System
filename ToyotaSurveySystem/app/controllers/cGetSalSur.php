<?php

class cGetSalSur extends Controller {
    public function cfGetSalSur()
    {
       if(Session::has('custId')){
            $rs1 = mtblmktgprof::mfGetmktgprof();
            $rs2 = mtbltypeoftrans::mfGetTypeOfTrans();
            $arDT = mDtNow::mfGetdtnow();
            
            if (count($rs1)> 0 && count($rs2)> 0){
                return View::make('vSalesSurvey',array(
                    'arrDT'=>$arDT,
                    'mktg'=>$rs1,
                    'tot'=>$rs2
                ));  
            }
       }
       else{
           return Redirect::to('/');
       }
    }
    
    public function cfappSalSur()
    {
       if(Session::has('custId')){
            $rs3 = mtblsalesquestion::mfgetsalesQ();
            
            if(count($rs3) > 0){
                return json_encode($rs3);
            }
       }
    }
}
